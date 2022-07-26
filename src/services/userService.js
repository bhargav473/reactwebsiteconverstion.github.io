import jwtDecode from 'jwt-decode';
import http from './httpService';

const userEndpoint = '/users';
const tokenKey = 'token';

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export async function login(email, password) {
  const { data: jwt } = await http.post(userEndpoint + '/login', {
    email,
    password
  });
  if (jwt.twofa) {
    return jwt;
  } else {
    localStorage.setItem(tokenKey, jwt);
    return jwt;
  }
}

export function register(data) {
  return http.post(userEndpoint + '/register', data);
}

export function activate(token) {
  return http.post(userEndpoint + '/activate', { token });
}

export function forgotPass(email) {
  return http.post(userEndpoint + '/forgot', { email });
}

export function resetPass(token, password) {
  return http.post(userEndpoint + '/reset', { token, password });
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const some = jwtDecode(jwt);
    if (some.exp >= Date.now() / 1000) {
      return some;
    }
    logout();
  } catch (ex) {
    return null;
  }
}

export async function valTfa(email, token) {
  const { data: jwt } = await http.post(userEndpoint + '/validate', {
    email,
    token
  });
  if (jwt.error) {
    return jwt;
  } else {
    localStorage.setItem(tokenKey, jwt);
    return jwt;
  }
}

export default {
  login,
  register,
  forgotPass,
  resetPass,
  activate,
  logout,
  getCurrentUser,
  valTfa
};
