import baseConfig from './base';

const config = {
  appEnv: 'dev',
  server: 'http://api.atdesk.co/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
