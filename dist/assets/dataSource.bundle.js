webpackJsonp([2],{150:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(12);\n\nvar _reactRedux = __webpack_require__(9);\n\nvar _propTypes = __webpack_require__(5);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _actions = __webpack_require__(17);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar DataSourcePage = function (_React$Component) {\n  _inherits(DataSourcePage, _React$Component);\n\n  function DataSourcePage() {\n    _classCallCheck(this, DataSourcePage);\n\n    return _possibleConstructorReturn(this, (DataSourcePage.__proto__ || Object.getPrototypeOf(DataSourcePage)).apply(this, arguments));\n  }\n\n  _createClass(DataSourcePage, [{\n    key: 'render',\n    value: function () {\n      function render() {\n        var _props = this.props,\n            actions = _props.actions,\n            dataSources = _props.dataSources;\n\n        return _react2['default'].createElement('div', { className: 'col-md-9' }, _react2['default'].createElement('div', { className: 'row' }, _react2['default'].createElement('div', { className: 'col-md-12' }, dataSources.length > 0 ? _react2['default'].createElement('table', { className: 'table table-striped' }, _react2['default'].createElement('thead', null, _react2['default'].createElement('tr', null, _react2['default'].createElement('th', { scope: 'col' }, '#'), _react2['default'].createElement('th', { scope: 'col' }, 'File Name'), _react2['default'].createElement('th', { scope: 'col' }, 'Message'), _react2['default'].createElement('th', { scope: 'col' }, 'Status'), _react2['default'].createElement('th', { scope: 'col' }, 'Created'))), _react2['default'].createElement('tbody', null, dataSources.map(function (dataSource, index) {\n          return _react2['default'].createElement('tr', { key: dataSource._id }, _react2['default'].createElement('th', { scope: 'row' }, index + 1), _react2['default'].createElement('td', null, dataSource.fileName), _react2['default'].createElement('td', null, dataSource.message), _react2['default'].createElement('td', null, dataSource.status), _react2['default'].createElement('td', null, dataSource.created));\n        }))) : 'No Records')));\n      }\n\n      return render;\n    }()\n  }]);\n\n  return DataSourcePage;\n}(_react2['default'].Component);\n\nDataSourcePage.displayName = 'DataSourcePage';\n\nDataSourcePage.propTypes = {};\n\nfunction mapStateToProps(state) {\n  var props = {\n    dataSources: state.dataSources\n  };\n  return props;\n}\n\nfunction mapDispatchToProps(dispatch) {\n  var actions = { inputValueChange: _actions.inputValueChange, authCheck: _actions.authCheck };\n  var actionMap = { actions: (0, _redux.bindActionCreators)(actions, dispatch) };\n  return actionMap;\n}\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DataSourcePage);\n\nexports['default'] = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js');\n\n  __REACT_HOT_LOADER__.register(DataSourcePage, 'DataSourcePage', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js');\n}();\n\n;\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_createClass, \"_createClass\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_react2, \"_react2\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_propTypes2, \"_propTypes2\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_interopRequireDefault, \"_interopRequireDefault\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_classCallCheck, \"_classCallCheck\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, \"_possibleConstructorReturn\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_inherits, \"_inherits\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(DataSourcePage, \"DataSourcePage\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, \"mapStateToProps\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, \"mapDispatchToProps\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"_default\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n\n  __REACT_HOT_LOADER__.register(_temp, \"_temp\", \"/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Pages/DataSource.js\");\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/Pages/DataSource.js\n// module id = 150\n// module chunks = 2\n\n//# sourceURL=webpack:///./components/Pages/DataSource.js?")},22:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(5);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouter = __webpack_require__(24);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { 'default': obj };\n}\n\nvar OpenLayoutComponent = function () {\n  function OpenLayoutComponent(_ref) {\n    var children = _ref.children,\n        authentication = _ref.authentication,\n        logout = _ref.logout;\n\n    return _react2['default'].createElement('div', { className: 'container-fluid p-0' }, _react2['default'].createElement('nav', { className: 'navbar navbar-expand-lg navbar-light bg-light' }, _react2['default'].createElement('span', { className: 'navbar-brand mb-0 h1' }, 'Website Visits'), _react2['default'].createElement('button', { className: 'navbar-toggler', type: 'button' }, _react2['default'].createElement('span', { className: 'navbar-toggler-icon' })), _react2['default'].createElement('div', { className: 'collapse navbar-collapse' }, authentication.loggedIn ? _react2['default'].createElement('ul', { className: 'navbar-nav' }, _react2['default'].createElement('li', { className: 'nav-item active' }, _react2['default'].createElement(_reactRouter.Link, { className: 'nav-link', to: '/' }, 'Visits')), _react2['default'].createElement('li', { className: 'nav-item' }, _react2['default'].createElement(_reactRouter.Link, { className: 'nav-link', to: '/data-source' }, 'Data Sources')), _react2['default'].createElement('li', { className: 'nav-item' }, _react2['default'].createElement('a', { className: 'dropdown-item border border-light border-top-0 p-2', onClick: function () {\n        function onClick() {\n          logout();\n        }\n\n        return onClick;\n      }(), href: '#' }, 'Logout'))) : '')), _react2['default'].createElement('div', { className: 'row justify-content-around', style: { 'height': '100%' } }, children));\n  }\n\n  return OpenLayoutComponent;\n}();\nOpenLayoutComponent.displayName = 'OpenLayoutComponent';\nOpenLayoutComponent.propTypes = {};\nOpenLayoutComponent.defaultProps = {};\nvar _default = OpenLayoutComponent;\nexports['default'] = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(OpenLayoutComponent, 'OpenLayoutComponent', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n}();\n\n;\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_react2, '_react2', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n\n  __REACT_HOT_LOADER__.register(_propTypes2, '_propTypes2', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n\n  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n\n  __REACT_HOT_LOADER__.register(OpenLayoutComponent, 'OpenLayoutComponent', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n\n  __REACT_HOT_LOADER__.register(_default, '_default', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n\n  __REACT_HOT_LOADER__.register(_temp, '_temp', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/components/Layout/OpenLayout.js');\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/Layout/OpenLayout.js\n// module id = 22\n// module chunks = 0 1 2\n\n//# sourceURL=webpack:///./components/Layout/OpenLayout.js?")},87:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(12);\n\nvar _reactRedux = __webpack_require__(9);\n\nvar _OpenLayout = __webpack_require__(22);\n\nvar _OpenLayout2 = _interopRequireDefault(_OpenLayout);\n\nvar _DataSource = __webpack_require__(150);\n\nvar _DataSource2 = _interopRequireDefault(_DataSource);\n\nvar _actions = __webpack_require__(17);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { \'default\': obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");\n  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== "function" && superClass !== null) {\n    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n// import PropTypes from \'prop-types\';\n\n// import {Notification} from \'common/index\';\n\nvar RoutesDataSource = function (_React$Component) {\n  _inherits(RoutesDataSource, _React$Component);\n\n  function RoutesDataSource() {\n    _classCallCheck(this, RoutesDataSource);\n\n    return _possibleConstructorReturn(this, (RoutesDataSource.__proto__ || Object.getPrototypeOf(RoutesDataSource)).apply(this, arguments));\n  }\n\n  _createClass(RoutesDataSource, [{\n    key: \'componentDidMount\',\n    value: function () {\n      function componentDidMount() {\n        var actions = this.props.actions;\n\n        actions.loadDataSource();\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \'render\',\n    value: function () {\n      function render() {\n        return _react2[\'default\'].createElement(_OpenLayout2[\'default\'], { authentication: this.props.authentication, logout: this.props.actions.logout }, _react2[\'default\'].createElement(_DataSource2[\'default\'], this.props));\n      }\n\n      return render;\n    }()\n  }]);\n\n  return RoutesDataSource;\n}(_react2[\'default\'].Component);\n\nRoutesDataSource.displayName = \'RoutesDataSource\';\n\nRoutesDataSource.propTypes = {};\n\nfunction mapStateToProps(state) {\n  var props = {\n    dataSources: state.dataSources,\n    authentication: state.authentication\n  };\n  return props;\n}\n\nfunction mapDispatchToProps(dispatch) {\n  var actions = { loadDataSource: _actions.loadDataSource, logout: _actions.logout };\n  var actionMap = { actions: (0, _redux.bindActionCreators)(actions, dispatch) };\n  return actionMap;\n}\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RoutesDataSource);\n\nexports[\'default\'] = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === \'undefined\') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, \'mapStateToProps\', \'/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js\');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, \'mapDispatchToProps\', \'/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js\');\n\n  __REACT_HOT_LOADER__.register(RoutesDataSource, \'RoutesDataSource\', \'/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js\');\n\n  __REACT_HOT_LOADER__.register(_default, \'default\', \'/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js\');\n}();\n\n;\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === \'undefined\') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_react2, "_react2", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_OpenLayout2, "_OpenLayout2", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_DataSource2, "_DataSource2", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(RoutesDataSource, "RoutesDataSource", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_default, "_default", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n\n  __REACT_HOT_LOADER__.register(_temp, "_temp", "/Users/gaurav/Documents/work/src/github.com/gauravbansal74/mlfrontend/src/containers/routes/DataSource.js");\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/routes/DataSource.js\n// module id = 87\n// module chunks = 2\n\n//# sourceURL=webpack:///./containers/routes/DataSource.js?')}},[87]);