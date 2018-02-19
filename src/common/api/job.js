import Request from '../api/request.js';
import {loadState} from '../localStorage';

const Job = {
  updateJob(id) {
    const data = loadState().job;
    return Request.post(`job/${id}`, data);
  },
  saveJob(job) {
    if (job.id && job.id !== '') {
      return Request.post(`job/${job.id}`, job);
    }
    return Request.post('job', job);

  },
  saveHiringProcess(data) {
    return Request.post('hiring-process', data);
  },
  loadHiringProcess(jobId) {
    return Request.get(`hiring-process/${jobId}`);
  },
  saveScoreQuestion(data) {
    return Request.post('score-question', data);
  },
  loadScoreQuestion(processId) {
    return Request.get(`score-question/${processId}`);
  },
  getAppliedCandidates(jobId) {
    return Request.get(`jobapply/${jobId}/candidates`);
  },
  changeCandidateAppliedStage(jobId, candidateId, stage) {
    return Request.get(`jobapply/${jobId}/candidates/${candidateId}/stage/${stage}`);
  },
  saveInterviewPanel(data) {
    return Request.post('interview-panel', data);
  },
  loadInterviewPanel(processId) {
    return Request.get(`interview-panel/${processId}`);
  },
  applyJob(jobId, orgId, data) {
    data.jobId = jobId;
    data.organization = orgId;
    return Request.post(`jobapply/${jobId}`, data);
  },
  getJob(id) {
    return Request.get(`job/${id}`);
  },
  getJobInterviewers(id) {
    return Request.get(`job/${id}/interviewers`);
  },
  getJobs() {
    return Request.get('jobs');
  },
  getAllEnableJobs(name) {
    return Request.get(`jobs/${name}`);
  },
};

module.exports = Job;

