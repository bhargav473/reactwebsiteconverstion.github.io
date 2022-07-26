import http from './httpService';

const userAuthEndpoint = '/userauth';

export function disTfa(email, token) {
  return http.post(userAuthEndpoint + '/disable', { email, token });
}

export function enTfa(email, token) {
  return http.post(userAuthEndpoint + '/activate', { email, token });
}

export function getTfa(email) {
  return http.post(userAuthEndpoint + '/gettfa', { email });
}

export default {
  valTfa,
  disTfa,
  enTfa
};
