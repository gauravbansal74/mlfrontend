import Request from '../api/request.js';

const Inbox = {
  getAllInboxMessage() {
    return Request.get('inbox');
  }
};

module.exports = Inbox;
