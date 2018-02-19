import Request from '../api/request.js';

import {saveCookies} from '../cookies';

const Register = {
  createAccount(data) {
    return Request.post('register', data);
  },
  emailConfirmation(id) {
    return Request.post(`register/${id}/confirmation`, null);
  },
  setupAccount(user) {
    return Request.post(`account/${user.id}/setup`, user);
  },
  loginAccount(email, password) {
    const data = {email, password};
    return Request.post('login', data).then((result, status, response) => {
      saveCookies('token', response.getResponseHeader('O-Encoding'));
      return result;
    });
  }
};

module.exports = Register;

