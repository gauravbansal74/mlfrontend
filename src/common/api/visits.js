import Request from '../api/request.js';

const Visits = {
  loadVisitData(date) {
    return Request.get('visits/'+date);
  },
  loadDataSources() {
      return Request.get('data-sources');
    }
};

module.exports = Visits;

