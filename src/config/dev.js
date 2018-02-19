import baseConfig from './base';

const config = {
  appEnv: 'dev',
  content: 'http://app.atdesk.co/content/',
  server: 'http://localhost:8081/',
  googleAnalytics: {
    trackingCode: 'UA-113155566-1',
    debug: false
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
