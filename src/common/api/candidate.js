import Request from '../api/request.js';

const Candidate = {
  getAll() {
    return Request.get('candidates');
  },
  get(id) {
    return Request.get(`candidates/${id}`);
  }
};

module.exports = Candidate;

