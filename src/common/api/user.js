import Request from '../api/request.js';
import {loadState} from '../localStorage';
import {saveCookies} from '../cookies';

const User = {
  getUser() {
    return Request.get('user');
  },
  updateUser(user) {
    return Request.post('user', user);
  },
  updateUserProfessional(user) {
    return Request.post('user-professional', user);
  },
  createMember(member) {
    return Request.post('members', member);
  },
  getMembers() {
    return Request.get('members');
  },
  getMember(memberId) {
    return Request.get(`member/${memberId}`);
  },
  changeOrganization(index) {
    return Request.post(`user/${index}/organization`).then((result, status, response) => {
      saveCookies('token', response.getResponseHeader('O-Encoding'));
      return result;
    });
  }
};

module.exports = User;

