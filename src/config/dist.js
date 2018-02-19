import baseConfig from './base';

const config = {
  appEnv: 'dist',
  server: 'http://api.atdesk.co'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
