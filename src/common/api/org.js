import Request from '../api/request.js';

const Org = {
  getOrganization() {
    return Request.get('organization');
  },
  getOrganizationByName(name) {
    return Request.get(`organization/${name}`);
  },
  updateOrganization(organization) {
    return Request.post('organization', organization);
  },
};

module.exports = Org;

