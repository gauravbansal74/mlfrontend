import $ from 'jquery';
import config from 'config';
import {loadCookies} from '../cookies';

const Request = {
  post(path, data) {
    return $.ajax({
      url: config.server + path,
      type: 'POST',
      data: JSON.stringify(data),
      beforeSend: (request) => {
        request.setRequestHeader('content-type', 'application/json');
        request.setRequestHeader('O-Encoding', loadCookies('token'));
      }
    });
  },
  get(path) {
    return $.ajax({
      url: config.server + path,
      type: 'GET',
      beforeSend: (request) => {
        request.setRequestHeader('content-type', 'application/json');
        request.setRequestHeader('O-Encoding', loadCookies('token'));
      }
    });
  },
};

module.exports = Request;
