import Request from '../api/request.js';

class Jobs {
  static getAllEnableJobs(name) {
    return Request.get(`jobs/${name}`);
  }
}

export default Jobs;
