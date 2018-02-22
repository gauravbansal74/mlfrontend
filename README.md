## Quick Start
Try on [Demo](http://demo.atdesk.co) page. Or Install on your local PC. Check [Guide](#install-on-your-local-pc) to how to install.

## Getting Started

### Technology Stack
HTML, CSS, JavaScript, ES7, ReactJS, Webpack, NodeJS(v8.9.1), npm(5.5.1)

* HTML
* CSS
* JavaScript (ES6, ES7)
* ReactJS
* Webpack
* Nodejs(v8.9.1)
* NPM (5.5.1)

### Install On your local PC

#### Download Sources

use git

```bash
git clone https://github.com/gauravbansal74/mlfrontend.git
```

```bash
cd mlfrontend
```


#### Download dependencies

use [NPM](https://www.npmjs.com/)

```bash
npm install
```

#### Update Configuration

update server configuration file as per your local configuration [dev.js](https://github.com/gauravbansal74/mlfrontend/blob/master/src/config/dev.js) or [dist.js](https://github.com/gauravbansal74/mlfrontend/blob/master/src/config/dist.js)

```js
const config = {
  appEnv: 'dev',
  server: 'http://localhost:8081/' . #Rest API server URL
};
```

#### run server in development
```bash
npm start
```

#### use front-end application
```bash
 http://localhost:8000/ #Front Server
```


#### build front-end application code for deployment
```bash
npm run dist #dist folder will have minified code for front-end application
```

