import $ from 'jquery';
import config from 'config';
import {loadCookies} from '../cookies';

const Uploader = {
  post(body, type, operation) {
    return $.ajax({
      url: `${config.server}uploader?type=${type}&operationType=${operation}`,
      type: 'POST',
      data: body,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: (request) => {
        request.setRequestHeader('O-Encoding', loadCookies('token'));
      }
    });
  }
};

module.exports = Uploader;

