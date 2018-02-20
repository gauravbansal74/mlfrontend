import Request from '../api/request.js';

import {saveCookies} from '../cookies';

const Register = {
  createAccount(data) {
    return Request.post('register', data);
  },
  loginAccount(email, password) {
    const data = {email, password};
    return Request.post('login', data).then((result, status, response) => {
      saveCookies('token', response.getResponseHeader('Authorization'));
      return result;
    });
  }
};

module.exports = Register;

