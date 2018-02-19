import Request from '../api/request.js';

const Visits = {
  loadVisitData(date) {
    if(date){
      return Request.get('visits/'+date);
    } else {
      return Request.get('visits');
    }

  },
  loadDataSources() {
      return Request.get('data-sources');
    }
};

module.exports = Visits;

