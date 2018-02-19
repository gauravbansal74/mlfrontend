
import Cookies from 'js-cookie';

const loadCookies = (name) => {
  try {
    return Cookies.get(name);
  } catch (err) {
    return undefined;
  }
};

const saveCookies = (name, value) => { // Cookies.set(name, value, { domain: 'localhost' });
  Cookies.set(name, value);
};

const removeCookies = () => {
  Cookies.remove('token');
};

const cookies = { loadCookies, saveCookies, removeCookies};

module.exports = cookies;
