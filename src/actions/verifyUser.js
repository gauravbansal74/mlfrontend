import API from 'common/api/user';

function action() {
  return	API.getUser().then(res => res).catch(res => res);
}

module.exports = action;
