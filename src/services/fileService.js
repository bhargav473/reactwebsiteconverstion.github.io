import http from './httpService';

const filesEndpoint = '/files';

export function uploadFile(data) {
  return http.post(filesEndpoint + '/upload', data);
}

export function getFile(email, token) {
  return http.post(filesEndpoint + '/getfile', { email, token });
}

export default {
  uploadFile,
  getFile
};
