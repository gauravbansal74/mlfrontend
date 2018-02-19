import Request from '../api/request.js';

const Data = {
  getData(path, name) {
    let dataName = name;
    if (dataName === '') {
      dataName = 'all';
    }
    return Request.get(`${path}/${dataName}`);
  },
  save(path, data) {
    return Request.post(path, data);
  },
  delete(path, id) {
    return Request.post(`${path}/${id}/delete`);
  },
  saveData(path, label) {
    return Request.post(path, {label});
  }
};

module.exports = Data;

