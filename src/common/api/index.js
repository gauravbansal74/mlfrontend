import register from '../api/register.js';
import user from '../api/user.js';
import org from '../api/org.js';
import data from '../api/data.js';
import job from '../api/job.js';
import candidate from '../api/candidate.js';
import uploader from '../api/uploader.js';
import inbox from '../api/inbox.js';

const api = {register, user, org, data, job, candidate, uploader, inbox};
module.exports = api;
