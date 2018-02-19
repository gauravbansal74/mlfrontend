import Request from '../api/request.js';

const Visits = {
  loadVisitData(date) {
    return Request.get('visits/'+date);
  }
};

module.exports = Visits;

