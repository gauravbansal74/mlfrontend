import baseConfig from './base';

const config = {
  appEnv: 'dev',
  server: 'http://localhost:8081/'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
