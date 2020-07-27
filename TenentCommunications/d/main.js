/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return self;
  }
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
  /*!************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
    \************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    };
  
    return _extends.apply(this, arguments);
  }
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  
  /***/ }),
  
  /***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
    \*********************************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
  
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  
    return target;
  }
  
  /***/ }),
  
  /***/ "./node_modules/axios/index.js":
  /*!*************************************!*\
    !*** ./node_modules/axios/index.js ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/adapters/xhr.js":
  /*!************************************************!*\
    !*** ./node_modules/axios/lib/adapters/xhr.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
  var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
  var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
  var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
  var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
  var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
  
  module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
  
      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }
  
      var request = new XMLHttpRequest();
  
      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
  
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
  
      // Set the request timeout in MS
      request.timeout = config.timeout;
  
      // Listen for ready state
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
  
        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
  
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
  
        settle(resolve, reject, response);
  
        // Clean up request
        request = null;
      };
  
      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
  
        reject(createError('Request aborted', config, 'ECONNABORTED', request));
  
        // Clean up request
        request = null;
      };
  
      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));
  
        // Clean up request
        request = null;
      };
  
      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
          request));
  
        // Clean up request
        request = null;
      };
  
      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
  
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;
  
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
  
      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }
  
      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
  
      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }
  
      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }
  
      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }
  
      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
  
          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }
  
      if (requestData === undefined) {
        requestData = null;
      }
  
      // Send the request
      request.send(requestData);
    });
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/axios.js":
  /*!*****************************************!*\
    !*** ./node_modules/axios/lib/axios.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
  var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
  var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
  var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
  var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
  
  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
  
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
  
    // Copy context to instance
    utils.extend(instance, context);
  
    return instance;
  }
  
  // Create the default instance to be exported
  var axios = createInstance(defaults);
  
  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;
  
  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  };
  
  // Expose Cancel & CancelToken
  axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
  axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
  axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
  
  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
  
  module.exports = axios;
  
  // Allow use of default import syntax in TypeScript
  module.exports.default = axios;
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/cancel/Cancel.js":
  /*!*************************************************!*\
    !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel(message) {
    this.message = message;
  }
  
  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  
  Cancel.prototype.__CANCEL__ = true;
  
  module.exports = Cancel;
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/cancel/CancelToken.js":
  /*!******************************************************!*\
    !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
  
  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
  
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
  
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
  
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };
  
  module.exports = CancelToken;
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/cancel/isCancel.js":
  /*!***************************************************!*\
    !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/Axios.js":
  /*!**********************************************!*\
    !*** ./node_modules/axios/lib/core/Axios.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
  var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
  var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
  var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
  
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }
  
    config = mergeConfig(this.defaults, config);
  
    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }
  
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
  
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
  
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
  
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
  
    return promise;
  };
  
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };
  
  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  
  module.exports = Axios;
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/InterceptorManager.js":
  /*!***********************************************************!*\
    !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  
  function InterceptorManager() {
    this.handlers = [];
  }
  
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  
  module.exports = InterceptorManager;
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/buildFullPath.js":
  /*!******************************************************!*\
    !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
  var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
  
  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/createError.js":
  /*!****************************************************!*\
    !*** ./node_modules/axios/lib/core/createError.js ***!
    \****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
  
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/dispatchRequest.js":
  /*!********************************************************!*\
    !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
  var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
  var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
  
    // Ensure headers exist
    config.headers = config.headers || {};
  
    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );
  
    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );
  
    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
  
    var adapter = config.adapter || defaults.adapter;
  
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
  
      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );
  
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
  
        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
  
      return Promise.reject(reason);
    });
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/enhanceError.js":
  /*!*****************************************************!*\
    !*** ./node_modules/axios/lib/core/enhanceError.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
  
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
  
    error.toJSON = function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };
    return error;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/mergeConfig.js":
  /*!****************************************************!*\
    !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
    \****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
  
  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
  
    var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
    var defaultToConfig2Keys = [
      'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
      'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
      'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
      'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
      'httpsAgent', 'cancelToken', 'socketPath'
    ];
  
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      }
    });
  
    utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
      if (utils.isObject(config2[prop])) {
        config[prop] = utils.deepMerge(config1[prop], config2[prop]);
      } else if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (utils.isObject(config1[prop])) {
        config[prop] = utils.deepMerge(config1[prop]);
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
  
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
  
    var axiosKeys = valueFromConfig2Keys
      .concat(mergeDeepPropertiesKeys)
      .concat(defaultToConfig2Keys);
  
    var otherKeys = Object
      .keys(config2)
      .filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
  
    utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
  
    return config;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/settle.js":
  /*!***********************************************!*\
    !*** ./node_modules/axios/lib/core/settle.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
  
  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/core/transformData.js":
  /*!******************************************************!*\
    !*** ./node_modules/axios/lib/core/transformData.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  
  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  module.exports = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
  
    return data;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/defaults.js":
  /*!********************************************!*\
    !*** ./node_modules/axios/lib/defaults.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {
  
  var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
  var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
  
  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }
  
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
    }
    return adapter;
  }
  
  var defaults = {
    adapter: getDefaultAdapter(),
  
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data)
      ) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],
  
    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],
  
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
  
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
  
    maxContentLength: -1,
  
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  
  module.exports = defaults;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/bind.js":
  /*!************************************************!*\
    !*** ./node_modules/axios/lib/helpers/bind.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/buildURL.js":
  /*!****************************************************!*\
    !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
    \****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  
  function encode(val) {
    return encodeURIComponent(val).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }
  
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
  
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
  
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
  
        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }
  
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
  
      serializedParams = parts.join('&');
    }
  
    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
  
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  
    return url;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/combineURLs.js":
  /*!*******************************************************!*\
    !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/cookies.js":
  /*!***************************************************!*\
    !*** ./node_modules/axios/lib/helpers/cookies.js ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
  
            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }
  
            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }
  
            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }
  
            if (secure === true) {
              cookie.push('secure');
            }
  
            document.cookie = cookie.join('; ');
          },
  
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },
  
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :
  
    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
  );
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
  /*!*********************************************************!*\
    !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
  /*!***********************************************************!*\
    !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
  
        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
          var href = url;
  
          if (msie) {
          // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }
  
          urlParsingNode.setAttribute('href', href);
  
          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
          };
        }
  
        originURL = resolveURL(window.location.href);
  
        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
          var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :
  
    // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
  );
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
  /*!***************************************************************!*\
    !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
  
  module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
  /*!********************************************************!*\
    !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
  
  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
  ];
  
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
  
    if (!headers) { return parsed; }
  
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
  
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });
  
    return parsed;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/helpers/spread.js":
  /*!**************************************************!*\
    !*** ./node_modules/axios/lib/helpers/spread.js ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/axios/lib/utils.js":
  /*!*****************************************!*\
    !*** ./node_modules/axios/lib/utils.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
  
  /*global toString:true*/
  
  // utils is a library of generic helper functions non-specific to axios
  
  var toString = Object.prototype.toString;
  
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  
  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }
  
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }
  
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }
  
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }
  
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }
  
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }
  
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }
  
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }
  
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  
  /**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function deepMerge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (typeof result[key] === 'object' && typeof val === 'object') {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === 'object') {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }
  
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  
  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/classnames/index.js":
  /*!******************************************!*\
    !*** ./node_modules/classnames/index.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */
  
  (function () {
    'use strict';
  
    var hasOwn = {}.hasOwnProperty;
  
    function classNames () {
      var classes = [];
  
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
  
        var argType = typeof arg;
  
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
  
      return classes.join(' ');
    }
  
    if ( true && module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else if (true) {
      // register as 'classnames', consistent with npm package name
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return classNames;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  }());
  
  
  /***/ }),
  
  /***/ "./node_modules/dom-helpers/esm/addClass.js":
  /*!**************************************************!*\
    !*** ./node_modules/dom-helpers/esm/addClass.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
  /* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");
  
  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
  }
  
  /***/ }),
  
  /***/ "./node_modules/dom-helpers/esm/hasClass.js":
  /*!**************************************************!*\
    !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
    \**************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }
  
  /***/ }),
  
  /***/ "./node_modules/dom-helpers/esm/removeClass.js":
  /*!*****************************************************!*\
    !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }
  
  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === 'string') {
      ;
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
  }
  
  /***/ }),
  
  /***/ "./node_modules/lodash.isequal/index.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash.isequal/index.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global, module) {/**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
  
  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;
  
  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  
  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]';
  
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  
  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  
  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  
  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;
  
  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  
  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  
  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();
  
  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;
  
  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  
  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;
  
  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;
  
  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());
  
  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  
  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];
  
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  
  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
  
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  
  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;
  
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);
  
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  
  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }
  
  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
  
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  
  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
  
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  
  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;
  
  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];
  
  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());
  
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;
  
  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );
  
  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice,
      symToStringTag = Symbol ? Symbol.toStringTag : undefined;
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object);
  
  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');
  
  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);
  
  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  
  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }
  
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }
  
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }
  
  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
  
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  
  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
  
    return index < 0 ? undefined : data[index][1];
  }
  
  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  
  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
  
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  
  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }
  
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  
  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;
  
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  
  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  
  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
  
    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }
  
  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  
  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  
  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  
  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }
  
  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
  
    this.size = data.size;
    return result;
  }
  
  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }
  
  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }
  
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  
  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;
  
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }
  
  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  
  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }
  
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  
  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  
  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);
  
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
  
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;
  
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
  
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
  
        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }
  
  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;
  
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
  
    stack.set(array, other);
    stack.set(other, array);
  
    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];
  
      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }
  
  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
  
      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
  
      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);
  
      case errorTag:
        return object.name == other.name && object.message == other.message;
  
      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');
  
      case mapTag:
        var convert = mapToArray;
  
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);
  
        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
  
        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;
  
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  
  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;
  
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
  
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];
  
      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;
  
      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }
  
  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  
  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }
  
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }
  
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];
  
    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}
  
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;
  
  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';
  
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }
  
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }
  
  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }
  
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }
  
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  
    return value === proto;
  }
  
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }
  
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }
  
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };
  
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;
  
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;
  
  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }
  
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  
  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }
  
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }
  
  module.exports = isEqual;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))
  
  /***/ }),
  
  /***/ "./node_modules/object-assign/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/object-assign/index.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  
  
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
  
    return Object(val);
  }
  
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
  
      // Detect buggy property enumeration order in older V8 versions.
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !==
          'abcdefghijklmnopqrst') {
        return false;
      }
  
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  
  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
  
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
  
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
  
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
  
    return to;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/process/browser.js":
  /*!*****************************************!*\
    !*** ./node_modules/process/browser.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  // shim for using process in browser
  var process = module.exports = {};
  
  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  
  
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }
  
  
  
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  
  process.listeners = function (name) { return [] }
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };
  
  
  /***/ }),
  
  /***/ "./node_modules/prop-types/checkPropTypes.js":
  /*!***************************************************!*\
    !*** ./node_modules/prop-types/checkPropTypes.js ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  var printWarning = function() {};
  
  if (true) {
    var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
  
    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
  
            var stack = getStack ? getStack() : '';
  
            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }
  
  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    if (true) {
      loggedTypeFailures = {};
    }
  }
  
  module.exports = checkPropTypes;
  
  
  /***/ }),
  
  /***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
  /*!************************************************************!*\
    !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
  var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
  
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");
  
  var has = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning = function() {};
  
  if (true) {
    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  
  module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
  
    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
  
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */
  
    var ANONYMOUS = '<<anonymous>>';
  
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
  
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };
  
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/
  
    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
  
    function createChainableTypeChecker(validate) {
      if (true) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
  
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if ( true && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
  
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
  
      return chainedCheckType;
    }
  
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
  
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
  
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (true) {
          if (arguments.length > 1) {
            printWarning(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }
  
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
  
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
  
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
         true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
        return emptyFunctionThatReturnsNull;
      }
  
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }
  
      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
            return null;
          }
        }
  
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }
  
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
  
      return createChainableTypeChecker(validate);
    }
  
    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
  
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
  
          return true;
        default:
          return false;
      }
    }
  
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }
  
      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }
  
      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }
  
      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
  
      return false;
    }
  
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }
  
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }
  
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }
  
    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
  
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
  
    return ReactPropTypes;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/prop-types/index.js":
  /*!******************************************!*\
    !*** ./node_modules/prop-types/index.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  if (true) {
    var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
  
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
  } else {}
  
  
  /***/ }),
  
  /***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  
  module.exports = ReactPropTypesSecret;
  
  
  /***/ }),
  
  /***/ "./node_modules/react-draggable/build/web/react-draggable.min.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/react-draggable/build/web/react-draggable.min.js ***!
    \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /*! For license information please see react-draggable.min.js.LICENSE.txt */
  !function(t,e){ true?module.exports=e(__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react */ "react")):undefined}(window,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)()},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){var r=n(7),o=r.default,a=r.DraggableCore;t.exports=o,t.exports.default=o,t.exports.DraggableCore=a},function(t,e,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return mt})),n.d(e,"DraggableCore",(function(){return nt}));var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(1),s=n.n(u),c=n(3),l=n.n(c);function f(t,e){for(var n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function p(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)}function d(t){return"number"==typeof t&&!isNaN(t)}function y(t){return parseInt(t,10)}function g(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var h=["Moz","Webkit","O","ms"];function b(t,e){return e?"".concat(e).concat(function(t){for(var e="",n=!0,r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var e=window.document.documentElement.style;if(t in e)return"";for(var n=0;n<h.length;n++)if(b(t,h[n])in e)return h[n];return""}();function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S="";function D(t,e){return S||(S=f(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return p(t[e])}))),!!p(t[S])&&t[S](e)}function x(t,e,n){var r=t;do{if(D(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function j(t,e,n,r){if(t){var o=w({capture:!0},r);t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}}function P(t,e,n,r){if(t){var o=w({capture:!0},r);t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}}function E(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=y(n.borderTopWidth),e+=y(n.borderBottomWidth)}function T(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=y(n.borderLeftWidth),e+=y(n.borderRightWidth)}function N(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=y(n.paddingTop),e-=y(n.paddingBottom)}function C(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=y(n.paddingLeft),e-=y(n.paddingRight)}function M(t,e,n){var r=t.x,o=t.y,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){var i="".concat("string"==typeof e.x?e.x:e.x+n),u="".concat("string"==typeof e.y?e.y:e.y+n);a="translate(".concat(i,", ").concat(u,")")+a}return a}function k(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0}function _(t){if(t){var e,n,r=t.getElementById("react-draggable-style-el");r||((r=t.createElement("style")).type="text/css",r.id="react-draggable-style-el",r.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",r.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(r)),t.body&&(e=t.body,n="react-draggable-transparent-selection",e.classList?e.classList.add(n):e.className.match(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)")))||(e.className+=" ".concat(n)))}}function R(t){var e,n;if(t)try{if(t.body&&(e=t.body,n="react-draggable-transparent-selection",e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)"),"g"),"")),t.selection)t.selection.empty();else{var r=(t.defaultView||window).getSelection();r&&"Caret"!==r.type&&r.removeAllRanges()}}catch(t){}}function X(t,e,n){return[Math.round(e/t[0])*t[0],Math.round(n/t[1])*t[1]]}function Y(t){return"both"===t.props.axis||"x"===t.props.axis}function A(t){return"both"===t.props.axis||"y"===t.props.axis}function L(t,e,n){var r="number"==typeof e?function(t,e){return t.targetTouches&&f(t.targetTouches,(function(t){return e===t.identifier}))||t.changedTouches&&f(t.changedTouches,(function(t){return e===t.identifier}))}(t,e):null;if("number"==typeof e&&!r)return null;var o=V(n);return function(t,e,n){var r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-r.left)/n,y:(t.clientY+e.scrollTop-r.top)/n}}(r||t,n.props.offsetParent||o.offsetParent||o.ownerDocument.body,n.props.scale)}function I(t,e,n){var r=t.state,o=!d(r.lastX),a=V(t);return o?{node:a,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:a,deltaX:e-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:e,y:n}}function U(t,e){var n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function V(t){var e=s.a.findDOMNode(t);if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?F(t):e}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Z={start:"touchstart",move:"touchmove",stop:"touchend"},tt={start:"mousedown",move:"mousemove",stop:"mouseup"},et=tt,nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(u,t);var e,n,r,a,i=(e=u,function(){var t,n=J(e);if($()){var r=J(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return z(this,t)});function u(){var t;q(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Q(F(t=i.call.apply(i,[this].concat(n))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),Q(F(t),"mounted",!1),Q(F(t),"handleDragStart",(function(e){if(t.props.onMouseDown(e),!t.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;var n=s.a.findDOMNode(F(t));if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var r=n.ownerDocument;if(!(t.props.disabled||!(e.target instanceof r.defaultView.Node)||t.props.handle&&!x(e.target,t.props.handle,n)||t.props.cancel&&x(e.target,t.props.cancel,n))){"touchstart"===e.type&&e.preventDefault();var o=k(e);t.setState({touchIdentifier:o});var a=L(e,o,F(t));if(null!=a){var i=a.x,u=a.y,c=I(F(t),i,u);t.props.onStart,!1!==t.props.onStart(e,c)&&!1!==t.mounted&&(t.props.enableUserSelectHack&&_(r),t.setState({dragging:!0,lastX:i,lastY:u}),j(r,et.move,t.handleDrag),j(r,et.stop,t.handleDragStop))}}})),Q(F(t),"handleDrag",(function(e){var n=L(e,t.state.touchIdentifier,F(t));if(null!=n){var r=n.x,o=n.y;if(Array.isArray(t.props.grid)){var a=r-t.state.lastX,i=o-t.state.lastY,u=B(X(t.props.grid,a,i),2);if(a=u[0],i=u[1],!a&&!i)return;r=t.state.lastX+a,o=t.state.lastY+i}var s=I(F(t),r,o);if(!1!==t.props.onDrag(e,s)&&!1!==t.mounted)t.setState({lastX:r,lastY:o});else try{t.handleDragStop(new MouseEvent("mouseup"))}catch(e){var c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.handleDragStop(c)}}})),Q(F(t),"handleDragStop",(function(e){if(t.state.dragging){var n=L(e,t.state.touchIdentifier,F(t));if(null!=n){var r=n.x,o=n.y,a=I(F(t),r,o);if(!1===t.props.onStop(e,a)||!1===t.mounted)return!1;var i=s.a.findDOMNode(F(t));i&&t.props.enableUserSelectHack&&R(i.ownerDocument),t.setState({dragging:!1,lastX:NaN,lastY:NaN}),i&&(P(i.ownerDocument,et.move,t.handleDrag),P(i.ownerDocument,et.stop,t.handleDragStop))}}})),Q(F(t),"onMouseDown",(function(e){return et=tt,t.handleDragStart(e)})),Q(F(t),"onMouseUp",(function(e){return et=tt,t.handleDragStop(e)})),Q(F(t),"onTouchStart",(function(e){return et=Z,t.handleDragStart(e)})),Q(F(t),"onTouchEnd",(function(e){return et=Z,t.handleDragStop(e)})),t}return n=u,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var t=s.a.findDOMNode(this);t&&j(t,Z.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var t=s.a.findDOMNode(this);if(t){var e=t.ownerDocument;P(e,tt.move,this.handleDrag),P(e,Z.move,this.handleDrag),P(e,tt.stop,this.handleDragStop),P(e,Z.stop,this.handleDragStop),P(t,Z.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&R(e)}}},{key:"render",value:function(){return o.a.cloneElement(o.a.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&G(n.prototype,r),a&&G(n,a),u}(o.a.Component);function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(){return(ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function at(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function it(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ut(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){bt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ft(t,e,n){return e&&lt(t.prototype,e),n&&lt(t,n),t}function pt(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?dt(t):e}function dt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function yt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Q(nt,"displayName","DraggableCore"),Q(nt,"propTypes",{allowAnyClick:i.a.bool,disabled:i.a.bool,enableUserSelectHack:i.a.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:i.a.arrayOf(i.a.number),handle:i.a.string,cancel:i.a.string,onStart:i.a.func,onDrag:i.a.func,onStop:i.a.func,onMouseDown:i.a.func,scale:i.a.number,className:g,style:g,transform:g}),Q(nt,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});var mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(r,t);var e,n=(e=r,function(){var t,n=gt(e);if(yt()){var r=gt(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return pt(this,t)});function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),bt(dt(e=n.call(this,t)),"onDragStart",(function(t,n){if(!1===e.props.onStart(t,U(dt(e),n)))return!1;e.setState({dragging:!0,dragged:!0})})),bt(dt(e),"onDrag",(function(t,n){if(!e.state.dragging)return!1;var r=U(dt(e),n),o={x:r.x,y:r.y};if(e.props.bounds){var a=o.x,i=o.y;o.x+=e.state.slackX,o.y+=e.state.slackY;var u=it(function(t,e,n){if(!t.props.bounds)return[e,n];var r=t.props.bounds;r="string"==typeof r?r:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(r);var o=V(t);if("string"==typeof r){var a,i=o.ownerDocument,u=i.defaultView;if(!((a="parent"===r?o.parentNode:i.querySelector(r))instanceof u.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var s=u.getComputedStyle(o),c=u.getComputedStyle(a);r={left:-o.offsetLeft+y(c.paddingLeft)+y(s.marginLeft),top:-o.offsetTop+y(c.paddingTop)+y(s.marginTop),right:C(a)-T(o)-o.offsetLeft+y(c.paddingRight)-y(s.marginRight),bottom:N(a)-E(o)-o.offsetTop+y(c.paddingBottom)-y(s.marginBottom)}}return d(r.right)&&(e=Math.min(e,r.right)),d(r.bottom)&&(n=Math.min(n,r.bottom)),d(r.left)&&(e=Math.max(e,r.left)),d(r.top)&&(n=Math.max(n,r.top)),[e,n]}(dt(e),o.x,o.y),2),s=u[0],c=u[1];o.x=s,o.y=c,o.slackX=e.state.slackX+(a-o.x),o.slackY=e.state.slackY+(i-o.y),r.x=o.x,r.y=o.y,r.deltaX=o.x-e.state.x,r.deltaY=o.y-e.state.y}if(!1===e.props.onDrag(t,r))return!1;e.setState(o)})),bt(dt(e),"onDragStop",(function(t,n){if(!e.state.dragging)return!1;if(!1===e.props.onStop(t,U(dt(e),n)))return!1;var r={dragging:!1,slackX:0,slackY:0};if(Boolean(e.props.position)){var o=e.props.position,a=o.x,i=o.y;r.x=a,r.y=i}e.setState(r)})),e.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:ct({},t.position),slackX:0,slackY:0,isElementSVG:!1},!t.position||t.onDrag||t.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),e}return ft(r,null,[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.position,r=e.prevPropsPosition;return!n||r&&n.x===r.x&&n.y===r.y?null:{x:n.x,y:n.y,prevPropsPosition:ct({},n)}}}]),ft(r,[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&s.a.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var t,e=this.props,n=(e.axis,e.bounds,e.children),r=e.defaultPosition,a=e.defaultClassName,i=e.defaultClassNameDragging,u=e.defaultClassNameDragged,s=e.position,c=e.positionOffset,f=(e.scale,at(e,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),p={},d=null,y=!Boolean(s)||this.state.dragging,g=s||r,h={x:Y(this)&&y?this.state.x:g.x,y:A(this)&&y?this.state.y:g.y};this.state.isElementSVG?d=function(t,e){return M(t,e,"")}(h,c):p=function(t,e){var n=M(t,e,"px");return O({},b("transform",m),n)}(h,c);var v=l()(n.props.className||"",a,(bt(t={},i,this.state.dragging),bt(t,u,this.state.dragged),t));return o.a.createElement(nt,ot({},f,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.a.cloneElement(o.a.Children.only(n),{className:v,style:ct({},n.props.style,{},p),transform:d}))}}]),r}(o.a.Component);bt(mt,"displayName","Draggable"),bt(mt,"propTypes",ct({},nt.propTypes,{axis:i.a.oneOf(["both","x","y","none"]),bounds:i.a.oneOfType([i.a.shape({left:i.a.number,right:i.a.number,top:i.a.number,bottom:i.a.number}),i.a.string,i.a.oneOf([!1])]),defaultClassName:i.a.string,defaultClassNameDragging:i.a.string,defaultClassNameDragged:i.a.string,defaultPosition:i.a.shape({x:i.a.number,y:i.a.number}),positionOffset:i.a.shape({x:i.a.oneOfType([i.a.number,i.a.string]),y:i.a.oneOfType([i.a.number,i.a.string])}),position:i.a.shape({x:i.a.number,y:i.a.number}),className:g,style:g,transform:g})),bt(mt,"defaultProps",ct({},nt.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))}])}));
  
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/GridItem.js":
  /*!**********************************************************!*\
    !*** ./node_modules/react-grid-layout/build/GridItem.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));
  
  var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
  
  var _reactDraggable = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/web/react-draggable.min.js");
  
  var _reactResizable = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
  
  var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");
  
  var _calculateUtils = __webpack_require__(/*! ./calculateUtils */ "./node_modules/react-grid-layout/build/calculateUtils.js");
  
  var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
  
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
  
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  /**
   * An individual item within a ReactGridLayout.
   */
  var GridItem =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(GridItem, _React$Component);
  
    function GridItem() {
      var _getPrototypeOf2;
  
      var _this;
  
      _classCallCheck(this, GridItem);
  
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GridItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
  
      _defineProperty(_assertThisInitialized(_this), "state", {
        resizing: null,
        dragging: null,
        className: ""
      });
  
      _defineProperty(_assertThisInitialized(_this), "currentNode", void 0);
  
      _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e
      /*: Event*/
      , _ref) {
        var node = _ref.node;
        if (!_this.props.onDragStart) return;
        var newPosition
        /*: PartialPosition*/
        = {
          top: 0,
          left: 0
        }; // TODO: this wont work on nested parents
  
        var offsetParent = node.offsetParent;
        if (!offsetParent) return;
        var parentRect = offsetParent.getBoundingClientRect();
        var clientRect = node.getBoundingClientRect();
        var cLeft = clientRect.left / _this.props.transformScale;
        var pLeft = parentRect.left / _this.props.transformScale;
        var cTop = clientRect.top / _this.props.transformScale;
        var pTop = parentRect.top / _this.props.transformScale;
        newPosition.left = cLeft - pLeft + offsetParent.scrollLeft;
        newPosition.top = cTop - pTop + offsetParent.scrollTop;
  
        _this.setState({
          dragging: newPosition
        });
  
        var _calcXY = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
            x = _calcXY.x,
            y = _calcXY.y;
  
        return _this.props.onDragStart && _this.props.onDragStart.call(_assertThisInitialized(_this), _this.props.i, x, y, {
          e: e,
          node: node,
          newPosition: newPosition
        });
      });
  
      _defineProperty(_assertThisInitialized(_this), "onDrag", function (e
      /*: Event*/
      , _ref2) {
        var node = _ref2.node,
            deltaX = _ref2.deltaX,
            deltaY = _ref2.deltaY;
        var _this$props = _this.props,
            onDrag = _this$props.onDrag,
            transformScale = _this$props.transformScale;
        if (!onDrag) return;
        deltaX /= transformScale;
        deltaY /= transformScale;
        var newPosition
        /*: PartialPosition*/
        = {
          top: 0,
          left: 0
        };
        if (!_this.state.dragging) throw new Error("onDrag called before onDragStart.");
        newPosition.left = _this.state.dragging.left + deltaX;
        newPosition.top = _this.state.dragging.top + deltaY;
  
        _this.setState({
          dragging: newPosition
        });
  
        var _calcXY2 = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
            x = _calcXY2.x,
            y = _calcXY2.y;
  
        return onDrag && onDrag.call(_assertThisInitialized(_this), _this.props.i, x, y, {
          e: e,
          node: node,
          newPosition: newPosition
        });
      });
  
      _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e
      /*: Event*/
      , _ref3) {
        var node = _ref3.node;
        if (!_this.props.onDragStop) return;
        var newPosition
        /*: PartialPosition*/
        = {
          top: 0,
          left: 0
        };
        if (!_this.state.dragging) throw new Error("onDragEnd called before onDragStart.");
        newPosition.left = _this.state.dragging.left;
        newPosition.top = _this.state.dragging.top;
  
        _this.setState({
          dragging: null
        });
  
        var _calcXY3 = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
            x = _calcXY3.x,
            y = _calcXY3.y;
  
        return _this.props.onDragStop && _this.props.onDragStop.call(_assertThisInitialized(_this), _this.props.i, x, y, {
          e: e,
          node: node,
          newPosition: newPosition
        });
      });
  
      _defineProperty(_assertThisInitialized(_this), "onResizeStop", function (e
      /*: Event*/
      , callbackData
      /*: { node: HTMLElement, size: Position }*/
      ) {
        _this.onResizeHandler(e, callbackData, "onResizeStop");
      });
  
      _defineProperty(_assertThisInitialized(_this), "onResizeStart", function (e
      /*: Event*/
      , callbackData
      /*: { node: HTMLElement, size: Position }*/
      ) {
        _this.onResizeHandler(e, callbackData, "onResizeStart");
      });
  
      _defineProperty(_assertThisInitialized(_this), "onResize", function (e
      /*: Event*/
      , callbackData
      /*: { node: HTMLElement, size: Position }*/
      ) {
        _this.onResizeHandler(e, callbackData, "onResize");
      });
  
      return _this;
    }
  
    _createClass(GridItem, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps
      /*: Props*/
      , nextState
      /*: State*/
      ) {
        // We can't deeply compare children. If the developer memoizes them, we can
        // use this optimization.
        if (this.props.children !== nextProps.children) return true;
        if (this.props.droppingPosition !== nextProps.droppingPosition) return true; // TODO memoize these calculations so they don't take so long?
  
        var oldPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state);
        var newPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(nextProps), nextProps.x, nextProps.y, nextProps.w, nextProps.h, nextState);
        return !(0, _utils.fastPositionEqual)(oldPosition, newPosition) || this.props.useCSSTransforms !== nextProps.useCSSTransforms;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.moveDroppingItem({});
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps
      /*: Props*/
      ) {
        this.moveDroppingItem(prevProps);
      } // When a droppingPosition is present, this means we should fire a move event, as if we had moved
      // this element by `x, y` pixels.
  
    }, {
      key: "moveDroppingItem",
      value: function moveDroppingItem(prevProps
      /*: Props*/
      ) {
        var droppingPosition = this.props.droppingPosition;
        if (!droppingPosition) return;
        var prevDroppingPosition = prevProps.droppingPosition || {
          left: 0,
          top: 0
        };
        var dragging = this.state.dragging;
  
        if (!this.currentNode) {
          // eslint-disable-next-line react/no-find-dom-node
          this.currentNode = ((_reactDom.default.findDOMNode(this)
          /*: any*/
          )
          /*: HTMLElement*/
          );
        }
  
        var shouldDrag = dragging && droppingPosition.left !== prevDroppingPosition.left || droppingPosition.top !== prevDroppingPosition.top;
  
        if (!dragging) {
          this.onDragStart(droppingPosition.e, {
            node: this.currentNode,
            deltaX: droppingPosition.left,
            deltaY: droppingPosition.top
          });
        } else if (shouldDrag) {
          var deltaX = droppingPosition.left - dragging.left;
          var deltaY = droppingPosition.top - dragging.top;
          this.onDrag(droppingPosition.e, {
            node: this.currentNode,
            deltaX: deltaX,
            deltaY: deltaY
          });
        }
      }
    }, {
      key: "getPositionParams",
      value: function getPositionParams()
      /*: PositionParams*/
      {
        var props
        /*: Props*/
        = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        return {
          cols: props.cols,
          containerPadding: props.containerPadding,
          containerWidth: props.containerWidth,
          margin: props.margin,
          maxRows: props.maxRows,
          rowHeight: props.rowHeight
        };
      }
      /**
       * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
       * well when server rendering, and the only way to do that properly is to use percentage width/left because
       * we don't know exactly what the browser viewport is.
       * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
       * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
       *
       * @param  {Object} pos Position object with width, height, left, top.
       * @return {Object}     Style object.
       */
  
    }, {
      key: "createStyle",
      value: function createStyle(pos
      /*: Position*/
      )
      /*: { [key: string]: ?string }*/
      {
        var _this$props2 = this.props,
            usePercentages = _this$props2.usePercentages,
            containerWidth = _this$props2.containerWidth,
            useCSSTransforms = _this$props2.useCSSTransforms;
        var style; // CSS Transforms support (default)
  
        if (useCSSTransforms) {
          style = (0, _utils.setTransform)(pos);
        } else {
          // top,left (slow)
          style = (0, _utils.setTopLeft)(pos); // This is used for server rendering.
  
          if (usePercentages) {
            style.left = (0, _utils.perc)(pos.left / containerWidth);
            style.width = (0, _utils.perc)(pos.width / containerWidth);
          }
        }
  
        return style;
      }
      /**
       * Mix a Draggable instance into a child.
       * @param  {Element} child    Child element.
       * @return {Element}          Child wrapped in Draggable.
       */
  
    }, {
      key: "mixinDraggable",
      value: function mixinDraggable(child
      /*: ReactElement<any>*/
      , isDraggable
      /*: boolean*/
      )
      /*: ReactElement<any>*/
      {
        return _react.default.createElement(_reactDraggable.DraggableCore, {
          disabled: !isDraggable,
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
          handle: this.props.handle,
          cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
          scale: this.props.transformScale
        }, child);
      }
      /**
       * Mix a Resizable instance into a child.
       * @param  {Element} child    Child element.
       * @param  {Object} position  Position object (pixel values)
       * @return {Element}          Child wrapped in Resizable.
       */
  
    }, {
      key: "mixinResizable",
      value: function mixinResizable(child
      /*: ReactElement<any>*/
      , position
      /*: Position*/
      , isResizable
      /*: boolean*/
      )
      /*: ReactElement<any>*/
      {
        var _this$props3 = this.props,
            cols = _this$props3.cols,
            x = _this$props3.x,
            minW = _this$props3.minW,
            minH = _this$props3.minH,
            maxW = _this$props3.maxW,
            maxH = _this$props3.maxH,
            transformScale = _this$props3.transformScale;
        var positionParams = this.getPositionParams(); // This is the max possible width - doesn't go to infinity because of the width of the window
  
        var maxWidth = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, cols - x, 0).width; // Calculate min/max constraints using our min & maxes
  
        var mins = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, minW, minH);
        var maxes = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, maxW, maxH);
        var minConstraints = [mins.width, mins.height];
        var maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
        return _react.default.createElement(_reactResizable.Resizable, {
          draggableOpts: {
            disabled: !isResizable
          },
          className: isResizable ? undefined : "react-resizable-hide",
          width: position.width,
          height: position.height,
          minConstraints: minConstraints,
          maxConstraints: maxConstraints,
          onResizeStop: this.onResizeStop,
          onResizeStart: this.onResizeStart,
          onResize: this.onResize,
          transformScale: transformScale
        }, child);
      }
      /**
       * onDragStart event handler
       * @param  {Event}  e             event data
       * @param  {Object} callbackData  an object with node, delta and position information
       */
  
    }, {
      key: "onResizeHandler",
  
      /**
       * Wrapper around drag events to provide more useful data.
       * All drag events call the function with the given handler name,
       * with the signature (index, x, y).
       *
       * @param  {String} handlerName Handler name to wrap.
       * @return {Function}           Handler function.
       */
      value: function onResizeHandler(e
      /*: Event*/
      , _ref4, handlerName
      /*: string*/
      ) {
        var node = _ref4.node,
            size = _ref4.size;
        var handler = this.props[handlerName];
        if (!handler) return;
        var _this$props4 = this.props,
            cols = _this$props4.cols,
            x = _this$props4.x,
            y = _this$props4.y,
            i = _this$props4.i,
            maxW = _this$props4.maxW,
            minW = _this$props4.minW,
            maxH = _this$props4.maxH,
            minH = _this$props4.minH; // Get new XY
  
        var _calcWH = (0, _calculateUtils.calcWH)(this.getPositionParams(), size.width, size.height, x, y),
            w = _calcWH.w,
            h = _calcWH.h; // Cap w at numCols
  
  
        w = Math.min(w, cols - x); // Ensure w is at least 1
  
        w = Math.max(w, 1); // Min/max capping
  
        w = Math.max(Math.min(w, maxW), minW);
        h = Math.max(Math.min(h, maxH), minH);
        this.setState({
          resizing: handlerName === "onResizeStop" ? null : size
        });
        handler.call(this, i, w, h, {
          e: e,
          node: node,
          size: size
        });
      }
    }, {
      key: "render",
      value: function render()
      /*: ReactNode*/
      {
        var _this$props5 = this.props,
            x = _this$props5.x,
            y = _this$props5.y,
            w = _this$props5.w,
            h = _this$props5.h,
            isDraggable = _this$props5.isDraggable,
            isResizable = _this$props5.isResizable,
            droppingPosition = _this$props5.droppingPosition,
            useCSSTransforms = _this$props5.useCSSTransforms;
        var pos = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(), x, y, w, h, this.state);
  
        var child = _react.default.Children.only(this.props.children); // Create the child element. We clone the existing element but modify its className and style.
  
  
        var newChild = _react.default.cloneElement(child, {
          className: (0, _classnames.default)("react-grid-item", child.props.className, this.props.className, {
            static: this.props.static,
            resizing: Boolean(this.state.resizing),
            "react-draggable": isDraggable,
            "react-draggable-dragging": Boolean(this.state.dragging),
            dropping: Boolean(droppingPosition),
            cssTransforms: useCSSTransforms
          }),
          // We can set the width and height on the child, but unfortunately we can't set the position.
          style: _objectSpread({}, this.props.style, {}, child.props.style, {}, this.createStyle(pos))
        }); // Resizable support. This is usually on but the user can toggle it off.
  
  
        newChild = this.mixinResizable(newChild, pos, isResizable); // Draggable support. This is always on, except for with placeholders.
  
        newChild = this.mixinDraggable(newChild, isDraggable);
        return newChild;
      }
    }]);
  
    return GridItem;
  }(_react.default.Component);
  
  exports.default = GridItem;
  
  _defineProperty(GridItem, "propTypes", {
    // Children must be only a single element
    children: _propTypes.default.element,
    // General grid attributes
    cols: _propTypes.default.number.isRequired,
    containerWidth: _propTypes.default.number.isRequired,
    rowHeight: _propTypes.default.number.isRequired,
    margin: _propTypes.default.array.isRequired,
    maxRows: _propTypes.default.number.isRequired,
    containerPadding: _propTypes.default.array.isRequired,
    // These are all in grid units
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired,
    w: _propTypes.default.number.isRequired,
    h: _propTypes.default.number.isRequired,
    // All optional
    minW: function minW(props
    /*: Props*/
    , propName
    /*: string*/
    ) {
      var value = props[propName];
      if (typeof value !== "number") return new Error("minWidth not Number");
      if (value > props.w || value > props.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function maxW(props
    /*: Props*/
    , propName
    /*: string*/
    ) {
      var value = props[propName];
      if (typeof value !== "number") return new Error("maxWidth not Number");
      if (value < props.w || value < props.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function minH(props
    /*: Props*/
    , propName
    /*: string*/
    ) {
      var value = props[propName];
      if (typeof value !== "number") return new Error("minHeight not Number");
      if (value > props.h || value > props.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function maxH(props
    /*: Props*/
    , propName
    /*: string*/
    ) {
      var value = props[propName];
      if (typeof value !== "number") return new Error("maxHeight not Number");
      if (value < props.h || value < props.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: _propTypes.default.string.isRequired,
    // Functions
    onDragStop: _propTypes.default.func,
    onDragStart: _propTypes.default.func,
    onDrag: _propTypes.default.func,
    onResizeStop: _propTypes.default.func,
    onResizeStart: _propTypes.default.func,
    onResize: _propTypes.default.func,
    // Flags
    isDraggable: _propTypes.default.bool.isRequired,
    isResizable: _propTypes.default.bool.isRequired,
    static: _propTypes.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: _propTypes.default.bool.isRequired,
    transformScale: _propTypes.default.number,
    // Others
    className: _propTypes.default.string,
    // Selector for draggable handle
    handle: _propTypes.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: _propTypes.default.string,
    // Current position of a dropping element
    droppingPosition: _propTypes.default.shape({
      e: _propTypes.default.object.isRequired,
      left: _propTypes.default.number.isRequired,
      top: _propTypes.default.number.isRequired
    })
  });
  
  _defineProperty(GridItem, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: Infinity,
    maxW: Infinity,
    transformScale: 1
  });
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/ReactGridLayout.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/ReactGridLayout.js ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));
  
  var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
  
  var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");
  
  var _calculateUtils = __webpack_require__(/*! ./calculateUtils */ "./node_modules/react-grid-layout/build/calculateUtils.js");
  
  var _GridItem = _interopRequireDefault(__webpack_require__(/*! ./GridItem */ "./node_modules/react-grid-layout/build/GridItem.js"));
  
  var _ReactGridLayoutPropTypes = _interopRequireDefault(__webpack_require__(/*! ./ReactGridLayoutPropTypes */ "./node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
  
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
  
  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
  
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
  
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  // End Types
  var layoutClassName = "react-grid-layout";
  var isFirefox = false; // Try...catch will protect from navigator not existing (e.g. node) or a bad implementation of navigator
  
  try {
    isFirefox = /firefox/i.test(navigator.userAgent);
  } catch (e) {}
  /* Ignore */
  
  /**
   * A reactive, fluid grid layout with draggable, resizable components.
   */
  
  
  var ReactGridLayout =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ReactGridLayout, _React$Component);
  
    // TODO publish internal ReactClass displayName transform
    // Refactored to another module to make way for preval
    function ReactGridLayout(props
    /*: Props*/
    , context
    /*: any*/
    )
    /*: void*/
    {
      var _this;
  
      _classCallCheck(this, ReactGridLayout);
  
      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactGridLayout).call(this, props, context));
  
      _defineProperty(_assertThisInitialized(_this), "state", {
        activeDrag: null,
        layout: (0, _utils.synchronizeLayoutWithChildren)(_this.props.layout, _this.props.children, _this.props.cols, // Legacy support for verticalCompact: false
        (0, _utils.compactType)(_this.props)),
        mounted: false,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        droppingDOMNode: null,
        children: []
      });
  
      _defineProperty(_assertThisInitialized(_this), "dragEnterCounter", 0);
  
      _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e
      /*: DragOverEvent*/
      ) {
        // we should ignore events from layout's children in Firefox
        // to avoid unpredictable jumping of a dropping placeholder
        // FIXME remove this hack
        if (isFirefox && e.nativeEvent.target.className.indexOf(layoutClassName) === -1) {
          return false;
        }
  
        var _this$props = _this.props,
            droppingItem = _this$props.droppingItem,
            margin = _this$props.margin,
            cols = _this$props.cols,
            rowHeight = _this$props.rowHeight,
            maxRows = _this$props.maxRows,
            width = _this$props.width,
            containerPadding = _this$props.containerPadding;
        var layout = _this.state.layout; // This is relative to the DOM element that this event fired for.
  
        var _e$nativeEvent = e.nativeEvent,
            layerX = _e$nativeEvent.layerX,
            layerY = _e$nativeEvent.layerY;
        var droppingPosition = {
          left: layerX,
          top: layerY,
          e: e
        };
  
        if (!_this.state.droppingDOMNode) {
          var positionParams
          /*: PositionParams*/
          = {
            cols: cols,
            margin: margin,
            maxRows: maxRows,
            rowHeight: rowHeight,
            containerWidth: width,
            containerPadding: containerPadding || margin
          };
          var calculatedPosition = (0, _calculateUtils.calcXY)(positionParams, layerY, layerX, droppingItem.w, droppingItem.h);
  
          _this.setState({
            droppingDOMNode: _react.default.createElement("div", {
              key: droppingItem.i
            }),
            droppingPosition: droppingPosition,
            layout: [].concat(_toConsumableArray(layout), [_objectSpread({}, droppingItem, {
              x: calculatedPosition.x,
              y: calculatedPosition.y,
              static: false,
              isDraggable: true
            })])
          });
        } else if (_this.state.droppingPosition) {
          var _this$state$droppingP = _this.state.droppingPosition,
              left = _this$state$droppingP.left,
              top = _this$state$droppingP.top;
          var shouldUpdatePosition = left != layerX || top != layerY;
  
          if (shouldUpdatePosition) {
            _this.setState({
              droppingPosition: droppingPosition
            });
          }
        }
  
        e.stopPropagation();
        e.preventDefault();
      });
  
      _defineProperty(_assertThisInitialized(_this), "removeDroppingPlaceholder", function () {
        var _this$props2 = _this.props,
            droppingItem = _this$props2.droppingItem,
            cols = _this$props2.cols;
        var layout = _this.state.layout;
        var newLayout = (0, _utils.compact)(layout.filter(function (l) {
          return l.i !== droppingItem.i;
        }), (0, _utils.compactType)(_this.props), cols);
  
        _this.setState({
          layout: newLayout,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: undefined
        });
      });
  
      _defineProperty(_assertThisInitialized(_this), "onDragLeave", function () {
        _this.dragEnterCounter--; // onDragLeave can be triggered on each layout's child.
        // But we know that count of dragEnter and dragLeave events
        // will be balanced after leaving the layout's container
        // so we can increase and decrease count of dragEnter and
        // when it'll be equal to 0 we'll remove the placeholder
  
        if (_this.dragEnterCounter === 0) {
          _this.removeDroppingPlaceholder();
        }
      });
  
      _defineProperty(_assertThisInitialized(_this), "onDragEnter", function () {
        _this.dragEnterCounter++;
      });
  
      _defineProperty(_assertThisInitialized(_this), "onDrop", function (e
      /*: Event*/
      ) {
        var droppingItem = _this.props.droppingItem;
        var layout = _this.state.layout;
  
        var _ref = layout.find(function (l) {
          return l.i === droppingItem.i;
        }) || {},
            x = _ref.x,
            y = _ref.y,
            w = _ref.w,
            h = _ref.h; // reset gragEnter counter on drop
  
  
        _this.dragEnterCounter = 0;
  
        _this.removeDroppingPlaceholder();
  
        _this.props.onDrop({
          x: x,
          y: y,
          w: w,
          h: h,
          e: e
        });
      });
  
      (0, _utils.autoBindHandlers)(_assertThisInitialized(_this), ["onDragStart", "onDrag", "onDragStop", "onResizeStart", "onResize", "onResizeStop"]);
      return _this;
    }
  
    _createClass(ReactGridLayout, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          mounted: true
        }); // Possibly call back with layout on mount. This should be done after correcting the layout width
        // to ensure we don't rerender with the wrong width.
  
        this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps
      /*: Props*/
      , nextState
      /*: State*/
      ) {
        return (// NOTE: this is almost always unequal. Therefore the only way to get better performance
          // from SCU is if the user intentionally memoizes children. If they do, and they can
          // handle changes properly, performance will increase.
          this.props.children !== nextProps.children || !(0, _utils.fastRGLPropsEqual)(this.props, nextProps, _lodash.default) || this.state.activeDrag !== nextState.activeDrag || this.state.droppingPosition !== nextState.droppingPosition
        );
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps
      /*: Props*/
      , prevState
      /*: State*/
      ) {
        if (!this.state.activeDrag) {
          var newLayout = this.state.layout;
          var oldLayout = prevState.layout;
          this.onLayoutMaybeChanged(newLayout, oldLayout);
        }
      }
      /**
       * Calculates a pixel value for the container.
       * @return {String} Container height in pixels.
       */
  
    }, {
      key: "containerHeight",
      value: function containerHeight() {
        if (!this.props.autoSize) return;
        var nbRow = (0, _utils.bottom)(this.state.layout);
        var containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
        return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
      }
      /**
       * When dragging starts
       * @param {String} i Id of the child
       * @param {Number} x X position of the move
       * @param {Number} y Y position of the move
       * @param {Event} e The mousedown event
       * @param {Element} node The current dragging DOM element
       */
  
    }, {
      key: "onDragStart",
      value: function onDragStart(i
      /*: string*/
      , x
      /*: number*/
      , y
      /*: number*/
      , _ref2) {
        var e = _ref2.e,
            node = _ref2.node;
        var layout = this.state.layout;
        var l = (0, _utils.getLayoutItem)(layout, i);
        if (!l) return;
        this.setState({
          oldDragItem: (0, _utils.cloneLayoutItem)(l),
          oldLayout: this.state.layout
        });
        return this.props.onDragStart(layout, l, l, null, e, node);
      }
      /**
       * Each drag movement create a new dragelement and move the element to the dragged location
       * @param {String} i Id of the child
       * @param {Number} x X position of the move
       * @param {Number} y Y position of the move
       * @param {Event} e The mousedown event
       * @param {Element} node The current dragging DOM element
       */
  
    }, {
      key: "onDrag",
      value: function onDrag(i
      /*: string*/
      , x
      /*: number*/
      , y
      /*: number*/
      , _ref3) {
        var e = _ref3.e,
            node = _ref3.node;
        var oldDragItem = this.state.oldDragItem;
        var layout = this.state.layout;
        var cols = this.props.cols;
        var l = (0, _utils.getLayoutItem)(layout, i);
        if (!l) return; // Create placeholder (display only)
  
        var placeholder = {
          w: l.w,
          h: l.h,
          x: l.x,
          y: l.y,
          placeholder: true,
          i: i
        }; // Move the element to the dragged location.
  
        var isUserAction = true;
        layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, this.props.preventCollision, (0, _utils.compactType)(this.props), cols);
        this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);
        this.setState({
          layout: (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
          activeDrag: placeholder
        });
      }
      /**
       * When dragging stops, figure out which position the element is closest to and update its x and y.
       * @param  {String} i Index of the child.
       * @param {Number} x X position of the move
       * @param {Number} y Y position of the move
       * @param {Event} e The mousedown event
       * @param {Element} node The current dragging DOM element
       */
  
    }, {
      key: "onDragStop",
      value: function onDragStop(i
      /*: string*/
      , x
      /*: number*/
      , y
      /*: number*/
      , _ref4) {
        var e = _ref4.e,
            node = _ref4.node;
        if (!this.state.activeDrag) return;
        var oldDragItem = this.state.oldDragItem;
        var layout = this.state.layout;
        var _this$props3 = this.props,
            cols = _this$props3.cols,
            preventCollision = _this$props3.preventCollision;
        var l = (0, _utils.getLayoutItem)(layout, i);
        if (!l) return; // Move the element here
  
        var isUserAction = true;
        layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(this.props), cols);
        this.props.onDragStop(layout, oldDragItem, l, null, e, node); // Set state
  
        var newLayout = (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
        var oldLayout = this.state.oldLayout;
        this.setState({
          activeDrag: null,
          layout: newLayout,
          oldDragItem: null,
          oldLayout: null
        });
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
    }, {
      key: "onLayoutMaybeChanged",
      value: function onLayoutMaybeChanged(newLayout
      /*: Layout*/
      , oldLayout
      /*: ?Layout*/
      ) {
        if (!oldLayout) oldLayout = this.state.layout;
  
        if (!(0, _lodash.default)(oldLayout, newLayout)) {
          this.props.onLayoutChange(newLayout);
        }
      }
    }, {
      key: "onResizeStart",
      value: function onResizeStart(i
      /*: string*/
      , w
      /*: number*/
      , h
      /*: number*/
      , _ref5) {
        var e = _ref5.e,
            node = _ref5.node;
        var layout = this.state.layout;
        var l = (0, _utils.getLayoutItem)(layout, i);
        if (!l) return;
        this.setState({
          oldResizeItem: (0, _utils.cloneLayoutItem)(l),
          oldLayout: this.state.layout
        });
        this.props.onResizeStart(layout, l, l, null, e, node);
      }
    }, {
      key: "onResize",
      value: function onResize(i
      /*: string*/
      , w
      /*: number*/
      , h
      /*: number*/
      , _ref6) {
        var e = _ref6.e,
            node = _ref6.node;
        var _this$state = this.state,
            layout = _this$state.layout,
            oldResizeItem = _this$state.oldResizeItem;
        var _this$props4 = this.props,
            cols = _this$props4.cols,
            preventCollision = _this$props4.preventCollision;
        var l
        /*: ?LayoutItem*/
        = (0, _utils.getLayoutItem)(layout, i);
        if (!l) return; // Something like quad tree should be used
        // to find collisions faster
  
        var hasCollisions;
  
        if (preventCollision) {
          var collisions = (0, _utils.getAllCollisions)(layout, _objectSpread({}, l, {
            w: w,
            h: h
          })).filter(function (layoutItem) {
            return layoutItem.i !== l.i;
          });
          hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.
  
          if (hasCollisions) {
            // adjust w && h to maximum allowed space
            var leastX = Infinity,
                leastY = Infinity;
            collisions.forEach(function (layoutItem) {
              if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
              if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
            });
            if (Number.isFinite(leastX)) l.w = leastX - l.x;
            if (Number.isFinite(leastY)) l.h = leastY - l.y;
          }
        }
  
        if (!hasCollisions) {
          // Set new width and height.
          l.w = w;
          l.h = h;
        } // Create placeholder element (display only)
  
  
        var placeholder = {
          w: l.w,
          h: l.h,
          x: l.x,
          y: l.y,
          static: true,
          i: i
        };
        this.props.onResize(layout, oldResizeItem, l, placeholder, e, node); // Re-compact the layout and set the drag placeholder.
  
        this.setState({
          layout: (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
          activeDrag: placeholder
        });
      }
    }, {
      key: "onResizeStop",
      value: function onResizeStop(i
      /*: string*/
      , w
      /*: number*/
      , h
      /*: number*/
      , _ref7) {
        var e = _ref7.e,
            node = _ref7.node;
        var _this$state2 = this.state,
            layout = _this$state2.layout,
            oldResizeItem = _this$state2.oldResizeItem;
        var cols = this.props.cols;
        var l = (0, _utils.getLayoutItem)(layout, i);
        this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); // Set state
  
        var newLayout = (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
        var oldLayout = this.state.oldLayout;
        this.setState({
          activeDrag: null,
          layout: newLayout,
          oldResizeItem: null,
          oldLayout: null
        });
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
      /**
       * Create a placeholder object.
       * @return {Element} Placeholder div.
       */
  
    }, {
      key: "placeholder",
      value: function placeholder()
      /*: ?ReactElement<any>*/
      {
        var activeDrag = this.state.activeDrag;
        if (!activeDrag) return null;
        var _this$props5 = this.props,
            width = _this$props5.width,
            cols = _this$props5.cols,
            margin = _this$props5.margin,
            containerPadding = _this$props5.containerPadding,
            rowHeight = _this$props5.rowHeight,
            maxRows = _this$props5.maxRows,
            useCSSTransforms = _this$props5.useCSSTransforms,
            transformScale = _this$props5.transformScale; // {...this.state.activeDrag} is pretty slow, actually
  
        return _react.default.createElement(_GridItem.default, {
          w: activeDrag.w,
          h: activeDrag.h,
          x: activeDrag.x,
          y: activeDrag.y,
          i: activeDrag.i,
          className: "react-grid-placeholder",
          containerWidth: width,
          cols: cols,
          margin: margin,
          containerPadding: containerPadding || margin,
          maxRows: maxRows,
          rowHeight: rowHeight,
          isDraggable: false,
          isResizable: false,
          useCSSTransforms: useCSSTransforms,
          transformScale: transformScale
        }, _react.default.createElement("div", null));
      }
      /**
       * Given a grid item, set its style attributes & surround in a <Draggable>.
       * @param  {Element} child React element.
       * @return {Element}       Element wrapped in draggable and properly placed.
       */
  
    }, {
      key: "processGridItem",
      value: function processGridItem(child
      /*: ReactElement<any>*/
      , isDroppingItem
      /*: boolean*/
      )
      /*: ?ReactElement<any>*/
      {
        if (!child || !child.key) return;
        var l = (0, _utils.getLayoutItem)(this.state.layout, String(child.key));
        if (!l) return null;
        var _this$props6 = this.props,
            width = _this$props6.width,
            cols = _this$props6.cols,
            margin = _this$props6.margin,
            containerPadding = _this$props6.containerPadding,
            rowHeight = _this$props6.rowHeight,
            maxRows = _this$props6.maxRows,
            isDraggable = _this$props6.isDraggable,
            isResizable = _this$props6.isResizable,
            useCSSTransforms = _this$props6.useCSSTransforms,
            transformScale = _this$props6.transformScale,
            draggableCancel = _this$props6.draggableCancel,
            draggableHandle = _this$props6.draggableHandle;
        var _this$state3 = this.state,
            mounted = _this$state3.mounted,
            droppingPosition = _this$state3.droppingPosition; // Determine user manipulations possible.
        // If an item is static, it can't be manipulated by default.
        // Any properties defined directly on the grid item will take precedence.
  
        var draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
        var resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
        return _react.default.createElement(_GridItem.default, {
          containerWidth: width,
          cols: cols,
          margin: margin,
          containerPadding: containerPadding || margin,
          maxRows: maxRows,
          rowHeight: rowHeight,
          cancel: draggableCancel,
          handle: draggableHandle,
          onDragStop: this.onDragStop,
          onDragStart: this.onDragStart,
          onDrag: this.onDrag,
          onResizeStart: this.onResizeStart,
          onResize: this.onResize,
          onResizeStop: this.onResizeStop,
          isDraggable: draggable,
          isResizable: resizable,
          useCSSTransforms: useCSSTransforms && mounted,
          usePercentages: !mounted,
          transformScale: transformScale,
          w: l.w,
          h: l.h,
          x: l.x,
          y: l.y,
          i: l.i,
          minH: l.minH,
          minW: l.minW,
          maxH: l.maxH,
          maxW: l.maxW,
          static: l.static,
          droppingPosition: isDroppingItem ? droppingPosition : undefined
        }, child);
      } // Called while dragging an element. Part of browser native drag/drop API.
      // Native event target might be the layout itself, or an element within the layout.
  
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
  
        var _this$props7 = this.props,
            className = _this$props7.className,
            style = _this$props7.style,
            isDroppable = _this$props7.isDroppable;
        var mergedClassName = (0, _classnames.default)(layoutClassName, className);
  
        var mergedStyle = _objectSpread({
          height: this.containerHeight()
        }, style);
  
        return _react.default.createElement("div", {
          className: mergedClassName,
          style: mergedStyle,
          onDrop: isDroppable ? this.onDrop : _utils.noop,
          onDragLeave: isDroppable ? this.onDragLeave : _utils.noop,
          onDragEnter: isDroppable ? this.onDragEnter : _utils.noop,
          onDragOver: isDroppable ? this.onDragOver : _utils.noop
        }, _react.default.Children.map(this.props.children, function (child) {
          return _this2.processGridItem(child);
        }), isDroppable && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, true), this.placeholder());
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps
      /*: Props*/
      , prevState
      /*: State*/
      ) {
        var newLayoutBase;
  
        if (prevState.activeDrag) {
          return null;
        } // Legacy support for compactType
        // Allow parent to set layout directly.
  
  
        if (!(0, _lodash.default)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
          newLayoutBase = nextProps.layout;
        } else if (!(0, _utils.childrenEqual)(nextProps.children, prevState.children)) {
          // If children change, also regenerate the layout. Use our state
          // as the base in case because it may be more up to date than
          // what is in props.
          newLayoutBase = prevState.layout;
        } // We need to regenerate the layout.
  
  
        if (newLayoutBase) {
          var newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, _utils.compactType)(nextProps));
          return {
            layout: newLayout,
            // We need to save these props to state for using
            // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
            compactType: nextProps.compactType,
            children: nextProps.children,
            propsLayout: nextProps.layout
          };
        }
  
        return null;
      }
    }]);
  
    return ReactGridLayout;
  }(_react.default.Component);
  
  exports.default = ReactGridLayout;
  
  _defineProperty(ReactGridLayout, "displayName", "ReactGridLayout");
  
  _defineProperty(ReactGridLayout, "propTypes", _ReactGridLayoutPropTypes.default);
  
  _defineProperty(ReactGridLayout, "defaultProps", {
    autoSize: true,
    cols: 12,
    className: "",
    style: {},
    draggableHandle: "",
    draggableCancel: "",
    containerPadding: null,
    rowHeight: 150,
    maxRows: Infinity,
    // infinite vertical growth
    layout: [],
    margin: [10, 10],
    isDraggable: true,
    isResizable: true,
    isDroppable: false,
    useCSSTransforms: true,
    transformScale: 1,
    verticalCompact: true,
    compactType: "vertical",
    preventCollision: false,
    droppingItem: {
      i: "__dropping-elem__",
      h: 1,
      w: 1
    },
    onLayoutChange: _utils.noop,
    onDragStart: _utils.noop,
    onDrag: _utils.noop,
    onDragStop: _utils.noop,
    onResizeStart: _utils.noop,
    onResize: _utils.noop,
    onResizeStop: _utils.noop,
    onDrop: _utils.noop
  });
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js ***!
    \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var _default = {
    //
    // Basic props
    //
    className: _propTypes.default.string,
    style: _propTypes.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: _propTypes.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: _propTypes.default.bool,
    // # of cols.
    cols: _propTypes.default.number,
    // A selector that will not be draggable.
    draggableCancel: _propTypes.default.string,
    // A selector for the draggable handler
    draggableHandle: _propTypes.default.string,
    // Deprecated
    verticalCompact: function verticalCompact(props
    /*: Props*/
    ) {
      if (props.verticalCompact === false && "development" !== "production") {
        console.warn( // eslint-disable-line no-console
        "`verticalCompact` on <ReactGridLayout> is deprecated and will be removed soon. " + 'Use `compactType`: "horizontal" | "vertical" | null.');
      }
    },
    // Choose vertical or hotizontal compaction
    compactType: _propTypes.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function layout(props
    /*: Props*/
    ) {
      var layout = props.layout; // I hope you're setting the data-grid property on the grid items
  
      if (layout === undefined) return;
  
      __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js").validateLayout(layout, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: _propTypes.default.arrayOf(_propTypes.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: _propTypes.default.arrayOf(_propTypes.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: _propTypes.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: _propTypes.default.number,
    //
    // Flags
    //
    isDraggable: _propTypes.default.bool,
    isResizable: _propTypes.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: _propTypes.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: _propTypes.default.bool,
    // parent layout transform scale
    transformScale: _propTypes.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: _propTypes.default.bool,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: _propTypes.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: _propTypes.default.func,
    // Calls on each drag movement.
    onDrag: _propTypes.default.func,
    // Calls when drag is complete.
    onDragStop: _propTypes.default.func,
    //Calls when resize starts.
    onResizeStart: _propTypes.default.func,
    // Calls when resize movement happens.
    onResize: _propTypes.default.func,
    // Calls when resize is complete.
    onResizeStop: _propTypes.default.func,
    // Calls when some element is dropped.
    onDrop: _propTypes.default.func,
    //
    // Other validations
    //
    droppingItem: _propTypes.default.shape({
      i: _propTypes.default.string.isRequired,
      w: _propTypes.default.number.isRequired,
      h: _propTypes.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function children(props
    /*: Props*/
    , propName
    /*: string*/
    ) {
      var children = props[propName]; // Check children keys for duplicates. Throw if found.
  
      var keys = {};
  
      _react.default.Children.forEach(children, function (child) {
        if (keys[child.key]) {
          throw new Error('Duplicate child key "' + child.key + '" found! This will cause problems in ReactGridLayout.');
        }
  
        keys[child.key] = true;
      });
    }
  };
  exports.default = _default;
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js ***!
    \***************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
  
  var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
  
  var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));
  
  var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");
  
  var _responsiveUtils = __webpack_require__(/*! ./responsiveUtils */ "./node_modules/react-grid-layout/build/responsiveUtils.js");
  
  var _ReactGridLayout = _interopRequireDefault(__webpack_require__(/*! ./ReactGridLayout */ "./node_modules/react-grid-layout/build/ReactGridLayout.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  
  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  
  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
  
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
  
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var type = function type(obj) {
    return Object.prototype.toString.call(obj);
  };
  /**
   * Get a value of margin or containerPadding.
   *
   * @param  {Array | Object} param Margin | containerPadding, e.g. [10, 10] | {lg: [10, 10], ...}.
   * @param  {String} breakpoint   Breakpoint: lg, md, sm, xs and etc.
   * @return {Array}
   */
  
  
  function getIndentationValue(param
  /*: { [key: string]: [number, number] } | [number, number]*/
  , breakpoint
  /*: string*/
  ) {
    return Array.isArray(param) ? param : param[breakpoint];
  }
  /*:: type State = {
    layout: Layout,
    breakpoint: string,
    cols: number,
    layouts?: { [key: string]: Layout }
  };*/
  
  /*:: type Props<Breakpoint: string = string> = {|
    ...React.ElementConfig<typeof ReactGridLayout>,
  
    // Responsive config
    breakpoint?: ?Breakpoint,
    breakpoints: Breakpoints<Breakpoint>,
    cols: { [key: Breakpoint]: number },
    layouts: ResponsiveLayout<Breakpoint>,
    width: number,
    margin: { [key: Breakpoint]: [number, number] } | [number, number],
    containerPadding: { [key: Breakpoint]: [number, number] } | [number, number],
  
    // Callbacks
    onBreakpointChange: (Breakpoint, cols: number) => void,
    onLayoutChange: (Layout, { [key: Breakpoint]: Layout }) => void,
    onWidthChange: (
      containerWidth: number,
      margin: [number, number],
      cols: number,
      containerPadding: [number, number] | null
    ) => void
  |};*/
  
  
  var ResponsiveReactGridLayout =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ResponsiveReactGridLayout, _React$Component);
  
    function ResponsiveReactGridLayout() {
      var _getPrototypeOf2;
  
      var _this;
  
      _classCallCheck(this, ResponsiveReactGridLayout);
  
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResponsiveReactGridLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
  
      _defineProperty(_assertThisInitialized(_this), "state", _this.generateInitialState());
  
      _defineProperty(_assertThisInitialized(_this), "onLayoutChange", function (layout
      /*: Layout*/
      ) {
        _this.props.onLayoutChange(layout, _objectSpread({}, _this.props.layouts, _defineProperty({}, _this.state.breakpoint, layout)));
      });
  
      return _this;
    }
  
    _createClass(ResponsiveReactGridLayout, [{
      key: "generateInitialState",
      value: function generateInitialState()
      /*: State*/
      {
        var _this$props = this.props,
            width = _this$props.width,
            breakpoints = _this$props.breakpoints,
            layouts = _this$props.layouts,
            cols = _this$props.cols;
        var breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
        var colNo = (0, _responsiveUtils.getColsFromBreakpoint)(breakpoint, cols); // verticalCompact compatibility, now deprecated
  
        var compactType = this.props.verticalCompact === false ? null : this.props.compactType; // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
        // for this layout.
  
        var initialLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, breakpoint, breakpoint, colNo, compactType);
        return {
          layout: initialLayout,
          breakpoint: breakpoint,
          cols: colNo
        };
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps
      /*: Props<*>*/
      ) {
        // Allow parent to set width or breakpoint directly.
        if (this.props.width != prevProps.width || this.props.breakpoint !== prevProps.breakpoint || !(0, _lodash.default)(this.props.breakpoints, prevProps.breakpoints) || !(0, _lodash.default)(this.props.cols, prevProps.cols)) {
          this.onWidthChange(prevProps);
        }
      } // wrap layouts so we do not need to pass layouts to child
  
    }, {
      key: "onWidthChange",
  
      /**
       * When the width changes work through breakpoints and reset state with the new width & breakpoint.
       * Width changes are necessary to figure out the widget widths.
       */
      value: function onWidthChange(prevProps
      /*: Props<*>*/
      ) {
        var _this$props2 = this.props,
            breakpoints = _this$props2.breakpoints,
            cols = _this$props2.cols,
            layouts = _this$props2.layouts,
            compactType = _this$props2.compactType;
        var newBreakpoint = this.props.breakpoint || (0, _responsiveUtils.getBreakpointFromWidth)(this.props.breakpoints, this.props.width);
        var lastBreakpoint = this.state.breakpoint;
        var newCols
        /*: number*/
        = (0, _responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);
  
        var newLayouts = _objectSpread({}, layouts); // Breakpoint change
  
  
        if (lastBreakpoint !== newBreakpoint || prevProps.breakpoints !== breakpoints || prevProps.cols !== cols) {
          // Preserve the current layout if the current breakpoint is not present in the next layouts.
          if (!(lastBreakpoint in newLayouts)) newLayouts[lastBreakpoint] = (0, _utils.cloneLayout)(this.state.layout); // Find or generate a new layout.
  
          var layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(newLayouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, compactType); // This adds missing items.
  
          layout = (0, _utils.synchronizeLayoutWithChildren)(layout, this.props.children, newCols, compactType); // Store the new layout.
  
          newLayouts[newBreakpoint] = layout; // callbacks
  
          this.props.onLayoutChange(layout, newLayouts);
          this.props.onBreakpointChange(newBreakpoint, newCols);
          this.setState({
            breakpoint: newBreakpoint,
            layout: layout,
            cols: newCols
          });
        }
  
        var margin = getIndentationValue(this.props.margin, newBreakpoint);
        var containerPadding = getIndentationValue(this.props.containerPadding, newBreakpoint); //call onWidthChange on every change of width, not only on breakpoint changes
  
        this.props.onWidthChange(this.props.width, margin, newCols, containerPadding);
      }
    }, {
      key: "render",
      value: function render() {
        /* eslint-disable no-unused-vars */
        var _this$props3 = this.props,
            breakpoint = _this$props3.breakpoint,
            breakpoints = _this$props3.breakpoints,
            cols = _this$props3.cols,
            layouts = _this$props3.layouts,
            margin = _this$props3.margin,
            containerPadding = _this$props3.containerPadding,
            onBreakpointChange = _this$props3.onBreakpointChange,
            onLayoutChange = _this$props3.onLayoutChange,
            onWidthChange = _this$props3.onWidthChange,
            other = _objectWithoutProperties(_this$props3, ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"]);
        /* eslint-enable no-unused-vars */
  
  
        return React.createElement(_ReactGridLayout.default, _extends({}, other, {
          margin: getIndentationValue(margin, this.state.breakpoint),
          containerPadding: getIndentationValue(containerPadding, this.state.breakpoint),
          onLayoutChange: this.onLayoutChange,
          layout: this.state.layout,
          cols: this.state.cols
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps
      /*: Props<*>*/
      , prevState
      /*: State*/
      ) {
        if (!(0, _lodash.default)(nextProps.layouts, prevState.layouts)) {
          // Allow parent to set layouts directly.
          var breakpoint = prevState.breakpoint,
              _cols = prevState.cols; // Since we're setting an entirely new layout object, we must generate a new responsive layout
          // if one does not exist.
  
          var newLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(nextProps.layouts, nextProps.breakpoints, breakpoint, breakpoint, _cols, nextProps.compactType);
          return {
            layout: newLayout,
            layouts: nextProps.layouts
          };
        }
  
        return null;
      }
    }]);
  
    return ResponsiveReactGridLayout;
  }(React.Component);
  
  exports.default = ResponsiveReactGridLayout;
  
  _defineProperty(ResponsiveReactGridLayout, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: _propTypes.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: _propTypes.default.object,
    // # of cols. This is a breakpoint -> cols map
    cols: _propTypes.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts: function layouts(props
    /*: Props<>*/
    , propName
    /*: string*/
    ) {
      if (type(props[propName]) !== "[object Object]") {
        throw new Error("Layout property must be an object. Received: " + type(props[propName]));
      }
  
      Object.keys(props[propName]).forEach(function (key) {
        if (!(key in props.breakpoints)) {
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        }
  
        (0, _utils.validateLayout)(props.layouts[key], "layouts." + key);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: _propTypes.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: _propTypes.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: _propTypes.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: _propTypes.default.func
  });
  
  _defineProperty(ResponsiveReactGridLayout, "defaultProps", {
    breakpoints: {
      lg: 1200,
      md: 996,
      sm: 768,
      xs: 480,
      xxs: 0
    },
    cols: {
      lg: 12,
      md: 10,
      sm: 6,
      xs: 4,
      xxs: 2
    },
    layouts: {},
    margin: [10, 10],
    containerPadding: {
      lg: [0, 0],
      md: [0, 0],
      sm: [0, 0],
      xs: [0, 0],
      xxs: [0, 0]
    },
    onBreakpointChange: _utils.noop,
    onLayoutChange: _utils.noop,
    onWidthChange: _utils.noop
  });
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/calculateUtils.js":
  /*!****************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/calculateUtils.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.calcGridColWidth = calcGridColWidth;
  exports.calcGridItemPosition = calcGridItemPosition;
  exports.calcXY = calcXY;
  exports.calcWH = calcWH;
  
  /*:: import type { Position } from "./utils";*/
  
  /*:: export type PositionParams = {
    margin: [number, number],
    containerPadding: [number, number],
    containerWidth: number,
    cols: number,
    rowHeight: number,
    maxRows: number
  };*/
  // Helper for generating column width
  function calcGridColWidth(positionParams
  /*: PositionParams*/
  )
  /*: number*/
  {
    var margin = positionParams.margin,
        containerPadding = positionParams.containerPadding,
        containerWidth = positionParams.containerWidth,
        cols = positionParams.cols;
    return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
  }
  /**
   * Return position on the page given an x, y, w, h.
   * left, top, width, height are all in pixels.
   * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
   * @param  {Number}  x                      X coordinate in grid units.
   * @param  {Number}  y                      Y coordinate in grid units.
   * @param  {Number}  w                      W coordinate in grid units.
   * @param  {Number}  h                      H coordinate in grid units.
   * @return {Position}                       Object containing coords.
   */
  
  
  function calcGridItemPosition(positionParams
  /*: PositionParams*/
  , x
  /*: number*/
  , y
  /*: number*/
  , w
  /*: number*/
  , h
  /*: number*/
  , state
  /*: ?Object*/
  )
  /*: Position*/
  {
    var margin = positionParams.margin,
        containerPadding = positionParams.containerPadding,
        rowHeight = positionParams.rowHeight;
    var colWidth = calcGridColWidth(positionParams);
    var out = {}; // If resizing, use the exact width and height as returned from resizing callbacks.
  
    if (state && state.resizing) {
      out.width = Math.round(state.resizing.width);
      out.height = Math.round(state.resizing.height);
    } // Otherwise, calculate from grid units.
    else {
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        out.width = w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin[0]);
        out.height = h === Infinity ? h : Math.round(rowHeight * h + Math.max(0, h - 1) * margin[1]);
      } // If dragging, use the exact width and height as returned from dragging callbacks.
  
  
    if (state && state.dragging) {
      out.top = Math.round(state.dragging.top);
      out.left = Math.round(state.dragging.left);
    } // Otherwise, calculate from grid units.
    else {
        out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
        out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
      }
  
    return out;
  }
  /**
   * Translate x and y coordinates from pixels to grid units.
   * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
   * @param  {Number} top                     Top position (relative to parent) in pixels.
   * @param  {Number} left                    Left position (relative to parent) in pixels.
   * @param  {Number} w                       W coordinate in grid units.
   * @param  {Number} h                       H coordinate in grid units.
   * @return {Object}                         x and y in grid units.
   */
  
  
  function calcXY(positionParams
  /*: PositionParams*/
  , top
  /*: number*/
  , left
  /*: number*/
  , w
  /*: number*/
  , h
  /*: number*/
  )
  /*: { x: number, y: number }*/
  {
    var margin = positionParams.margin,
        cols = positionParams.cols,
        rowHeight = positionParams.rowHeight,
        maxRows = positionParams.maxRows;
    var colWidth = calcGridColWidth(positionParams); // left = colWidth * x + margin * (x + 1)
    // l = cx + m(x+1)
    // l = cx + mx + m
    // l - m = cx + mx
    // l - m = x(c + m)
    // (l - m) / (c + m) = x
    // x = (left - margin) / (coldWidth + margin)
  
    var x = Math.round((left - margin[0]) / (colWidth + margin[0]));
    var y = Math.round((top - margin[1]) / (rowHeight + margin[1])); // Capping
  
    x = Math.max(Math.min(x, cols - w), 0);
    y = Math.max(Math.min(y, maxRows - h), 0);
    return {
      x: x,
      y: y
    };
  }
  /**
   * Given a height and width in pixel values, calculate grid units.
   * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calcluations.
   * @param  {Number} height                  Height in pixels.
   * @param  {Number} width                   Width in pixels.
   * @param  {Number} x                       X coordinate in grid units.
   * @param  {Number} y                       Y coordinate in grid units.
   * @return {Object}                         w, h as grid units.
   */
  
  
  function calcWH(positionParams
  /*: PositionParams*/
  , width
  /*: number*/
  , height
  /*: number*/
  , x
  /*: number*/
  , y
  /*: number*/
  )
  /*: { w: number, h: number }*/
  {
    var margin = positionParams.margin,
        maxRows = positionParams.maxRows,
        cols = positionParams.cols,
        rowHeight = positionParams.rowHeight;
    var colWidth = calcGridColWidth(positionParams); // width = colWidth * w - (margin * (w - 1))
    // ...
    // w = (width + margin) / (colWidth + margin)
  
    var w = Math.round((width + margin[0]) / (colWidth + margin[0]));
    var h = Math.round((height + margin[1]) / (rowHeight + margin[1])); // Capping
  
    w = Math.max(Math.min(w, cols - x), 0);
    h = Math.max(Math.min(h, maxRows - y), 0);
    return {
      w: w,
      h: h
    };
  }
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/components/WidthProvider.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/components/WidthProvider.js ***!
    \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = WidthProvider;
  
  var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
  
  var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
  
  var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  
  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
  
  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
  
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
  
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  /*
   * A simple HOC that provides facility for listening to container resizes.
   *
   * The Flow type is pretty janky here. I can't just spread `WPProps` into this returned object - I wish I could - but it triggers
   * a flow bug of some sort that causes it to stop typechecking.
   */
  function WidthProvider
  /*:: <Config>*/
  (ComposedComponent
  /*: React.AbstractComponent<Config>*/
  )
  /*: React.AbstractComponent<{|
    ...Config,
    measureBeforeMount?: boolean,
    className?: string,
    style?: Object,
    width?: number
  |}>*/
  {
    var _class, _temp;
  
    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WidthProvider, _React$Component);
  
      function WidthProvider() {
        var _getPrototypeOf2;
  
        var _this;
  
        _classCallCheck(this, WidthProvider);
  
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WidthProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
  
        _defineProperty(_assertThisInitialized(_this), "state", {
          width: 1280
        });
  
        _defineProperty(_assertThisInitialized(_this), "mounted", false);
  
        _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
          if (!_this.mounted) return; // eslint-disable-next-line react/no-find-dom-node
  
          var node = _reactDom.default.findDOMNode(_assertThisInitialized(_this)); // Flow casts this to Text | Element
  
  
          if (node instanceof HTMLElement) _this.setState({
            width: node.offsetWidth
          });
        });
  
        return _this;
      }
  
      _createClass(WidthProvider, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.mounted = true;
          window.addEventListener("resize", this.onWindowResize); // Call to properly set the breakpoint and resize the elements.
          // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
          // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.
  
          this.onWindowResize();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.mounted = false;
          window.removeEventListener("resize", this.onWindowResize);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              measureBeforeMount = _this$props.measureBeforeMount,
              rest = _objectWithoutProperties(_this$props, ["measureBeforeMount"]);
  
          if (measureBeforeMount && !this.mounted) {
            return React.createElement("div", {
              className: this.props.className,
              style: this.props.style
            });
          }
  
          return React.createElement(ComposedComponent, _extends({}, rest, this.state));
        }
      }]);
  
      return WidthProvider;
    }(React.Component), _defineProperty(_class, "defaultProps", {
      measureBeforeMount: false
    }), _defineProperty(_class, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: _propTypes.default.bool
    }), _temp;
  }
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/fastRGLPropsEqual.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/fastRGLPropsEqual.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  // this file was prevaled
  module.exports = function fastRGLPropsEqual(a, b, isEqualImpl) {
    if (a === b) return true;
    return a.className === b.className && isEqualImpl(a.style, b.style) && a.width === b.width && a.autoSize === b.autoSize && a.cols === b.cols && a.draggableCancel === b.draggableCancel && a.draggableHandle === b.draggableHandle && isEqualImpl(a.verticalCompact, b.verticalCompact) && isEqualImpl(a.compactType, b.compactType) && isEqualImpl(a.layout, b.layout) && isEqualImpl(a.margin, b.margin) && isEqualImpl(a.containerPadding, b.containerPadding) && a.rowHeight === b.rowHeight && a.maxRows === b.maxRows && a.isDraggable === b.isDraggable && a.isResizable === b.isResizable && a.preventCollision === b.preventCollision && a.useCSSTransforms === b.useCSSTransforms && a.transformScale === b.transformScale && a.isDroppable === b.isDroppable && a.onLayoutChange === b.onLayoutChange && a.onDragStart === b.onDragStart && a.onDrag === b.onDrag && a.onDragStop === b.onDragStop && a.onResizeStart === b.onResizeStart && a.onResize === b.onResize && a.onResizeStop === b.onResizeStop && a.onDrop === b.onDrop && isEqualImpl(a.droppingItem, b.droppingItem);
  };
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/responsiveUtils.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/react-grid-layout/build/responsiveUtils.js ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBreakpointFromWidth = getBreakpointFromWidth;
  exports.getColsFromBreakpoint = getColsFromBreakpoint;
  exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
  exports.sortBreakpoints = sortBreakpoints;
  
  var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-grid-layout/build/utils.js");
  
  /**
   * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
   *
   * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
   * @param  {Number} width Screen width.
   * @return {String}       Highest breakpoint that is less than width.
   */
  function getBreakpointFromWidth(breakpoints
  /*: Breakpoints<Breakpoint>*/
  , width
  /*: number*/
  )
  /*: Breakpoint*/
  {
    var sorted = sortBreakpoints(breakpoints);
    var matching = sorted[0];
  
    for (var i = 1, len = sorted.length; i < len; i++) {
      var breakpointName = sorted[i];
      if (width > breakpoints[breakpointName]) matching = breakpointName;
    }
  
    return matching;
  }
  /**
   * Given a breakpoint, get the # of cols set for it.
   * @param  {String} breakpoint Breakpoint name.
   * @param  {Object} cols       Map of breakpoints to cols.
   * @return {Number}            Number of cols.
   */
  
  
  function getColsFromBreakpoint(breakpoint
  /*: Breakpoint*/
  , cols
  /*: Breakpoints<Breakpoint>*/
  )
  /*: number*/
  {
    if (!cols[breakpoint]) {
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
    }
  
    return cols[breakpoint];
  }
  /**
   * Given existing layouts and a new breakpoint, find or generate a new layout.
   *
   * This finds the layout above the new one and generates from it, if it exists.
   *
   * @param  {Object} layouts     Existing layouts.
   * @param  {Array} breakpoints All breakpoints.
   * @param  {String} breakpoint New breakpoint.
   * @param  {String} breakpoint Last breakpoint (for fallback).
   * @param  {Number} cols       Column count at new breakpoint.
   * @param  {Boolean} verticalCompact Whether or not to compact the layout
   *   vertically.
   * @return {Array}             New layout.
   */
  
  
  function findOrGenerateResponsiveLayout(layouts
  /*: ResponsiveLayout<Breakpoint>*/
  , breakpoints
  /*: Breakpoints<Breakpoint>*/
  , breakpoint
  /*: Breakpoint*/
  , lastBreakpoint
  /*: Breakpoint*/
  , cols
  /*: number*/
  , compactType
  /*: CompactType*/
  )
  /*: Layout*/
  {
    // If it already exists, just return it.
    if (layouts[breakpoint]) return (0, _utils.cloneLayout)(layouts[breakpoint]); // Find or generate the next layout
  
    var layout = layouts[lastBreakpoint];
    var breakpointsSorted = sortBreakpoints(breakpoints);
    var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
  
    for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
      var b = breakpointsAbove[i];
  
      if (layouts[b]) {
        layout = layouts[b];
        break;
      }
    }
  
    layout = (0, _utils.cloneLayout)(layout || []); // clone layout so we don't modify existing items
  
    return (0, _utils.compact)((0, _utils.correctBounds)(layout, {
      cols: cols
    }), compactType, cols);
  }
  /**
   * Given breakpoints, return an array of breakpoints sorted by width. This is usually
   * e.g. ['xxs', 'xs', 'sm', ...]
   *
   * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
   * @return {Array}              Sorted breakpoints.
   */
  
  
  function sortBreakpoints(breakpoints
  /*: Breakpoints<Breakpoint>*/
  )
  /*: Array<Breakpoint>*/
  {
    var keys
    /*: Array<string>*/
    = Object.keys(breakpoints);
    return keys.sort(function (a, b) {
      return breakpoints[a] - breakpoints[b];
    });
  }
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/build/utils.js":
  /*!*******************************************************!*\
    !*** ./node_modules/react-grid-layout/build/utils.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bottom = bottom;
  exports.cloneLayout = cloneLayout;
  exports.cloneLayoutItem = cloneLayoutItem;
  exports.childrenEqual = childrenEqual;
  exports.fastPositionEqual = fastPositionEqual;
  exports.collides = collides;
  exports.compact = compact;
  exports.compactItem = compactItem;
  exports.correctBounds = correctBounds;
  exports.getLayoutItem = getLayoutItem;
  exports.getFirstCollision = getFirstCollision;
  exports.getAllCollisions = getAllCollisions;
  exports.getStatics = getStatics;
  exports.moveElement = moveElement;
  exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
  exports.perc = perc;
  exports.setTransform = setTransform;
  exports.setTopLeft = setTopLeft;
  exports.sortLayoutItems = sortLayoutItems;
  exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
  exports.sortLayoutItemsByColRow = sortLayoutItemsByColRow;
  exports.synchronizeLayoutWithChildren = synchronizeLayoutWithChildren;
  exports.validateLayout = validateLayout;
  exports.compactType = compactType;
  exports.autoBindHandlers = autoBindHandlers;
  exports.noop = exports.fastRGLPropsEqual = void 0;
  
  var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js"));
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var isProduction = "development" === "production";
  var DEBUG = false;
  /**
   * Return the bottom coordinate of the layout.
   *
   * @param  {Array} layout Layout array.
   * @return {Number}       Bottom coordinate.
   */
  
  function bottom(layout
  /*: Layout*/
  )
  /*: number*/
  {
    var max = 0,
        bottomY;
  
    for (var i = 0, len = layout.length; i < len; i++) {
      bottomY = layout[i].y + layout[i].h;
      if (bottomY > max) max = bottomY;
    }
  
    return max;
  }
  
  function cloneLayout(layout
  /*: Layout*/
  )
  /*: Layout*/
  {
    var newLayout = Array(layout.length);
  
    for (var i = 0, len = layout.length; i < len; i++) {
      newLayout[i] = cloneLayoutItem(layout[i]);
    }
  
    return newLayout;
  } // Fast path to cloning, since this is monomorphic
  
  
  function cloneLayoutItem(layoutItem
  /*: LayoutItem*/
  )
  /*: LayoutItem*/
  {
    return {
      w: layoutItem.w,
      h: layoutItem.h,
      x: layoutItem.x,
      y: layoutItem.y,
      i: layoutItem.i,
      minW: layoutItem.minW,
      maxW: layoutItem.maxW,
      minH: layoutItem.minH,
      maxH: layoutItem.maxH,
      moved: Boolean(layoutItem.moved),
      static: Boolean(layoutItem.static),
      // These can be null
      isDraggable: layoutItem.isDraggable,
      isResizable: layoutItem.isResizable
    };
  }
  /**
   * Comparing React `children` is a bit difficult. This is a good way to compare them.
   * This will catch differences in keys, order, and length.
   */
  
  
  function childrenEqual(a
  /*: ReactChildren*/
  , b
  /*: ReactChildren*/
  )
  /*: boolean*/
  {
    return (0, _lodash.default)(_react.default.Children.map(a, function (c) {
      return c.key;
    }), _react.default.Children.map(b, function (c) {
      return c.key;
    }));
  }
  /**
   * See `fastRGLPropsEqual.js`.
   * We want this to run as fast as possible - it is called often - and to be
   * resilient to new props that we add. So rather than call lodash.isEqual,
   * which isn't suited to comparing props very well, we use this specialized
   * function in conjunction with preval to generate the fastest possible comparison
   * function, tuned for exactly our props.
   */
  
  /*:: type FastRGLPropsEqual = (Object, Object, Function) => boolean;*/
  
  
  var fastRGLPropsEqual
  /*: FastRGLPropsEqual*/
  = __webpack_require__(/*! ./fastRGLPropsEqual */ "./node_modules/react-grid-layout/build/fastRGLPropsEqual.js"); // Like the above, but a lot simpler.
  
  
  exports.fastRGLPropsEqual = fastRGLPropsEqual;
  
  function fastPositionEqual(a
  /*: Position*/
  , b
  /*: Position*/
  ) {
    return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
  }
  /**
   * Given two layoutitems, check if they collide.
   */
  
  
  function collides(l1
  /*: LayoutItem*/
  , l2
  /*: LayoutItem*/
  )
  /*: boolean*/
  {
    if (l1.i === l2.i) return false; // same element
  
    if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2
  
    if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2
  
    if (l1.y + l1.h <= l2.y) return false; // l1 is above l2
  
    if (l1.y >= l2.y + l2.h) return false; // l1 is below l2
  
    return true; // boxes overlap
  }
  /**
   * Given a layout, compact it. This involves going down each y coordinate and removing gaps
   * between items.
   *
   * Does not modify layout items (clones). Creates a new layout array.
   *
   * @param  {Array} layout Layout.
   * @param  {Boolean} verticalCompact Whether or not to compact the layout
   *   vertically.
   * @return {Array}       Compacted Layout.
   */
  
  
  function compact(layout
  /*: Layout*/
  , compactType
  /*: CompactType*/
  , cols
  /*: number*/
  )
  /*: Layout*/
  {
    // Statics go in the compareWith array right away so items flow around them.
    var compareWith = getStatics(layout); // We go through the items by row and column.
  
    var sorted = sortLayoutItems(layout, compactType); // Holding for new items.
  
    var out = Array(layout.length);
  
    for (var i = 0, len = sorted.length; i < len; i++) {
      var l = cloneLayoutItem(sorted[i]); // Don't move static elements
  
      if (!l.static) {
        l = compactItem(compareWith, l, compactType, cols, sorted); // Add to comparison array. We only collide with items before this one.
        // Statics are already in this array.
  
        compareWith.push(l);
      } // Add to output array to make sure they still come out in the right order.
  
  
      out[layout.indexOf(sorted[i])] = l; // Clear moved flag, if it exists.
  
      l.moved = false;
    }
  
    return out;
  }
  
  var heightWidth = {
    x: "w",
    y: "h"
  };
  /**
   * Before moving item down, it will check if the movement will cause collisions and move those items down before.
   */
  
  function resolveCompactionCollision(layout
  /*: Layout*/
  , item
  /*: LayoutItem*/
  , moveToCoord
  /*: number*/
  , axis
  /*: "x" | "y"*/
  ) {
    var sizeProp = heightWidth[axis];
    item[axis] += 1;
    var itemIndex = layout.map(function (layoutItem) {
      return layoutItem.i;
    }).indexOf(item.i); // Go through each item we collide with.
  
    for (var i = itemIndex + 1; i < layout.length; i++) {
      var otherItem = layout[i]; // Ignore static items
  
      if (otherItem.static) continue; // Optimization: we can break early if we know we're past this el
      // We can do this b/c it's a sorted layout
  
      if (otherItem.y > item.y + item.h) break;
  
      if (collides(item, otherItem)) {
        resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis);
      }
    }
  
    item[axis] = moveToCoord;
  }
  /**
   * Compact an item in the layout.
   *
   * Modifies item.
   *
   */
  
  
  function compactItem(compareWith
  /*: Layout*/
  , l
  /*: LayoutItem*/
  , compactType
  /*: CompactType*/
  , cols
  /*: number*/
  , fullLayout
  /*: Layout*/
  )
  /*: LayoutItem*/
  {
    var compactV = compactType === "vertical";
    var compactH = compactType === "horizontal";
  
    if (compactV) {
      // Bottom 'y' possible is the bottom of the layout.
      // This allows you to do nice stuff like specify {y: Infinity}
      // This is here because the layout must be sorted in order to get the correct bottom `y`.
      l.y = Math.min(bottom(compareWith), l.y); // Move the element up as far as it can go without colliding.
  
      while (l.y > 0 && !getFirstCollision(compareWith, l)) {
        l.y--;
      }
    } else if (compactH) {
      l.y = Math.min(bottom(compareWith), l.y); // Move the element left as far as it can go without colliding.
  
      while (l.x > 0 && !getFirstCollision(compareWith, l)) {
        l.x--;
      }
    } // Move it down, and keep moving it down if it's colliding.
  
  
    var collides;
  
    while (collides = getFirstCollision(compareWith, l)) {
      if (compactH) {
        resolveCompactionCollision(fullLayout, l, collides.x + collides.w, "x");
      } else {
        resolveCompactionCollision(fullLayout, l, collides.y + collides.h, "y");
      } // Since we can't grow without bounds horizontally, if we've overflown, let's move it down and try again.
  
  
      if (compactH && l.x + l.w > cols) {
        l.x = cols - l.w;
        l.y++;
      }
    }
  
    return l;
  }
  /**
   * Given a layout, make sure all elements fit within its bounds.
   *
   * Modifies layout items.
   *
   * @param  {Array} layout Layout array.
   * @param  {Number} bounds Number of columns.
   */
  
  
  function correctBounds(layout
  /*: Layout*/
  , bounds
  /*: { cols: number }*/
  )
  /*: Layout*/
  {
    var collidesWith = getStatics(layout);
  
    for (var i = 0, len = layout.length; i < len; i++) {
      var l = layout[i]; // Overflows right
  
      if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; // Overflows left
  
      if (l.x < 0) {
        l.x = 0;
        l.w = bounds.cols;
      }
  
      if (!l.static) collidesWith.push(l);else {
        // If this is static and collides with other statics, we must move it down.
        // We have to do something nicer than just letting them overlap.
        while (getFirstCollision(collidesWith, l)) {
          l.y++;
        }
      }
    }
  
    return layout;
  }
  /**
   * Get a layout item by ID. Used so we can override later on if necessary.
   *
   * @param  {Array}  layout Layout array.
   * @param  {String} id     ID
   * @return {LayoutItem}    Item at ID.
   */
  
  
  function getLayoutItem(layout
  /*: Layout*/
  , id
  /*: string*/
  )
  /*: ?LayoutItem*/
  {
    for (var i = 0, len = layout.length; i < len; i++) {
      if (layout[i].i === id) return layout[i];
    }
  }
  /**
   * Returns the first item this layout collides with.
   * It doesn't appear to matter which order we approach this from, although
   * perhaps that is the wrong thing to do.
   *
   * @param  {Object} layoutItem Layout item.
   * @return {Object|undefined}  A colliding layout item, or undefined.
   */
  
  
  function getFirstCollision(layout
  /*: Layout*/
  , layoutItem
  /*: LayoutItem*/
  )
  /*: ?LayoutItem*/
  {
    for (var i = 0, len = layout.length; i < len; i++) {
      if (collides(layout[i], layoutItem)) return layout[i];
    }
  }
  
  function getAllCollisions(layout
  /*: Layout*/
  , layoutItem
  /*: LayoutItem*/
  )
  /*: Array<LayoutItem>*/
  {
    return layout.filter(function (l) {
      return collides(l, layoutItem);
    });
  }
  /**
   * Get all static elements.
   * @param  {Array} layout Array of layout objects.
   * @return {Array}        Array of static layout items..
   */
  
  
  function getStatics(layout
  /*: Layout*/
  )
  /*: Array<LayoutItem>*/
  {
    return layout.filter(function (l) {
      return l.static;
    });
  }
  /**
   * Move an element. Responsible for doing cascading movements of other elements.
   *
   * Modifies layout items.
   *
   * @param  {Array}      layout            Full layout to modify.
   * @param  {LayoutItem} l                 element to move.
   * @param  {Number}     [x]               X position in grid units.
   * @param  {Number}     [y]               Y position in grid units.
   */
  
  
  function moveElement(layout
  /*: Layout*/
  , l
  /*: LayoutItem*/
  , x
  /*: ?number*/
  , y
  /*: ?number*/
  , isUserAction
  /*: ?boolean*/
  , preventCollision
  /*: ?boolean*/
  , compactType
  /*: CompactType*/
  , cols
  /*: number*/
  )
  /*: Layout*/
  {
    // If this is static and not explicitly enabled as draggable,
    // no move is possible, so we can short-circuit this immediately.
    if (l.static && l.isDraggable !== true) return layout; // Short-circuit if nothing to do.
  
    if (l.y === y && l.x === x) return layout;
    log("Moving element ".concat(l.i, " to [").concat(String(x), ",").concat(String(y), "] from [").concat(l.x, ",").concat(l.y, "]"));
    var oldX = l.x;
    var oldY = l.y; // This is quite a bit faster than extending the object
  
    if (typeof x === "number") l.x = x;
    if (typeof y === "number") l.y = y;
    l.moved = true; // If this collides with anything, move it.
    // When doing this comparison, we have to sort the items we compare with
    // to ensure, in the case of multiple collisions, that we're getting the
    // nearest collision.
  
    var sorted = sortLayoutItems(layout, compactType);
    var movingUp = compactType === "vertical" && typeof y === "number" ? oldY >= y : compactType === "horizontal" && typeof x === "number" ? oldX >= x : false; // $FlowIgnore acceptable modification of read-only array as it was recently cloned
  
    if (movingUp) sorted = sorted.reverse();
    var collisions = getAllCollisions(sorted, l); // There was a collision; abort
  
    if (preventCollision && collisions.length) {
      log("Collision prevented on ".concat(l.i, ", reverting."));
      l.x = oldX;
      l.y = oldY;
      l.moved = false;
      return layout;
    } // Move each item that collides away from this element.
  
  
    for (var i = 0, len = collisions.length; i < len; i++) {
      var collision = collisions[i];
      log("Resolving collision between ".concat(l.i, " at [").concat(l.x, ",").concat(l.y, "] and ").concat(collision.i, " at [").concat(collision.x, ",").concat(collision.y, "]")); // Short circuit so we can't infinite loop
  
      if (collision.moved) continue; // Don't move static items - we have to move *this* element away
  
      if (collision.static) {
        layout = moveElementAwayFromCollision(layout, collision, l, isUserAction, compactType, cols);
      } else {
        layout = moveElementAwayFromCollision(layout, l, collision, isUserAction, compactType, cols);
      }
    }
  
    return layout;
  }
  /**
   * This is where the magic needs to happen - given a collision, move an element away from the collision.
   * We attempt to move it up if there's room, otherwise it goes below.
   *
   * @param  {Array} layout            Full layout to modify.
   * @param  {LayoutItem} collidesWith Layout item we're colliding with.
   * @param  {LayoutItem} itemToMove   Layout item we're moving.
   */
  
  
  function moveElementAwayFromCollision(layout
  /*: Layout*/
  , collidesWith
  /*: LayoutItem*/
  , itemToMove
  /*: LayoutItem*/
  , isUserAction
  /*: ?boolean*/
  , compactType
  /*: CompactType*/
  , cols
  /*: number*/
  )
  /*: Layout*/
  {
    var compactH = compactType === "horizontal"; // Compact vertically if not set to horizontal
  
    var compactV = compactType !== "horizontal";
    var preventCollision = collidesWith.static; // we're already colliding (not for static items)
    // If there is enough space above the collision to put this element, move it there.
    // We only do this on the main collision as this can get funky in cascades and cause
    // unwanted swapping behavior.
  
    if (isUserAction) {
      // Reset isUserAction flag because we're not in the main collision anymore.
      isUserAction = false; // Make a mock item so we don't modify the item here, only modify in moveElement.
  
      var fakeItem
      /*: LayoutItem*/
      = {
        x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
        y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
        w: itemToMove.w,
        h: itemToMove.h,
        i: "-1"
      }; // No collision? If so, we can go up there; otherwise, we'll end up moving down as normal
  
      if (!getFirstCollision(layout, fakeItem)) {
        log("Doing reverse collision on ".concat(itemToMove.i, " up to [").concat(fakeItem.x, ",").concat(fakeItem.y, "]."));
        return moveElement(layout, itemToMove, compactH ? fakeItem.x : undefined, compactV ? fakeItem.y : undefined, isUserAction, preventCollision, compactType, cols);
      }
    }
  
    return moveElement(layout, itemToMove, compactH ? itemToMove.x + 1 : undefined, compactV ? itemToMove.y + 1 : undefined, isUserAction, preventCollision, compactType, cols);
  }
  /**
   * Helper to convert a number to a percentage string.
   *
   * @param  {Number} num Any number
   * @return {String}     That number as a percentage.
   */
  
  
  function perc(num
  /*: number*/
  )
  /*: string*/
  {
    return num * 100 + "%";
  }
  
  function setTransform(_ref)
  /*: Object*/
  {
    var top = _ref.top,
        left = _ref.left,
        width = _ref.width,
        height = _ref.height;
    // Replace unitless items with px
    var translate = "translate(".concat(left, "px,").concat(top, "px)");
    return {
      transform: translate,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      position: "absolute"
    };
  }
  
  function setTopLeft(_ref2)
  /*: Object*/
  {
    var top = _ref2.top,
        left = _ref2.left,
        width = _ref2.width,
        height = _ref2.height;
    return {
      top: "".concat(top, "px"),
      left: "".concat(left, "px"),
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      position: "absolute"
    };
  }
  /**
   * Get layout items sorted from top left to right and down.
   *
   * @return {Array} Array of layout objects.
   * @return {Array}        Layout, sorted static items first.
   */
  
  
  function sortLayoutItems(layout
  /*: Layout*/
  , compactType
  /*: CompactType*/
  )
  /*: Layout*/
  {
    if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);else return sortLayoutItemsByRowCol(layout);
  }
  /**
   * Sort layout items by row ascending and column ascending.
   *
   * Does not modify Layout.
   */
  
  
  function sortLayoutItemsByRowCol(layout
  /*: Layout*/
  )
  /*: Layout*/
  {
    // Slice to clone array as sort modifies
    return layout.slice(0).sort(function (a, b) {
      if (a.y > b.y || a.y === b.y && a.x > b.x) {
        return 1;
      } else if (a.y === b.y && a.x === b.x) {
        // Without this, we can get different sort results in IE vs. Chrome/FF
        return 0;
      }
  
      return -1;
    });
  }
  /**
   * Sort layout items by column ascending then row ascending.
   *
   * Does not modify Layout.
   */
  
  
  function sortLayoutItemsByColRow(layout
  /*: Layout*/
  )
  /*: Layout*/
  {
    return layout.slice(0).sort(function (a, b) {
      if (a.x > b.x || a.x === b.x && a.y > b.y) {
        return 1;
      }
  
      return -1;
    });
  }
  /**
   * Generate a layout using the initialLayout and children as a template.
   * Missing entries will be added, extraneous ones will be truncated.
   *
   * Does not modify initialLayout.
   *
   * @param  {Array}  initialLayout Layout passed in through props.
   * @param  {String} breakpoint    Current responsive breakpoint.
   * @param  {?String} compact      Compaction option.
   * @return {Array}                Working layout.
   */
  
  
  function synchronizeLayoutWithChildren(initialLayout
  /*: Layout*/
  , children
  /*: ReactChildren*/
  , cols
  /*: number*/
  , compactType
  /*: CompactType*/
  )
  /*: Layout*/
  {
    initialLayout = initialLayout || []; // Generate one layout item per child.
  
    var layout
    /*: LayoutItem[]*/
    = [];
  
    _react.default.Children.forEach(children, function (child
    /*: ReactElement<any>*/
    , i
    /*: number*/
    ) {
      // Don't overwrite if it already exists.
      var exists = getLayoutItem(initialLayout, String(child.key));
  
      if (exists) {
        layout[i] = cloneLayoutItem(exists);
      } else {
        if (!isProduction && child.props._grid) {
          console.warn("`_grid` properties on children have been deprecated as of React 15.2. " + // eslint-disable-line
          "Please use `data-grid` or add your properties directly to the `layout`.");
        }
  
        var g = child.props["data-grid"] || child.props._grid; // Hey, this item has a data-grid property, use it.
  
        if (g) {
          if (!isProduction) {
            validateLayout([g], "ReactGridLayout.children");
          }
  
          layout[i] = cloneLayoutItem(_objectSpread({}, g, {
            i: child.key
          }));
        } else {
          // Nothing provided: ensure this is added to the bottom
          layout[i] = cloneLayoutItem({
            w: 1,
            h: 1,
            x: 0,
            y: bottom(layout),
            i: String(child.key)
          });
        }
      }
    }); // Correct the layout.
  
  
    var correctedLayout = correctBounds(layout, {
      cols: cols
    });
    return compact(correctedLayout, compactType, cols);
  }
  /**
   * Validate a layout. Throws errors.
   *
   * @param  {Array}  layout        Array of layout items.
   * @param  {String} [contextName] Context name for errors.
   * @throw  {Error}                Validation error.
   */
  
  
  function validateLayout(layout
  /*: Layout*/
  )
  /*: void*/
  {
    var contextName
    /*: string*/
    = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Layout";
    var subProps = ["x", "y", "w", "h"];
    if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");
  
    for (var i = 0, len = layout.length; i < len; i++) {
      var item = layout[i];
  
      for (var j = 0; j < subProps.length; j++) {
        if (typeof item[subProps[j]] !== "number") {
          throw new Error("ReactGridLayout: " + contextName + "[" + i + "]." + subProps[j] + " must be a number!");
        }
      }
  
      if (item.i && typeof item.i !== "string") {
        throw new Error("ReactGridLayout: " + contextName + "[" + i + "].i must be a string!");
      }
  
      if (item.static !== undefined && typeof item.static !== "boolean") {
        throw new Error("ReactGridLayout: " + contextName + "[" + i + "].static must be a boolean!");
      }
    }
  } // Legacy support for verticalCompact: false
  
  
  function compactType(props
  /*: ?{ verticalCompact: boolean, compactType: CompactType }*/
  )
  /*: CompactType*/
  {
    var _ref3 = props || {},
        verticalCompact = _ref3.verticalCompact,
        compactType = _ref3.compactType;
  
    return verticalCompact === false ? null : compactType;
  } // Flow can't really figure this out, so we just use Object
  
  
  function autoBindHandlers(el
  /*: Object*/
  , fns
  /*: Array<string>*/
  )
  /*: void*/
  {
    fns.forEach(function (key) {
      return el[key] = el[key].bind(el);
    });
  }
  
  function log() {
    var _console;
  
    if (!DEBUG) return; // eslint-disable-next-line no-console
  
    (_console = console).log.apply(_console, arguments);
  }
  
  var noop = function noop() {};
  
  exports.noop = noop;
  
  /***/ }),
  
  /***/ "./node_modules/react-grid-layout/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/react-grid-layout/index.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__(/*! ./build/ReactGridLayout */ "./node_modules/react-grid-layout/build/ReactGridLayout.js").default;
  module.exports.utils = __webpack_require__(/*! ./build/utils */ "./node_modules/react-grid-layout/build/utils.js");
  module.exports.Responsive = __webpack_require__(/*! ./build/ResponsiveReactGridLayout */ "./node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js").default;
  module.exports.Responsive.utils = __webpack_require__(/*! ./build/responsiveUtils */ "./node_modules/react-grid-layout/build/responsiveUtils.js");
  module.exports.WidthProvider = __webpack_require__(/*! ./build/components/WidthProvider */ "./node_modules/react-grid-layout/build/components/WidthProvider.js").default;
  
  
  /***/ }),
  
  /***/ "./node_modules/react-is/cjs/react-is.development.js":
  /*!***********************************************************!*\
    !*** ./node_modules/react-is/cjs/react-is.development.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  
  
  if (true) {
    (function() {
  'use strict';
  
  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?
  
  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
  
  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }
  
  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;
  
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;
  
          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;
  
            default:
              var $$typeofType = type && type.$$typeof;
  
              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;
  
                default:
                  return $$typeof;
              }
  
          }
  
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }
  
    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode
  
  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
  
  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
  
        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }
  
    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }
  
  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/react-is/index.js":
  /*!****************************************!*\
    !*** ./node_modules/react-is/index.js ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  if (false) {} else {
    module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
  }
  
  
  /***/ }),
  
  /***/ "./node_modules/react-resizable/build/Resizable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/react-resizable/build/Resizable.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  exports.__esModule = true;
  exports.default = void 0;
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
  
  var _reactDraggable = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/web/react-draggable.min.js");
  
  var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-resizable/build/utils.js");
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var Resizable =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Resizable, _React$Component);
  
    function Resizable() {
      var _this;
  
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
  
      _defineProperty(_assertThisInitialized(_this), "state", {
        slackW: 0,
        slackH: 0
      });
  
      return _this;
    }
  
    var _proto = Resizable.prototype;
  
    _proto.lockAspectRatio = function lockAspectRatio(width, height, aspectRatio) {
      height = width / aspectRatio;
      width = height * aspectRatio;
      return [width, height];
    } // If you do this, be careful of constraints
    ;
  
    _proto.runConstraints = function runConstraints(width, height) {
      var _ref = [this.props.minConstraints, this.props.maxConstraints],
          min = _ref[0],
          max = _ref[1];
      if (!min && !max) return [width, height]; // Fit width & height to aspect ratio
  
      if (this.props.lockAspectRatio) {
        if (height === this.props.height) {
          var ratio = this.props.width / this.props.height;
          height = width / ratio;
          width = height * ratio;
        } else {
          // Take into account vertical resize with N/S handles on locked aspect
          // ratio. Calculate the change height-first, instead of width-first
          var _ratio = this.props.height / this.props.width;
  
          width = height / _ratio;
          height = width * _ratio;
        }
      }
  
      var oldW = width,
          oldH = height; // Add slack to the values used to calculate bound position. This will ensure that if
      // we start removing slack, the element won't react to it right away until it's been
      // completely removed.
  
      var _this$state = this.state,
          slackW = _this$state.slackW,
          slackH = _this$state.slackH;
      width += slackW;
      height += slackH;
  
      if (min) {
        width = Math.max(min[0], width);
        height = Math.max(min[1], height);
      }
  
      if (max) {
        width = Math.min(max[0], width);
        height = Math.min(max[1], height);
      } // If the numbers changed, we must have introduced some slack. Record it for the next iteration.
  
  
      slackW += oldW - width;
      slackH += oldH - height;
  
      if (slackW !== this.state.slackW || slackH !== this.state.slackH) {
        this.setState({
          slackW: slackW,
          slackH: slackH
        });
      }
  
      return [width, height];
    }
    /**
     * Wrapper around drag events to provide more useful data.
     *
     * @param  {String} handlerName Handler name to wrap.
     * @return {Function}           Handler function.
     */
    ;
  
    _proto.resizeHandler = function resizeHandler(handlerName, axis) {
      var _this2 = this;
  
      return function (e, _ref2) {
        var node = _ref2.node,
            deltaX = _ref2.deltaX,
            deltaY = _ref2.deltaY;
        deltaX /= _this2.props.transformScale;
        deltaY /= _this2.props.transformScale; // Axis restrictions
  
        var canDragX = (_this2.props.axis === 'both' || _this2.props.axis === 'x') && ['n', 's'].indexOf(axis) === -1;
        var canDragY = (_this2.props.axis === 'both' || _this2.props.axis === 'y') && ['e', 'w'].indexOf(axis) === -1; // reverse delta if using top or left drag handles
  
        if (canDragX && axis[axis.length - 1] === 'w') {
          deltaX = -deltaX;
        }
  
        if (canDragY && axis[0] === 'n') {
          deltaY = -deltaY;
        } // Update w/h
  
  
        var width = _this2.props.width + (canDragX ? deltaX : 0);
        var height = _this2.props.height + (canDragY ? deltaY : 0); // Early return if no change
  
        var widthChanged = width !== _this2.props.width,
            heightChanged = height !== _this2.props.height;
        if (handlerName === 'onResize' && !widthChanged && !heightChanged) return;
  
        var _this2$runConstraints = _this2.runConstraints(width, height);
  
        width = _this2$runConstraints[0];
        height = _this2$runConstraints[1];
        // Set the appropriate state for this handler.
        var newState = {};
  
        if (handlerName === 'onResizeStart') {// nothing
        } else if (handlerName === 'onResizeStop') {
          newState.slackW = newState.slackH = 0;
        } else {
          // Early return if no change after constraints
          if (width === _this2.props.width && height === _this2.props.height) return;
        }
  
        var hasCb = typeof _this2.props[handlerName] === 'function';
  
        if (hasCb) {
          // $FlowIgnore isn't refining this correctly to SyntheticEvent
          if (typeof e.persist === 'function') e.persist();
  
          _this2.setState(newState, function () {
            return _this2.props[handlerName](e, {
              node: node,
              size: {
                width: width,
                height: height
              },
              handle: axis
            });
          });
        } else {
          _this2.setState(newState);
        }
      };
    };
  
    _proto.renderResizeHandle = function renderResizeHandle(resizeHandle) {
      var handle = this.props.handle;
  
      if (handle) {
        if (typeof handle === 'function') {
          return handle(resizeHandle);
        }
  
        return handle;
      }
  
      return _react.default.createElement("span", {
        className: "react-resizable-handle react-resizable-handle-" + resizeHandle
      });
    };
  
    _proto.render = function render() {
      var _this3 = this;
  
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          children = _this$props.children,
          draggableOpts = _this$props.draggableOpts,
          width = _this$props.width,
          height = _this$props.height,
          handleSize = _this$props.handleSize,
          lockAspectRatio = _this$props.lockAspectRatio,
          axis = _this$props.axis,
          minConstraints = _this$props.minConstraints,
          maxConstraints = _this$props.maxConstraints,
          onResize = _this$props.onResize,
          onResizeStop = _this$props.onResizeStop,
          onResizeStart = _this$props.onResizeStart,
          resizeHandles = _this$props.resizeHandles,
          transformScale = _this$props.transformScale,
          p = _objectWithoutPropertiesLoose(_this$props, ["children", "draggableOpts", "width", "height", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"]);
  
      var className = p.className ? p.className + " react-resizable" : 'react-resizable'; // What we're doing here is getting the child of this element, and cloning it with this element's props.
      // We are then defining its children as:
      // Its original children (resizable's child's children), and
      // One or more draggable handles.
  
      return (0, _utils.cloneElement)(children, _objectSpread({}, p, {
        className: className,
        children: [children.props.children, resizeHandles.map(function (h) {
          return _react.default.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
            key: "resizableHandle-" + h,
            onStop: _this3.resizeHandler('onResizeStop', h),
            onStart: _this3.resizeHandler('onResizeStart', h),
            onDrag: _this3.resizeHandler('onResize', h)
          }), _this3.renderResizeHandle(h));
        })]
      }));
    };
  
    return Resizable;
  }(_react.default.Component);
  
  exports.default = Resizable;
  
  _defineProperty(Resizable, "propTypes", {
    //
    // Required Props
    //
    // Require that one and only one child be present.
    children: _propTypes.default.element.isRequired,
    // Initial w/h
    width: _propTypes.default.number.isRequired,
    height: _propTypes.default.number.isRequired,
    //
    // Optional props
    //
    // Custom resize handle
    handle: _propTypes.default.element,
    // If you change this, be sure to update your css
    handleSize: _propTypes.default.array,
    // Defines which resize handles should be rendered (default: 'se')
    // Allows for any combination of:
    // 's' - South handle (bottom-center)
    // 'w' - West handle (left-center)
    // 'e' - East handle (right-center)
    // 'n' - North handle (top-center)
    // 'sw' - Southwest handle (bottom-left)
    // 'nw' - Northwest handle (top-left)
    // 'se' - Southeast handle (bottom-right)
    // 'ne' - Northeast handle (top-center)
    resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),
    transformScale: _propTypes.default.number,
    // If true, will only allow width/height to move in lockstep
    lockAspectRatio: _propTypes.default.bool,
    // Restricts resizing to a particular axis (default: 'both')
    // 'both' - allows resizing by width or height
    // 'x' - only allows the width to be changed
    // 'y' - only allows the height to be changed
    // 'none' - disables resizing altogether
    axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
    // Min/max size
    minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
    maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
    // Callbacks
    onResizeStop: _propTypes.default.func,
    onResizeStart: _propTypes.default.func,
    onResize: _propTypes.default.func,
    // These will be passed wholesale to react-draggable's DraggableCore
    draggableOpts: _propTypes.default.object
  });
  
  _defineProperty(Resizable, "defaultProps", {
    handleSize: [20, 20],
    lockAspectRatio: false,
    axis: 'both',
    minConstraints: [20, 20],
    maxConstraints: [Infinity, Infinity],
    resizeHandles: ['se'],
    transformScale: 1
  });
  
  /***/ }),
  
  /***/ "./node_modules/react-resizable/build/ResizableBox.js":
  /*!************************************************************!*\
    !*** ./node_modules/react-resizable/build/ResizableBox.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  exports.__esModule = true;
  exports.default = void 0;
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
  
  var _Resizable = _interopRequireDefault(__webpack_require__(/*! ./Resizable */ "./node_modules/react-resizable/build/Resizable.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  // An example use of Resizable.
  var ResizableBox =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ResizableBox, _React$Component);
  
    function ResizableBox() {
      var _this;
  
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
  
      _defineProperty(_assertThisInitialized(_this), "state", {
        width: _this.props.width,
        height: _this.props.height,
        propsWidth: _this.props.width,
        propsHeight: _this.props.height
      });
  
      _defineProperty(_assertThisInitialized(_this), "onResize", function (e, data) {
        var size = data.size;
        var width = size.width,
            height = size.height;
  
        if (_this.props.onResize) {
          e.persist && e.persist();
  
          _this.setState(size, function () {
            return _this.props.onResize && _this.props.onResize(e, data);
          });
        } else {
          _this.setState(size);
        }
      });
  
      return _this;
    }
  
    ResizableBox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      // If parent changes height/width, set that in our state.
      if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
        return {
          width: props.width,
          height: props.height,
          propsWidth: props.width,
          propsHeight: props.height
        };
      }
  
      return null;
    };
  
    var _proto = ResizableBox.prototype;
  
    _proto.render = function render() {
      // Basic wrapper around a Resizable instance.
      // If you use Resizable directly, you are responsible for updating the child component
      // with a new width and height.
      var _this$props = this.props,
          handle = _this$props.handle,
          handleSize = _this$props.handleSize,
          onResize = _this$props.onResize,
          onResizeStart = _this$props.onResizeStart,
          onResizeStop = _this$props.onResizeStop,
          draggableOpts = _this$props.draggableOpts,
          minConstraints = _this$props.minConstraints,
          maxConstraints = _this$props.maxConstraints,
          lockAspectRatio = _this$props.lockAspectRatio,
          axis = _this$props.axis,
          width = _this$props.width,
          height = _this$props.height,
          resizeHandles = _this$props.resizeHandles,
          props = _objectWithoutPropertiesLoose(_this$props, ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles"]);
  
      return _react.default.createElement(_Resizable.default, {
        handle: handle,
        handleSize: handleSize,
        width: this.state.width,
        height: this.state.height,
        onResizeStart: onResizeStart,
        onResize: this.onResize,
        onResizeStop: onResizeStop,
        draggableOpts: draggableOpts,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        lockAspectRatio: lockAspectRatio,
        axis: axis,
        resizeHandles: resizeHandles
      }, _react.default.createElement("div", _extends({
        style: {
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }
      }, props)));
    };
  
    return ResizableBox;
  }(_react.default.Component);
  
  exports.default = ResizableBox;
  
  _defineProperty(ResizableBox, "propTypes", {
    height: _propTypes.default.number,
    width: _propTypes.default.number
  });
  
  _defineProperty(ResizableBox, "defaultProps", {
    handleSize: [20, 20]
  });
  
  /***/ }),
  
  /***/ "./node_modules/react-resizable/build/utils.js":
  /*!*****************************************************!*\
    !*** ./node_modules/react-resizable/build/utils.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  exports.__esModule = true;
  exports.cloneElement = cloneElement;
  
  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  // React.addons.cloneWithProps look-alike that merges style & className.
  function cloneElement(element, props) {
    if (props.style && element.props.style) {
      props.style = _objectSpread({}, element.props.style, {}, props.style);
    }
  
    if (props.className && element.props.className) {
      props.className = element.props.className + " " + props.className;
    }
  
    return _react.default.cloneElement(element, props);
  }
  
  /***/ }),
  
  /***/ "./node_modules/react-resizable/index.js":
  /*!***********************************************!*\
    !*** ./node_modules/react-resizable/index.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  module.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  };
  
  module.exports.Resizable = __webpack_require__(/*! ./build/Resizable */ "./node_modules/react-resizable/build/Resizable.js").default;
  module.exports.ResizableBox = __webpack_require__(/*! ./build/ResizableBox */ "./node_modules/react-resizable/build/ResizableBox.js").default;
  
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
  /*!******************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
  /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
  /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
  /* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
  /* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
  /* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
  
  
  
  
  
  
  
  
  
  
  var _addClass = function addClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
    });
  };
  
  var removeClass = function removeClass(node, classes) {
    return node && classes && classes.split(' ').forEach(function (c) {
      return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
    });
  };
  /**
   * A transition component inspired by the excellent
   * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
   * use it if you're using CSS transitions or animations. It's built upon the
   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
   * component, so it inherits all of its props.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` states of the transition. The first class is applied and then a
   * second `*-active` class in order to activate the CSS transition. After the
   * transition, matching `*-done` class names are applied to persist the
   * transition state.
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
   *         <div>
   *           {"I'll receive my-node-* classes"}
   *         </div>
   *       </CSSTransition>
   *       <button type="button" onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the `in` prop is set to `true`, the child component will first receive
   * the class `example-enter`, then the `example-enter-active` will be added in
   * the next tick. `CSSTransition` [forces a
   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * between before adding the `example-enter-active`. This is an important trick
   * because it allows us to transition between `example-enter` and
   * `example-enter-active` even though they were added immediately one after
   * another. Most notably, this is what makes it possible for us to animate
   * _appearance_.
   *
   * ```css
   * .my-node-enter {
   *   opacity: 0;
   * }
   * .my-node-enter-active {
   *   opacity: 1;
   *   transition: opacity 200ms;
   * }
   * .my-node-exit {
   *   opacity: 1;
   * }
   * .my-node-exit-active {
   *   opacity: 0;
   *   transition: opacity 200ms;
   * }
   * ```
   *
   * `*-active` classes represent which styles you want to animate **to**, so it's
   * important to add `transition` declaration only to them, otherwise transitions
   * might not behave as intended! This might not be obvious when the transitions
   * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
   * the example above (minus `transition`), but it becomes apparent in more
   * complex transitions.
   *
   * **Note**: If you're using the
   * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
   * prop, make sure to define styles for `.appear-*` classes as well.
   */
  
  
  var CSSTransition = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);
  
    function CSSTransition() {
      var _this;
  
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };
  
      _this.onEnter = function (maybeNode, maybeAppearing) {
        var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
            node = _this$resolveArgument[0],
            appearing = _this$resolveArgument[1];
  
        _this.removeClasses(node, 'exit');
  
        _this.addClass(node, appearing ? 'appear' : 'enter', 'base');
  
        if (_this.props.onEnter) {
          _this.props.onEnter(maybeNode, maybeAppearing);
        }
      };
  
      _this.onEntering = function (maybeNode, maybeAppearing) {
        var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
            node = _this$resolveArgument2[0],
            appearing = _this$resolveArgument2[1];
  
        var type = appearing ? 'appear' : 'enter';
  
        _this.addClass(node, type, 'active');
  
        if (_this.props.onEntering) {
          _this.props.onEntering(maybeNode, maybeAppearing);
        }
      };
  
      _this.onEntered = function (maybeNode, maybeAppearing) {
        var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
            node = _this$resolveArgument3[0],
            appearing = _this$resolveArgument3[1];
  
        var type = appearing ? 'appear' : 'enter';
  
        _this.removeClasses(node, type);
  
        _this.addClass(node, type, 'done');
  
        if (_this.props.onEntered) {
          _this.props.onEntered(maybeNode, maybeAppearing);
        }
      };
  
      _this.onExit = function (maybeNode) {
        var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
            node = _this$resolveArgument4[0];
  
        _this.removeClasses(node, 'appear');
  
        _this.removeClasses(node, 'enter');
  
        _this.addClass(node, 'exit', 'base');
  
        if (_this.props.onExit) {
          _this.props.onExit(maybeNode);
        }
      };
  
      _this.onExiting = function (maybeNode) {
        var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
            node = _this$resolveArgument5[0];
  
        _this.addClass(node, 'exit', 'active');
  
        if (_this.props.onExiting) {
          _this.props.onExiting(maybeNode);
        }
      };
  
      _this.onExited = function (maybeNode) {
        var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
            node = _this$resolveArgument6[0];
  
        _this.removeClasses(node, 'exit');
  
        _this.addClass(node, 'exit', 'done');
  
        if (_this.props.onExited) {
          _this.props.onExited(maybeNode);
        }
      };
  
      _this.resolveArguments = function (maybeNode, maybeAppearing) {
        return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
        : [maybeNode, maybeAppearing];
      };
  
      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var isStringClassNames = typeof classNames === 'string';
        var prefix = isStringClassNames && classNames ? classNames + "-" : '';
        var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
        var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
        var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
        return {
          baseClassName: baseClassName,
          activeClassName: activeClassName,
          doneClassName: doneClassName
        };
      };
  
      return _this;
    }
  
    var _proto = CSSTransition.prototype;
  
    _proto.addClass = function addClass(node, type, phase) {
      var className = this.getClassNames(type)[phase + "ClassName"];
  
      var _this$getClassNames = this.getClassNames('enter'),
          doneClassName = _this$getClassNames.doneClassName;
  
      if (type === 'appear' && phase === 'done' && doneClassName) {
        className += " " + doneClassName;
      } // This is for to force a repaint,
      // which is necessary in order to transition styles when adding a class name.
  
  
      if (phase === 'active') {
        /* eslint-disable no-unused-expressions */
        node && node.scrollTop;
      }
  
      if (className) {
        this.appliedClasses[type][phase] = className;
  
        _addClass(node, className);
      }
    };
  
    _proto.removeClasses = function removeClasses(node, type) {
      var _this$appliedClasses$ = this.appliedClasses[type],
          baseClassName = _this$appliedClasses$.base,
          activeClassName = _this$appliedClasses$.active,
          doneClassName = _this$appliedClasses$.done;
      this.appliedClasses[type] = {};
  
      if (baseClassName) {
        removeClass(node, baseClassName);
      }
  
      if (activeClassName) {
        removeClass(node, activeClassName);
      }
  
      if (doneClassName) {
        removeClass(node, doneClassName);
      }
    };
  
    _proto.render = function render() {
      var _this$props = this.props,
          _ = _this$props.classNames,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);
  
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };
  
    return CSSTransition;
  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
  
  CSSTransition.defaultProps = {
    classNames: ''
  };
  CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
    /**
     * The animation classNames applied to the component as it appears, enters,
     * exits or has finished the transition. A single name can be provided, which
     * will be suffixed for each stage, e.g. `classNames="fade"` applies:
     *
     * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
     * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
     * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
     *
     * A few details to note about how these classes are applied:
     *
     * 1. They are _joined_ with the ones that are already defined on the child
     *    component, so if you want to add some base styles, you can use
     *    `className` without worrying that it will be overridden.
     *
     * 2. If the transition component mounts with `in={false}`, no classes are
     *    applied yet. You might be expecting `*-exit-done`, but if you think
     *    about it, a component cannot finish exiting if it hasn't entered yet.
     *
     * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
     *    allows you to define different behavior for when appearing is done and
     *    when regular entering is done, using selectors like
     *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
     *    an epic entrance animation when element first appears in the DOM using
     *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
     *    simply use `fade-enter-done` for defining both cases.
     *
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
     *  appearDone: 'my-done-appear',
     *  enter: 'my-enter',
     *  enterActive: 'my-active-enter',
     *  enterDone: 'my-done-enter',
     *  exit: 'my-exit',
     *  exitActive: 'my-active-exit',
     *  exitDone: 'my-done-exit',
     * }}
     * ```
     *
     * If you want to set these classes using CSS Modules:
     *
     * ```js
     * import styles from './styles.css';
     * ```
     *
     * you might want to use camelCase in your CSS file, that way could simply
     * spread them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
     *  appearDone?: string,
     *  enter?: string,
     *  enterActive?: string,
     *  enterDone?: string,
     *  exit?: string,
     *  exitActive?: string,
     *  exitDone?: string,
     * }}
     */
    classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],
  
    /**
     * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
     * applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  
    /**
     * A `<Transition>` callback fired immediately after the 'enter-active' or
     * 'appear-active' class is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  
    /**
     * A `<Transition>` callback fired immediately after the 'enter' or
     * 'appear' classes are **removed** and the `done` class is added to the DOM node.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  
    /**
     * A `<Transition>` callback fired immediately after the 'exit' class is
     * applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement)
     */
    onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  
    /**
     * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement)
     */
    onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  
    /**
     * A `<Transition>` callback fired immediately after the 'exit' classes
     * are **removed** and the `exit-done` class is added to the DOM node.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement)
     */
    onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
  }) : undefined;
  /* harmony default export */ __webpack_exports__["default"] = (CSSTransition);
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
  /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
  /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
  
  
  
  
  
  
  /**
   * The `<ReplaceTransition>` component is a specialized `Transition` component
   * that animates between two children.
   *
   * ```jsx
   * <ReplaceTransition in>
   *   <Fade><div>I appear first</div></Fade>
   *   <Fade><div>I replace the above</div></Fade>
   * </ReplaceTransition>
   * ```
   */
  
  var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);
  
    function ReplaceTransition() {
      var _this;
  
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
  
      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
  
      _this.handleEnter = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
  
        return _this.handleLifecycle('onEnter', 0, args);
      };
  
      _this.handleEntering = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
  
        return _this.handleLifecycle('onEntering', 0, args);
      };
  
      _this.handleEntered = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
  
        return _this.handleLifecycle('onEntered', 0, args);
      };
  
      _this.handleExit = function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
  
        return _this.handleLifecycle('onExit', 1, args);
      };
  
      _this.handleExiting = function () {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
  
        return _this.handleLifecycle('onExiting', 1, args);
      };
  
      _this.handleExited = function () {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
  
        return _this.handleLifecycle('onExited', 1, args);
      };
  
      return _this;
    }
  
    var _proto = ReplaceTransition.prototype;
  
    _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
      var _child$props;
  
      var children = this.props.children;
      var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
      if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
  
      if (this.props[handler]) {
        var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
        this.props[handler](maybeNode);
      }
    };
  
    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);
  
      var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
          first = _React$Children$toArr[0],
          second = _React$Children$toArr[1];
  
      delete props.onEnter;
      delete props.onEntering;
      delete props.onEntered;
      delete props.onExit;
      delete props.onExiting;
      delete props.onExited;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
        key: 'first',
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onEntered: this.handleEntered
      }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
        key: 'second',
        onEnter: this.handleExit,
        onEntering: this.handleExiting,
        onEntered: this.handleExited
      }));
    };
  
    return ReplaceTransition;
  }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);
  
  ReplaceTransition.propTypes =  true ? {
    in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
    children: function children(props, propName) {
      if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
      return null;
    }
  } : undefined;
  /* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
    \*********************************************************************/
  /*! exports provided: modes, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
  /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
  /* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
  
  
  var _leaveRenders, _enterRenders;
  
  
  
  
  
  
  function areChildrenDifferent(oldChildren, newChildren) {
    if (oldChildren === newChildren) return false;
  
    if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
      return false;
    }
  
    return true;
  }
  /**
   * Enum of modes for SwitchTransition component
   * @enum { string }
   */
  
  
  var modes = {
    out: 'out-in',
    in: 'in-out'
  };
  
  var callHook = function callHook(element, name, cb) {
    return function () {
      var _element$props;
  
      element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
      cb();
    };
  };
  
  var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
    var current = _ref.current,
        changeState = _ref.changeState;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
      in: false,
      onExited: callHook(current, 'onExited', function () {
        changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
      })
    });
  }, _leaveRenders[modes.in] = function (_ref2) {
    var current = _ref2.current,
        changeState = _ref2.changeState,
        children = _ref2.children;
    return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
      in: true,
      onEntered: callHook(children, 'onEntered', function () {
        changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
      })
    })];
  }, _leaveRenders);
  var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
    var children = _ref3.children,
        changeState = _ref3.changeState;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
      in: true,
      onEntered: callHook(children, 'onEntered', function () {
        changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
          in: true
        }));
      })
    });
  }, _enterRenders[modes.in] = function (_ref4) {
    var current = _ref4.current,
        children = _ref4.children,
        changeState = _ref4.changeState;
    return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
      in: false,
      onExited: callHook(current, 'onExited', function () {
        changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
          in: true
        }));
      })
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
      in: true
    })];
  }, _enterRenders);
  /**
   * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
   * You can use it when you want to control the render between state transitions.
   * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
   *
   * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
   * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
   *
   * **Note**: If you want the animation to happen simultaneously
   * (that is, to have the old child removed and a new child inserted **at the same time**),
   * you should use
   * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
   * instead.
   *
   * ```jsx
   * function App() {
   *  const [state, setState] = useState(false);
   *  return (
   *    <SwitchTransition>
   *      <CSSTransition
   *        key={state ? "Goodbye, world!" : "Hello, world!"}
   *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
   *        classNames='fade'
   *      >
   *        <button onClick={() => setState(state => !state)}>
   *          {state ? "Goodbye, world!" : "Hello, world!"}
   *        </button>
   *      </CSSTransition>
   *    </SwitchTransition>
   *  );
   * }
   * ```
   *
   * ```css
   * .fade-enter{
   *    opacity: 0;
   * }
   * .fade-exit{
   *    opacity: 1;
   * }
   * .fade-enter-active{
   *    opacity: 1;
   * }
   * .fade-exit-active{
   *    opacity: 0;
   * }
   * .fade-enter-active,
   * .fade-exit-active{
   *    transition: opacity 500ms;
   * }
   * ```
   */
  
  var SwitchTransition = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);
  
    function SwitchTransition() {
      var _this;
  
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.state = {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
        current: null
      };
      _this.appeared = false;
  
      _this.changeState = function (status, current) {
        if (current === void 0) {
          current = _this.state.current;
        }
  
        _this.setState({
          status: status,
          current: current
        });
      };
  
      return _this;
    }
  
    var _proto = SwitchTransition.prototype;
  
    _proto.componentDidMount = function componentDidMount() {
      this.appeared = true;
    };
  
    SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if (props.children == null) {
        return {
          current: null
        };
      }
  
      if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
        return {
          status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
        };
      }
  
      if (state.current && areChildrenDifferent(state.current, props.children)) {
        return {
          status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
        };
      }
  
      return {
        current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
          in: true
        })
      };
    };
  
    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          mode = _this$props.mode,
          _this$state = this.state,
          status = _this$state.status,
          current = _this$state.current;
      var data = {
        children: children,
        current: current,
        changeState: this.changeState,
        status: status
      };
      var component;
  
      switch (status) {
        case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
          component = enterRenders[mode](data);
          break;
  
        case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
          component = leaveRenders[mode](data);
          break;
  
        case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
          component = current;
      }
  
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
        value: {
          isMounting: !this.appeared
        }
      }, component);
    };
  
    return SwitchTransition;
  }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
  
  SwitchTransition.propTypes =  true ? {
    /**
     * Transition modes.
     * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
     * `in-out`: New element transitions in first, then when complete, the current element transitions out.
     *
     * @type {'out-in'|'in-out'}
     */
    mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),
  
    /**
     * Any `Transition` or `CSSTransition` component.
     */
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
  } : undefined;
  SwitchTransition.defaultProps = {
    mode: modes.out
  };
  /* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/Transition.js":
  /*!***************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/Transition.js ***!
    \***************************************************************/
  /*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
  /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
  /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
  /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
  /* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
  /* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
  
  
  
  
  
  
  
  
  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */
  
  var Transition = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);
  
    function Transition(props, context) {
      var _this;
  
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
  
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;
  
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
  
      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }
  
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
  
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
  
      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;
  
    var _proto = Transition.prototype;
  
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
  
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
  
      if (prevProps !== this.props) {
        var status = this.state.status;
  
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
  
      this.updateStatus(false, nextStatus);
    };
  
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
  
    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;
  
      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major
  
        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }
  
      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };
  
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
  
      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
  
        if (nextStatus === ENTERING) {
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
  
    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;
  
      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
  
      var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1];
  
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set
  
      if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }
  
      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);
  
        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };
  
    _proto.performExit = function performExit() {
      var _this3 = this;
  
      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED
  
      if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }
  
      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);
  
        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };
  
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
  
    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
  
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
  
      var active = true;
  
      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
  
      this.nextCallback.cancel = function () {
        active = false;
      };
  
      return this.nextCallback;
    };
  
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
  
      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
  
      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];
  
        this.props.addEndListener(maybeNode, maybeNextCallback);
      }
  
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };
  
    _proto.render = function render() {
      var status = this.state.status;
  
      if (status === UNMOUNTED) {
        return null;
      }
  
      var _this$props = this.props,
          children = _this$props.children,
          _in = _this$props.in,
          _mountOnEnter = _this$props.mountOnEnter,
          _unmountOnExit = _this$props.unmountOnExit,
          _appear = _this$props.appear,
          _enter = _this$props.enter,
          _exit = _this$props.exit,
          _timeout = _this$props.timeout,
          _addEndListener = _this$props.addEndListener,
          _onEnter = _this$props.onEnter,
          _onEntering = _this$props.onEntering,
          _onEntered = _this$props.onEntered,
          _onExit = _this$props.onExit,
          _onExiting = _this$props.onExiting,
          _onExited = _this$props.onExited,
          _nodeRef = _this$props.nodeRef,
          childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
  
      return (
        /*#__PURE__*/
        // allows for nested Transitions
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
      );
    };
  
    return Transition;
  }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);
  
  Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
  Transition.propTypes =  true ? {
    /**
     * A React reference to DOM element that need to transition:
     * https://stackoverflow.com/a/51127130/4671932
     *
     *   - When `nodeRef` prop is used, `node` is not passed to callback functions
     *      (e.g. `onEnter`) because user already has direct access to the node.
     *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
     *     `nodeRef` need to be provided to `Transition` with changed `key` prop
     *     (see
     *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
     */
    nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
    }),
  
    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,
  
    /**
     * Show the component; triggers the enter or exit states
     */
    in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  
    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  
    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  
    /**
     * By default the child component does not perform the enter transition when
     * it first mounts, regardless of the value of `in`. If you want this
     * behavior, set both `appear` and `in` to `true`.
     *
     * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
     * > only adds an additional enter transition. However, in the
     * > `<CSSTransition>` component that first enter transition does result in
     * > additional `.appear-*` classes, that way you can choose to style it
     * > differently.
     */
    appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  
    /**
     * Enable or disable enter transitions.
     */
    enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  
    /**
     * Enable or disable exit transitions.
     */
    exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  
    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
      if (!props.addEndListener) pt = pt.isRequired;
  
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      return pt.apply(void 0, [props].concat(args));
    },
  
    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. Timeouts are still used as a fallback if provided.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  
    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  
    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  
    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  
    /**
     * Callback fired before the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  
    /**
     * Callback fired after the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  
    /**
     * Callback fired after the "exited" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  } : undefined; // Name the function so it is clearer in the documentation
  
  function noop() {}
  
  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;
  /* harmony default export */ __webpack_exports__["default"] = (Transition);
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
  /*!********************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
    \********************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
  /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
  /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
  /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
  /* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");
  
  
  
  
  
  
  
  
  
  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };
  
  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */
  
  var TransitionGroup = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);
  
    function TransitionGroup(props, context) {
      var _this;
  
      _this = _React$Component.call(this, props, context) || this;
  
      var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear
  
  
      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }
  
    var _proto = TransitionGroup.prototype;
  
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
  
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
  
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
  
    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
      if (child.key in currentChildMapping) return;
  
      if (child.props.onExited) {
        child.props.onExited(node);
      }
  
      if (this.mounted) {
        this.setState(function (state) {
          var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);
  
          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };
  
    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);
  
      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;
  
      if (Component === null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
          value: contextValue
        }, children);
      }
  
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
    };
  
    return TransitionGroup;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
  
  TransitionGroup.propTypes =  true ? {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  
    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     *
     * While this component is meant for multiple `Transition` or `CSSTransition`
     * children, sometimes you may want to have a single transition child with
     * content that you want to be transitioned out and in when you change it
     * (e.g. routes, images etc.) In that case you can change the `key` prop of
     * the transition child as you change its content, this will cause
     * `TransitionGroup` to transition the child out and back in.
     */
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  
    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  
    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  
    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  
    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
  } : undefined;
  TransitionGroup.defaultProps = defaultProps;
  /* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
    \***************************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
  
  /* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/config.js":
  /*!***********************************************************!*\
    !*** ./node_modules/react-transition-group/esm/config.js ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = ({
    disabled: false
  });
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/react-transition-group/esm/index.js ***!
    \**********************************************************/
  /*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });
  
  /* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });
  
  /* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });
  
  /* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });
  
  /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
    \***********************************************************************/
  /*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
  
  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  
  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
    };
  
    var result = Object.create(null);
    if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
  
    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
  
  
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
  
    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
  
    var i;
    var childMapping = {};
  
    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
  
      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
  
  
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
  
    return childMapping;
  }
  
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
      var hasPrev = (key in prevChildMapping);
      var hasNext = (key in nextChildMapping);
      var prevChild = prevChildMapping[key];
      var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)
  
      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
          in: false
        });
      } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }
  
  /***/ }),
  
  /***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
  /*!********************************************************************!*\
    !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
    \********************************************************************/
  /*! exports provided: timeoutsShape, classNamesShape */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
  
  var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }).isRequired]) : undefined;
  var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })]) : undefined;
  
  /***/ }),
  
  /***/ "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  var g;
  
  // This works in non-strict mode
  g = (function() {
    return this;
  })();
  
  try {
    // This works if eval is allowed (see CSP)
    g = g || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") g = window;
  }
  
  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}
  
  module.exports = g;
  
  
  /***/ }),
  
  /***/ "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = function(module) {
    if (!module.webpackPolyfill) {
      module.deprecate = function() {};
      module.paths = [];
      // module.parent = undefined by default
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function() {
          return module.i;
        }
      });
      module.webpackPolyfill = 1;
    }
    return module;
  };
  
  
  /***/ }),
  
  /***/ "./src/components/DynamicForm/DynamicForm.tsx":
  /*!****************************************************!*\
    !*** ./src/components/DynamicForm/DynamicForm.tsx ***!
    \****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const FormField_1 = __webpack_require__(/*! ../Inputs/FormField */ "./src/components/Inputs/FormField.tsx");
  const Label_1 = __webpack_require__(/*! ../Inputs/Label */ "./src/components/Inputs/Label.tsx");
  const Input_1 = __webpack_require__(/*! ../Inputs/Input */ "./src/components/Inputs/Input.tsx");
  function DynamicForm(props) {
      // refs & state
      const myRefs = React.useRef([]);
      const [formData, setFormData] = React.useState({});
      const [isDataLoaded, setIsDataLoaded] = React.useState(false);
      // component did mount 
      // pass second argument as [] to run only once
      React.useEffect(() => {
          updateFormDataWithDefaults();
      }, []);
      React.useEffect(() => {
          if (!isDataLoaded) {
              setIsDataLoaded(true);
          }
      }, [formData]);
      // update state by defaults
      const updateFormDataWithDefaults = () => {
          let newData = {};
          props.formStructure.map((formField) => {
              let value = formField.value || "";
              Object.assign(newData, { [formField.name]: value });
          });
          setFormData(newData);
      };
      // submit event
      const handleSubmit = (e) => {
          e.preventDefault();
          props.onSubmit(formData);
      };
      const handleCancel = () => {
          if (typeof props.onCancel != "undefined") {
              props.onCancel();
          }
      };
      // change event
      const handleChange = (value, key) => {
          let newData = { [key]: value };
          let newFormData = Object.assign(Object.assign({}, formData), newData);
          setFormData(newFormData);
      };
      const getFormFieldDetails = (formField) => {
          let type = "text";
          if (formField.hasOwnProperty("type")) {
              switch (formField.type) {
                  case "number":
                      type = "number";
                      break;
                  case "boolean":
                      type = "checkbox";
                      break;
              }
          }
          let attr = formField.attr || {};
          return [type, attr];
      };
      const generateForm = () => {
          let formStructure = props.formStructure;
          let formFields = formStructure.map((formField) => {
              let key = formField.name;
              let [type, attr] = getFormFieldDetails(formField);
              return (React.createElement(React.Fragment, null,
                  React.createElement(FormField_1.default, { key: key },
                      React.createElement(Label_1.default, { for: key, key: "label-" + key }, formField.label),
                      React.createElement(Input_1.default, { key: "input-" + key, inputRef: (el) => (myRefs.current[key] = el), onChange: (changes) => handleChange(changes, key), value: formData[key], name: key, type: type, attr: attr }))));
          });
          return formFields;
      };
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: "form-container" },
              React.createElement("form", { onSubmit: handleSubmit },
                  isDataLoaded ? generateForm() : null,
                  React.createElement(FormField_1.default, { class: "buttons" },
                      React.createElement("button", { className: "btn btn-submit", type: "submit" }, "Submit"),
                      React.createElement("button", { className: "btn btn-cancel", type: "reset", onClick: handleCancel }, "Cancel"))))));
  }
  exports.default = DynamicForm;
  
  
  /***/ }),
  
  /***/ "./src/components/Inputs/FormField.tsx":
  /*!*********************************************!*\
    !*** ./src/components/Inputs/FormField.tsx ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const FormField = (props) => {
      let classes = "form-group";
      if (props.inline != undefined && props.inline)
          classes += " row";
      if (props.class != undefined)
          classes += " " + props.class;
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: classes }, props.children)));
  };
  exports.default = FormField;
  
  
  /***/ }),
  
  /***/ "./src/components/Inputs/Input.tsx":
  /*!*****************************************!*\
    !*** ./src/components/Inputs/Input.tsx ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Input = (props) => {
      // state 
      let [inputValue, setInputValue] = React.useState(props.value);
      // callback on change input value
      React.useEffect(() => {
          props.onChange(inputValue, props.inputRef);
      }, [inputValue]);
      const handleChange = (e) => {
          let value = e.target.value;
          setInputValue(value);
          if (value.length > 0) {
              e.target.classList.add('has-content');
          }
          else {
              e.target.classList.remove('has-content');
          }
      };
      // class
      let classes = "input-container ";
      if (props.class != undefined)
          classes += props.class;
      if (props.hasIndicator != undefined && props.hasIndicator)
          classes += " has-indicator";
      if (props.isValid != undefined) {
          props.isValid ? classes += " valid" : classes += " invalid";
      }
      // return
      return (React.createElement("div", { className: classes },
          React.createElement("input", Object.assign({ type: props.type, name: props.name, id: props.id, value: inputValue, className: "form-input", ref: props.inputRef, onChange: (e) => handleChange(e) }, props.attr)),
          props.hasIndicator != undefined && props.hasIndicator ?
              React.createElement("div", { className: "indicator" })
              : null));
  };
  exports.default = Input;
  
  
  /***/ }),
  
  /***/ "./src/components/Inputs/Label.tsx":
  /*!*****************************************!*\
    !*** ./src/components/Inputs/Label.tsx ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Label = (props) => {
      // for
      let htmlFor = "";
      if (props.for != undefined)
          htmlFor = props.for;
      //class
      let classes = "form-label ";
      if (props.class != undefined)
          classes += props.class;
      // return
      return (React.createElement("label", { htmlFor: htmlFor, className: classes }, props.children));
  };
  exports.default = Label;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Form/CheckboxField.tsx":
  /*!*************************************************************!*\
    !*** ./src/components/UXPComponents/Form/CheckboxField.tsx ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const CheckboxField = (props) => {
      function toggle() {
          props.onChange(!props.value);
      }
      function renderCheckbox() {
          return React.createElement("div", { className: `uxp-widget-checkboxfield-box ${!!props.value ? 'checked' : ''}`, onClick: () => toggle() });
      }
      function renderSwitch() {
          return React.createElement("div", { className: `uxp-widget-checkboxfield-switch ${!!props.value ? 'checked' : ''}`, onClick: () => toggle() });
      }
      function renderCheckField() {
          switch (props.type) {
              default:
              case 'checkbox':
                  return renderCheckbox();
              case 'switch':
                  return renderSwitch();
          }
      }
      return React.createElement("div", { className: `uxp-widget-checkboxfield-container ` },
          React.createElement("div", { className: 'uxp-widget-checkboxfield-label' }, props.label || ''),
          renderCheckField(),
          React.createElement("div", { className: 'uxp-widget-checkboxfield-footer' }, props.footer || ''));
  };
  exports.default = CheckboxField;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Form/TextField.tsx":
  /*!*********************************************************!*\
    !*** ./src/components/UXPComponents/Form/TextField.tsx ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const TextField = (props) => {
      return React.createElement("div", { className: `uxp-widget-textfield-container ${props.disabled ? 'disabled' : ''}` },
          React.createElement("input", { className: 'uxp-widget-textfield', type: 'text', placeholder: props.placeholder || '', value: props.value, onChange: (e) => props.onChange(e.target.value) }),
          React.createElement("div", { className: `uxp-widget-textfield-indicator ${!!props.showIndicator ? 'visible' : ''}`, style: { backgroundColor: props.indicatorColor || 'rgba(0,0,0,0.5)' } }));
  };
  exports.default = TextField;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Portal/FilterPanel.tsx":
  /*!*************************************************************!*\
    !*** ./src/components/UXPComponents/Portal/FilterPanel.tsx ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const react_transition_group_1 = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
  function FilterPanel(props) {
      // states
      let [showPanel, setShowPanel] = React.useState(false);
      let [coords, setCoords] = React.useState({});
      let filterPanelRef = React.useRef(null);
      let filterButtonRef = React.useRef(null);
      // update coordinates of filter panel
      const updateTooltipCoords = (button) => {
          const buttonDetails = button.getBoundingClientRect();
          let _coords = {
              top: buttonDetails.y + window.scrollY - 10,
              right: window.innerWidth - buttonDetails.right - 10,
          };
          if (props.fillContainer !== null) {
              const container = props.fillContainer.current;
              const containerDetails = container.getBoundingClientRect();
              _coords = {
                  top: containerDetails.top,
                  left: containerDetails.left,
                  width: containerDetails.width,
                  height: containerDetails.height
              };
          }
          setCoords(_coords);
      };
      // callbacks
      const onOpenPanel = () => {
          setShowPanel(true);
          if (typeof props.onOpen == "function") {
              props.onOpen();
          }
      };
      const onClosePanel = () => {
          setShowPanel(false);
          if (typeof props.onClose == "function") {
              props.onClose();
          }
      };
      const onClear = () => {
          if (typeof props.onClear == "function") {
              props.onClear();
          }
      };
      // on click modal or backdrop 
      const handleClick = (e) => {
          var _a, _b;
          if (e.target != filterPanelRef.current && !((_a = filterPanelRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && e.target != filterButtonRef.current && !((_b = filterButtonRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
              setShowPanel(false);
          }
      };
      document.addEventListener("click", (e) => handleClick(e));
      // render
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: "filter-panel-btn", onClick: (e) => {
                  updateTooltipCoords(e.target);
                  onOpenPanel();
              }, ref: filterButtonRef },
              React.createElement("div", { className: "icon-container" },
                  React.createElement("div", { className: "icon" }))),
          React.createElement(react_transition_group_1.CSSTransition, { in: showPanel, timeout: 200, classNames: "f-fade", unmountOnExit: true },
              React.createElement(Portal_1.default, null,
                  React.createElement("div", { className: `filter-panel ${props.class != null && props.class}`, style: coords, ref: filterPanelRef },
                      React.createElement("div", { className: "filter-header" },
                          React.createElement("div", { className: "title" },
                              React.createElement("div", { className: "icon" }),
                              React.createElement("div", { className: "text" }, "Filters")),
                          React.createElement("div", { className: "icon-container", onClick: onClosePanel },
                              React.createElement("div", { className: "icon" }))),
                      React.createElement("div", { className: "filter-body" }, props.children),
                      React.createElement("div", { className: "filter-footer" },
                          React.createElement("button", { className: "clear-filter", onClick: onClear },
                              React.createElement("div", { className: "icon-container" },
                                  React.createElement("div", { className: "icon" })),
                              React.createElement("div", { className: "text" }, "Clear"))))))));
  }
  FilterPanel.defaultProps = {
      fillContainer: null,
  };
  exports.default = FilterPanel;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Portal/Modal.tsx":
  /*!*******************************************************!*\
    !*** ./src/components/UXPComponents/Portal/Modal.tsx ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const react_transition_group_1 = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
  const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const Modal = (props) => {
      // ref 
      const ModalBackdrop = React.useRef(null);
      // callback on change show state
      React.useEffect(() => {
          props.show ? onOpen() : onClose();
      }, [props.show]);
      //on modal toggle
      // open
      const onOpen = () => {
          if (typeof props.onOpen === "function") {
              props.onOpen();
          }
      };
      // close
      const onClose = () => {
          if (typeof props.onClose === "function") {
              props.onClose();
          }
      };
      // on click modal or backdrop 
      const handleClick = (e) => {
          if (props.backgroundDismiss != undefined && props.backgroundDismiss) {
              if (e.target == ModalBackdrop.current) {
                  onClose();
              }
          }
      };
      // modal backdrop styles
      let styles = {};
      return (React.createElement(React.Fragment, null,
          React.createElement(react_transition_group_1.CSSTransition, { in: props.show, timeout: 300, classNames: props.animation, unmountOnExit: true },
              React.createElement(Portal_1.default, null,
                  React.createElement("div", { className: "modal-container" },
                      React.createElement("div", { className: "modal-backdrop", ref: ModalBackdrop, onClick: (e) => handleClick(e), style: styles }),
                      React.createElement("div", { className: `modal-panel ${props.class || ""}`, style: props.styles || {} },
                          React.createElement("div", { className: "modal-header" },
                              props.headerContent == undefined ?
                                  React.createElement("div", { className: "modal-title" },
                                      " ",
                                      props.title == undefined ? "Modal" : props.title)
                                  :
                                      React.createElement(React.Fragment, null, props.headerContent),
                              props.showCloseButton &&
                                  React.createElement("div", { className: "modal-close", onClick: onClose }, props.closeButton !== undefined ?
                                      React.createElement(React.Fragment, null, props.closeButton)
                                      :
                                          React.createElement("div", { className: "close-btn" }))),
                          React.createElement("div", { className: "modal-body" }, props.children)))))));
  };
  // default props
  Modal.defaultProps = {
      title: "Modal",
      backgroundDismiss: true,
      showCloseButton: true,
      animation: "m-zoom-fc"
  };
  exports.default = Modal;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Portal/Popover.tsx":
  /*!*********************************************************!*\
    !*** ./src/components/UXPComponents/Portal/Popover.tsx ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const Popover = (props) => {
      // state 
      const [show, setShow] = React.useState(false);
      const [coords, setCoords] = React.useState({});
      const popoverButtonRef = React.useRef(null);
      const popoverRef = React.useRef(null);
      // toggle tooltip
      const toggleTooltip = (button) => {
          const buttonDetails = button.getBoundingClientRect();
          let position = props.position || "top";
          let _coords = {};
          switch (position) {
              case "top":
                  _coords = {
                      left: buttonDetails.x + buttonDetails.width / 2,
                      top: buttonDetails.top - 15
                  };
                  break;
              case "bottom":
                  _coords = {
                      left: buttonDetails.x + buttonDetails.width / 2,
                      top: buttonDetails.bottom + 15
                  };
                  break;
              case "right":
                  _coords = {
                      left: buttonDetails.x + buttonDetails.width + 15,
                      top: buttonDetails.y + buttonDetails.height / 2
                  };
                  break;
              case "left":
                  _coords = {
                      left: buttonDetails.x - 15,
                      top: buttonDetails.y + buttonDetails.height / 2
                  };
                  break;
          }
          setCoords(_coords);
          setShow(!show);
      };
      // on click modal or backdrop 
      const handleClick = (e) => {
          var _a, _b;
          if (e.target != popoverButtonRef.current && !((_a = popoverButtonRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && e.target != popoverRef.current && !((_b = popoverRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
              setShow(false);
          }
      };
      document.addEventListener("click", (e) => handleClick(e));
      // render tooltip
      const renderTooltip = () => {
          return (React.createElement(Portal_1.default, null,
              React.createElement("div", { className: `popover-content ${props.position || "top"} `, style: coords, ref: popoverRef },
                  React.createElement("div", { className: "title" }, props.title),
                  React.createElement("div", { className: "content" }, props.content))));
      };
      return (React.createElement(React.Fragment, null,
          React.createElement("span", { className: "popover", onClick: (e) => toggleTooltip(e.target), ref: popoverButtonRef }, props.children),
          show ?
              renderTooltip()
              : null));
  };
  exports.default = Popover;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Portal/Portal.tsx":
  /*!********************************************************!*\
    !*** ./src/components/UXPComponents/Portal/Portal.tsx ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
  const PortalContainer = (props) => {
      // root
      let rootElement = document.getElementById('portal-root');
      if (rootElement === null) {
          rootElement = document.createElement('div');
          rootElement.setAttribute("id", 'portal-root');
          document.body.appendChild(rootElement);
      }
      // wrapper
      let wrapper = document.createElement("div");
      // bind, unbind
      React.useEffect(() => {
          rootElement.appendChild(wrapper);
          return () => rootElement.removeChild(wrapper);
      }, [rootElement, wrapper]);
      // render content
      const renderPortal = () => {
          return (React.createElement(React.Fragment, null, props.children));
      };
      // return
      return ReactDom.createPortal(renderPortal(), rootElement);
  };
  exports.default = PortalContainer;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Portal/Tooltip.tsx":
  /*!*********************************************************!*\
    !*** ./src/components/UXPComponents/Portal/Tooltip.tsx ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const Tooltip = (props) => {
      // state 
      const [show, setShow] = React.useState(false);
      const [coords, setCoords] = React.useState({});
      // toggle tooltip
      const toggleTooltip = (button) => {
          const buttonDetails = button.getBoundingClientRect();
          let position = props.position || "top";
          let _coords = {};
          switch (position) {
              case "top":
                  _coords = {
                      left: buttonDetails.x + buttonDetails.width / 2,
                      top: buttonDetails.top - 15
                  };
                  break;
              case "bottom":
                  _coords = {
                      left: buttonDetails.x + buttonDetails.width / 2,
                      top: buttonDetails.bottom + 15
                  };
                  break;
              case "right":
                  _coords = {
                      left: buttonDetails.x + buttonDetails.width + 15,
                      top: buttonDetails.y + buttonDetails.height / 2
                  };
                  break;
              case "left":
                  _coords = {
                      left: buttonDetails.x - 15,
                      top: buttonDetails.y + buttonDetails.height / 2
                  };
                  break;
          }
          setCoords(_coords);
          setShow(!show);
      };
      // render tooltip
      const renderTooltip = () => {
          return (React.createElement(Portal_1.default, null,
              React.createElement("div", { className: `tooltip-content ${props.position || "top"} `, style: coords }, props.content)));
      };
      return (React.createElement(React.Fragment, null,
          React.createElement("span", { className: "tooltip", onMouseOver: (e) => toggleTooltip(e.target), onMouseOut: (e) => toggleTooltip(e.target) }, props.children),
          show ?
              renderTooltip()
              : null));
  };
  exports.default = Tooltip;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Toast/Toast.tsx":
  /*!******************************************************!*\
    !*** ./src/components/UXPComponents/Toast/Toast.tsx ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const _1 = __webpack_require__(/*! . */ "./src/components/UXPComponents/Toast/index.tsx");
  const Toast = React.memo((props) => {
      // toast remove method
      const { remove } = _1.useToast();
      // ref 
      const ToastRef = React.useRef(null);
      // on mount
      React.useEffect(() => {
          if (props.autoClose != undefined && props.autoClose) {
              let closeAfter = props.closeAfter;
              let createdAt = props.createdAt;
              let now = new Date();
              let nowTime = now.getTime();
              if ((nowTime - createdAt) >= closeAfter) {
                  handleRemove();
              }
              else {
                  // cal timeout delay
                  let delay = (closeAfter - (nowTime - createdAt));
                  // alert(closeAfter + "-" + nowTime + "-" + createdAt);
                  let timeout = setTimeout(() => {
                      handleRemove();
                  }, delay);
                  return () => { clearTimeout(timeout); };
              }
          }
      }, [props.instance, remove]);
      // handle remove
      const handleRemove = () => {
          ToastRef.current.classList.remove("show");
          ToastRef.current.classList.add("hide");
          setTimeout(() => {
              remove(props.instance);
              if (typeof props.onClose == 'function') {
                  props.onClose();
              }
          }, 300);
          // remove(props.instance)
          // if (typeof props.onClose == 'function') {
          //     props.onClose();
          // }
      };
      // return
      return (React.createElement("div", { className: `toast ${props.type} show`, ref: ToastRef },
          React.createElement("div", { className: "icon" }),
          React.createElement("div", { className: `toast-content ${!props.showCloseBtn && " no-mr"} ` },
              React.createElement("div", { className: "title" }, props.title),
              React.createElement("div", { className: "content" }, props.content)),
          props.showCloseBtn ?
              React.createElement("div", { className: "close", onClick: () => { handleRemove(); } })
              : null));
  });
  exports.default = Toast;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Toast/ToastContext.tsx":
  /*!*************************************************************!*\
    !*** ./src/components/UXPComponents/Toast/ToastContext.tsx ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const ToastContext = React.createContext(null);
  exports.default = ToastContext;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Toast/ToastProvider.tsx":
  /*!**************************************************************!*\
    !*** ./src/components/UXPComponents/Toast/ToastProvider.tsx ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var __rest = (this && this.__rest) || function (s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const ToastContext_1 = __webpack_require__(/*! ./ToastContext */ "./src/components/UXPComponents/Toast/ToastContext.tsx");
  const Portal_1 = __webpack_require__(/*! ../Portal/Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const Toast_1 = __webpack_require__(/*! ./Toast */ "./src/components/UXPComponents/Toast/Toast.tsx");
  // create a random id
  function generateId() {
      let date = new Date();
      let random = Math.round((Math.random() * 10000));
      let id = date.getTime().toString() + random.toString();
      return id;
  }
  // toast provider
  const ToastProvider = (props) => {
      // states
      const [toasts, setToasts] = React.useState([]);
      React.useEffect(() => {
          console.log(toasts);
      }, [toasts]);
      // add method
      const add = (content) => {
          let id = generateId();
          let date = new Date();
          let createdAt = date.getTime();
          // merge default props with content except position
          let { position } = props, rest = __rest(props, ["position"]);
          let updatedContent = Object.assign(Object.assign({}, rest), content);
          setToasts([...toasts, { id: id, content: updatedContent, createdAt: createdAt }]);
      };
      // remove method 
      const remove = React.useCallback((id) => {
          setToasts(toasts => toasts.filter((toast) => toast.id !== id));
      }, []);
      // toast types
      // success
      const success = (content) => {
          let updated = updatedContent(content, 'success');
          return add(updated);
      };
      // error
      const error = (content) => {
          let updated = updatedContent(content, 'error');
          return add(updated);
      };
      // warning
      const warning = (content) => {
          let updated = updatedContent(content, 'warning');
          return add(updated);
      };
      const info = (content) => {
          let updated = updatedContent(content, 'info');
          return add(updated);
      };
      // get alert content based on type
      const updatedContent = (content, type) => {
          let defaults = {
              type: type,
              title: type.toString()
          };
          let updated = Object.assign(Object.assign({}, defaults), content);
          return updated;
      };
      // provider value
      const providerValue = React.useMemo(() => { return { success, error, warning, info, remove }; }, [toasts]);
      // render toast
      const renderToast = (toast, key) => {
          return (React.createElement(Toast_1.default, { type: toast.content.type, title: toast.content.title, content: toast.content.content, onClose: toast.content.onClose || null, showCloseBtn: toast.content.showCloseBtn, autoClose: toast.content.autoClose, instance: toast.id, closeAfter: toast.content.closeAfter, key: toast.id, createdAt: toast.createdAt }));
      };
      // return 
      return (React.createElement(ToastContext_1.default.Provider, { value: providerValue },
          React.createElement(Portal_1.default, null,
              React.createElement("div", { className: `toast-container ${props.position}` }, toasts.map((toast, key) => renderToast(toast, key)))),
          props.children));
  };
  ToastProvider.defaultProps = {
      position: 'bottom-right',
      autoClose: true,
      showCloseBtn: true,
      closeAfter: 5000
  };
  exports.default = ToastProvider;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Toast/index.tsx":
  /*!******************************************************!*\
    !*** ./src/components/UXPComponents/Toast/index.tsx ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const ToastProvider_1 = __webpack_require__(/*! ./ToastProvider */ "./src/components/UXPComponents/Toast/ToastProvider.tsx");
  exports.ToastProvider = ToastProvider_1.default;
  const useToast_1 = __webpack_require__(/*! ./useToast */ "./src/components/UXPComponents/Toast/useToast.tsx");
  exports.useToast = useToast_1.default;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/Toast/useToast.tsx":
  /*!*********************************************************!*\
    !*** ./src/components/UXPComponents/Toast/useToast.tsx ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const ToastContext_1 = __webpack_require__(/*! ./ToastContext */ "./src/components/UXPComponents/Toast/ToastContext.tsx");
  const useToast = () => {
      const context = React.useContext(ToastContext_1.default);
      return {
          success: context.success,
          error: context.error,
          warning: context.warning,
          info: context.info,
          remove: context.remove
      };
  };
  exports.default = useToast;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/WidgetComponents/FullPageWidgetContainer.tsx":
  /*!***********************************************************************************!*\
    !*** ./src/components/UXPComponents/WidgetComponents/FullPageWidgetContainer.tsx ***!
    \***********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Modal_1 = __webpack_require__(/*! ../Portal/Modal */ "./src/components/UXPComponents/Portal/Modal.tsx");
  const FullPageWidgetContainer = (props) => {
      // state
      let [show, setShow] = React.useState(props.show);
      // update state
      React.useEffect(() => {
          setShow(props.show);
      }, [props.show]);
      // on open callback
      const onOpen = () => {
          if (typeof props.onOpen == "function") {
              props.onOpen();
          }
      };
      // on close callback
      const onClose = () => {
          setShow(false);
          if (typeof props.onClose == "function") {
              props.onClose();
          }
      };
      // get class name
      let className = 'full-widget ';
      typeof props.class != "undefined" && className + props.class;
      // render
      return (React.createElement(Modal_1.default, { show: show, onOpen: onOpen, onClose: onClose, class: className, headerContent: props.headerContent },
          typeof props.toolbarContent != "undefined" &&
              React.createElement("div", { className: "toolbar" }, props.toolbarContent),
          React.createElement("div", { className: `content` }, props.children)));
  };
  exports.default = FullPageWidgetContainer;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/WidgetComponents/LinkWidgetContainer.tsx":
  /*!*******************************************************************************!*\
    !*** ./src/components/UXPComponents/WidgetComponents/LinkWidgetContainer.tsx ***!
    \*******************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Modal_1 = __webpack_require__(/*! ../Portal/Modal */ "./src/components/UXPComponents/Portal/Modal.tsx");
  const LinkWidgetContainer = (props) => {
      // state
      let [show, setShow] = React.useState(props.show);
      // update state
      React.useEffect(() => {
          setShow(props.show);
      }, [props.show]);
      // on open callback
      const onOpen = () => {
          if (typeof props.onOpen == "function") {
              props.onOpen();
          }
      };
      // on close callback
      const onClose = () => {
          setShow(false);
          if (typeof props.onClose == "function") {
              props.onClose();
          }
      };
      // get class name
      let className = 'full-widget ';
      typeof props.class != "undefined" && className + props.class;
      return (React.createElement(Modal_1.default, { show: show, onOpen: onOpen, onClose: onClose, class: className },
          typeof props.toolbarContent != "undefined" &&
              React.createElement("div", { className: "toolbar" }, props.toolbarContent),
          React.createElement("div", { className: `content` }, props.children)));
  };
  exports.default = LinkWidgetContainer;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPComponents/WidgetComponents/TitleBar.tsx":
  /*!********************************************************************!*\
    !*** ./src/components/UXPComponents/WidgetComponents/TitleBar.tsx ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const TitleBar = (props) => {
      return React.createElement("div", { className: 'uxp-widget-titlebar' },
          React.createElement("div", { className: 'title-section' }, props.title),
          React.createElement("div", { className: 'action-section' }, props.children));
  };
  exports.default = TitleBar;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/Menu/Menu.tsx":
  /*!***************************************************!*\
    !*** ./src/components/UXPDashboard/Menu/Menu.tsx ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const WidgetManager_1 = __webpack_require__(/*! ./WidgetManager/WidgetManager */ "./src/components/UXPDashboard/Menu/WidgetManager/WidgetManager.tsx");
  const Modal_1 = __webpack_require__(/*! ../../UXPComponents/Portal/Modal */ "./src/components/UXPComponents/Portal/Modal.tsx");
  const react_transition_group_1 = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
  const UXPDashboardContext_1 = __webpack_require__(/*! ../UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  const Menu = (props) => {
      // states
      let [showMenu, setShowMenu] = React.useState(props.showMenu);
      let [selectedItem, setSelectedItem] = React.useState(null);
      // get context
      let Context = React.useContext(UXPDashboardContext_1.UXPDashboardContext);
      // get root element
      let docRoot = document.getElementById(Context.root);
      // menu callbacks
      React.useEffect(() => {
          console.log(showMenu);
          if (showMenu) {
              onOpenMenu();
          }
          else {
              onCloseMenu();
          }
      }, [showMenu]);
      const onOpenMenu = () => {
          docRoot.classList.add("blurred");
          props.onOpen();
      };
      const onCloseMenu = () => {
          docRoot.classList.remove("blurred");
          props.onclose();
      };
      // selected Item change callback 
      React.useEffect(() => {
          switch (selectedItem) {
              case "edit-dashboard":
                  onEditDashBoard();
                  break;
          }
      }, [selectedItem]);
      const onEditDashBoard = () => {
          // close menu 
          setShowMenu(false);
          // call back
          onChangeMenu({
              type: selectedItem,
              data: null
          });
      };
      const onChangeMenu = (changes) => {
          if (typeof props.onChange == "function") {
              props.onChange(changes);
          }
      };
      const onSaveWidgetManagerChanges = (changeset) => {
          props.onChange({
              type: selectedItem,
              data: changeset
          });
      };
      // render
      const onSelectMenuItem = () => {
          let title = "menu";
          switch (selectedItem) {
              case "widget-manager":
                  title = "Add widgets to your dashboard";
                  break;
          }
          return title;
      };
      const renderMenuContent = () => {
          // get content
          let title = onSelectMenuItem();
          let headerBlock = React.createElement("div", { className: "menu-header" },
              selectedItem !== null ?
                  React.createElement("div", { className: "menu-back", onClick: () => setSelectedItem(null) },
                      React.createElement("div", { className: "btn back-btn" }))
                  :
                      null,
              React.createElement("div", { className: "title" }, title));
          return (React.createElement(React.Fragment, null,
              React.createElement(Modal_1.default, { show: showMenu, headerContent: headerBlock, onOpen: onOpenMenu, onClose: onCloseMenu, closeButton: React.createElement("div", { className: "btn menu-close" }), class: "menu-modal", animation: "m-slide-ftr" },
                  React.createElement("div", { className: "menu-content" },
                      React.createElement(react_transition_group_1.CSSTransition, { in: selectedItem === null, timeout: 200, classNames: "slide-from-left", unmountOnExit: true },
                          React.createElement("div", { className: "menu-items" },
                              React.createElement("div", { className: "menu-item", onClick: () => { setSelectedItem("widget-manager"); } },
                                  React.createElement("div", { className: "mi-icon cards" }),
                                  React.createElement("div", { className: "mi-text" }, "Cards Available")),
                              React.createElement("div", { className: "menu-item", onClick: () => { setSelectedItem("edit-dashboard"); } },
                                  React.createElement("div", { className: "mi-icon edit" }),
                                  React.createElement("div", { className: "mi-text" }, "Edit Dashboard")),
                              React.createElement("div", { className: "menu-item" },
                                  React.createElement("div", { className: "mi-icon" }),
                                  React.createElement("div", { className: "mi-text" }, "Profile Settings")),
                              React.createElement("div", { className: "menu-item" },
                                  React.createElement("div", { className: "mi-icon" }),
                                  React.createElement("div", { className: "mi-text" }, "Generate QR Code")))),
                      React.createElement(react_transition_group_1.CSSTransition, { in: selectedItem == "widget-manager", timeout: 200, classNames: "slide-from-right", unmountOnExit: true },
                          React.createElement(WidgetManager_1.default, { onChange: onSaveWidgetManagerChanges }))))));
      };
      return (React.createElement(React.Fragment, null, renderMenuContent()));
  };
  exports.default = Menu;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/Menu/WidgetManager/WidgetManager.tsx":
  /*!**************************************************************************!*\
    !*** ./src/components/UXPDashboard/Menu/WidgetManager/WidgetManager.tsx ***!
    \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const useWidgetSearch_1 = __webpack_require__(/*! ./useWidgetSearch */ "./src/components/UXPDashboard/Menu/WidgetManager/useWidgetSearch.tsx");
  const UXPDashboardContext_1 = __webpack_require__(/*! ../../UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  const utils_1 = __webpack_require__(/*! ../../../../utils */ "./src/utils.ts");
  const WidgetManager = (props) => {
      // context
      const Context = React.useContext(UXPDashboardContext_1.UXPDashboardContext);
      // states
      let [widgets, setWidgets] = React.useState({
          all: [],
          available: [],
          deleted: [],
          installed: []
      });
      let [searchText, setSearchText] = React.useState("");
      let [selectedItems, setSelectedItems] = React.useState([]);
      let [page, setPage] = React.useState(1);
      let [filterBy, setFilterBy] = React.useState("installed");
      // refs
      const observer = React.useRef(null);
      // search available widgets on marketplace
      const [availableWidgets, loading, hasMore, error, totalAvailable] = useWidgetSearch_1.default(searchText, page);
      // last widget ref 
      const lastWidgetRef = React.useCallback((node) => {
          if (loading)
              return;
          if (observer.current)
              observer.current.disconnect();
          observer.current = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting && hasMore) {
                  setPage((prevPage) => (prevPage + 1));
              }
          });
          if (node)
              observer.current.observe(node);
      }, [loading, hasMore]);
      // search widgets
      const filterWidgetsBySearchQuery = (widgets) => {
          // get search text
          let query = searchText;
          // cleaning user input
          let regExp = /[^\w\s+-@]/gi;
          let cleanedSearchText = query.replace(regExp, "");
          let queryRegexp = new RegExp(cleanedSearchText, 'i');
          let filtered = widgets.filter((widget) => {
              if (queryRegexp.test(widget.name.toLowerCase())) {
                  return widget;
              }
          });
          return filtered;
      };
      const groupWidgets = (search) => {
          // saved
          // let [installedWidgets, deletedWidgets] = getSavedItemsFromLocalStorage(Context.userKey);
          let installedWidgets = Context.widgetManager.getInstalledWidgets();
          let deletedWidgets = Context.widgetManager.getDeletedWidgets();
          // return
          let available = availableWidgets;
          let installed = [];
          let deleted = [];
          // available
          if (installedWidgets.length > 0) {
              available = availableWidgets.filter((widget) => {
                  let instance = installedWidgets.find((saved) => widget.id === saved.id);
                  if (instance != undefined) {
                      widget.installed = true;
                  }
                  return widget;
              });
          }
          if (deletedWidgets.length > 0) {
              available = available.filter((widget) => {
                  let instance = deletedWidgets.find((saved) => widget.id === saved.id);
                  if (instance != undefined) {
                      widget.deleted = true;
                  }
                  return widget;
              });
          }
          // installed
          if (search) {
              installed = utils_1.filterUniqueWidgets(filterWidgetsBySearchQuery(installedWidgets));
              deleted = filterWidgetsBySearchQuery(deletedWidgets);
          }
          else {
              installed = utils_1.filterUniqueWidgets(installedWidgets);
              deleted = deletedWidgets;
          }
          return [available, installed, deleted];
      };
      React.useEffect(() => {
          // saved
          let available = availableWidgets;
          let installed = [];
          let deleted = [];
          if (searchText.trim().length == 0) {
              [available, installed, deleted] = groupWidgets(false);
          }
          else {
              [available, installed, deleted] = groupWidgets(true);
          }
          setWidgets({
              all: availableWidgets,
              available: available,
              deleted: deleted,
              installed: installed
          });
      }, [availableWidgets, selectedItems]);
      // on click thumbnail
      const onClickThumbnail = (e, id, widget) => {
          let thumbnail = document.getElementById(id);
          let checkbox = thumbnail.querySelector("input");
          checkbox.checked = !checkbox.checked;
          let checked = checkbox.checked;
          let _selectedItems = selectedItems;
          let alreadyAdded = _selectedItems.find((item) => item.id == widget.id ? true : false) || false;
          let updatedItems = [..._selectedItems];
          if (checked && !alreadyAdded) {
              updatedItems.push(widget);
          }
          else if (!checked && alreadyAdded) {
              updatedItems = _selectedItems.filter((item) => item.id != widget.id);
          }
          setSelectedItems(updatedItems);
      };
      // on change event 
      // prevent checking the checkbox
      // click the parent div
      const onChangeCheckbox = (e, id) => {
          e.stopPropagation();
          let parent = document.getElementById(id);
          parent.click();
      };
      // clear selected items 
      const clearSelection = () => {
          setSelectedItems([]);
          let checkboxes = document.querySelectorAll(".widget-checkbox");
          checkboxes.forEach((checkbox) => {
              checkbox.checked = false;
          });
      };
      // save selected items 
      const saveSelectedItems = () => {
          props.onChange({
              selected: selectedItems
          });
          // update widgets
          let _widgets = Object.assign({}, widgets);
          let usedWidgets = [..._widgets.installed];
          let newlyAdded = selectedItems.filter((item) => {
              return !usedWidgets.some((used) => used.id === item.id);
          });
          usedWidgets = [...usedWidgets, ...newlyAdded];
          // available 
          let all = [..._widgets.all];
          _widgets.available = all;
          _widgets.installed = usedWidgets;
          _widgets.all = all;
          setWidgets(_widgets);
          // updated selected items
          // deselect checkboxes
          console.log(_widgets);
          clearSelection();
      };
      // delete 
      const deleteItem = (widget) => {
          props.onChange({
              deleted: [widget]
          });
      };
      // render search result
      const handleSearchInputChange = (event) => {
          setSearchText(event.target.value);
          setPage(1);
      };
      // render widgets
      // render thumbnail
      const renderWidgetThumbnail = (widget, addRef) => {
          var _a;
          let isNew = widget.hasOwnProperty("isNew") && widget.isNew == "true";
          let installed = widget.hasOwnProperty("installed") && widget.installed;
          let deleted = widget.hasOwnProperty("deleted") && widget.deleted;
          let classes = "widget-checkbox-label";
          if (selectedItems.find((selected) => (widget.id == selected.id)) != undefined) {
              classes += " checked";
          }
          if (installed)
              classes += " installed";
          if (deleted)
              classes += " deleted";
          let ref = null;
          if (addRef) {
              ref = lastWidgetRef;
          }
          return (React.createElement(React.Fragment, null,
              React.createElement("div", { id: widget.id, className: `widget-thumbnail ${installed ? " installed" : ""}${deleted ? " deleted" : ""} `, onClick: (e) => onClickThumbnail(e, widget.id, widget), ref: ref, key: widget.id },
                  React.createElement("div", { className: `thumbnail` },
                      (!installed && !deleted) && React.createElement("div", { className: "new" }, "New"),
                      React.createElement("label", { htmlFor: "", className: classes },
                          React.createElement("div", { className: "widget-checkbox-placeholder" }),
                          React.createElement("input", { type: "checkbox", name: "widget-checkbox", className: "widget-checkbox", onChange: (e) => onChangeCheckbox(e, widget.id) })),
                      React.createElement("img", { src: widget.icon, alt: "", className: "icon" })),
                  widget.vendor != undefined &&
                      React.createElement("div", { className: "vendor-logo" },
                          React.createElement("img", { src: widget.vendor, alt: "" })),
                  React.createElement("div", { className: "widget-name" }, widget.name),
                  React.createElement("div", { className: "widget-description" }, widget.hasOwnProperty("description") && widget.description.length > 0
                      ? widget.description
                      : "No Description"),
                  ((_a = widget.tags) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
                      React.createElement("div", { className: "tags" }, widget.tags.map((tag) => {
                          return (React.createElement("div", { className: "tag" }, tag));
                      })),
                  installed && React.createElement("div", { className: "btn delete-btn", onClick: () => deleteItem(widget) }, "Delete"))));
      };
      const renderInstalledWidgets = () => {
          return (React.createElement("div", { className: "items" }, widgets.installed.length === 0 ?
              React.createElement("div", { className: "no-items" }, "no widgets found")
              :
                  widgets.installed.map((widget, key) => {
                      widget.installed = true;
                      widget.deleted = false;
                      return renderWidgetThumbnail(widget);
                  })));
      };
      const renderDeletedWidgets = () => {
          return (React.createElement("div", { className: "items" }, widgets.deleted.length === 0 ?
              React.createElement("div", { className: "no-items" }, "no widgets found")
              :
                  widgets.deleted.map((widget, key) => {
                      widget.installed = false;
                      widget.deleted = true;
                      return renderWidgetThumbnail(widget);
                  })));
      };
      const renderAvailableWidgets = () => {
          return (React.createElement("div", { className: "items" }, widgets.available.length === 0 ?
              React.createElement("div", { className: "no-items" }, "no widgets found")
              :
                  widgets.available.map((widget, key) => {
                      let delInst = widgets.deleted.find((w) => widget.id == w.id);
                      let instInst = widgets.installed.find((w) => widget.id == w.id);
                      widget.deleted = false;
                      widget.installed = false;
                      if (delInst !== undefined)
                          widget.deleted = true;
                      if (instInst !== undefined)
                          widget.installed = true;
                      if (key === (widgets.available.length - 1)) {
                          return renderWidgetThumbnail(widget, true);
                      }
                      else {
                          return renderWidgetThumbnail(widget);
                      }
                  })));
      };
      // return
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: "widget-manager" },
              React.createElement("div", { className: "wm-toolbar" },
                  React.createElement("div", { className: "wmt-stats" },
                      React.createElement("div", { className: "wmt-filter-by" },
                          React.createElement("div", { className: "text" }, " Filter By "),
                          React.createElement("div", { className: "icon" })),
                      React.createElement("div", { className: `wmt-stat-item used ${filterBy == "installed" ? " active" : ""}`, onClick: () => setFilterBy("installed") },
                          React.createElement("span", null, widgets.installed.length),
                          "Installed Widgets"),
                      React.createElement("div", { className: `wmt-stat-item deleted ${filterBy == "deleted" ? " active" : ""}`, onClick: () => setFilterBy("deleted") },
                          React.createElement("span", null, widgets.deleted.length),
                          "deleted widgets"),
                      React.createElement("div", { className: `wmt-stat-item available ${filterBy == "available" ? " active" : ""}`, onClick: () => setFilterBy("available") },
                          React.createElement("span", null, totalAvailable),
                          "available widgets")),
                  React.createElement("div", { className: "wmt-action-buttons" },
                      React.createElement("div", { className: `action-btn search ${searchText.length > 0 ? "active" : ""} ` },
                          React.createElement("input", { type: "text", placeholder: "SEARCH", className: "", value: searchText, onChange: (e) => handleSearchInputChange(e) }),
                          React.createElement("div", { className: "search-icon", onClick: () => setSearchText("") })),
                      React.createElement("div", { className: "action-btn selected-count" },
                          React.createElement("div", { className: "icon" }),
                          React.createElement("div", { className: "text" },
                              selectedItems.length,
                              " Selected")),
                      React.createElement("div", { className: "action-btn btn clear", onClick: clearSelection }, "Clear"),
                      React.createElement("div", { className: `action-btn btn add-widgets ${selectedItems.length > 0 ? "active" : ""} `, onClick: saveSelectedItems }, "Add widgets"))),
              React.createElement("div", { className: "wm-content" },
                  React.createElement("div", { className: "wmc-header" },
                      searchText.trim().length > 0 &&
                          React.createElement("div", { className: "searched-for" },
                              "Showing result for ",
                              React.createElement("span", { className: "search-term" },
                                  React.createElement("i", null,
                                      "\" ",
                                      searchText,
                                      " \""))),
                      React.createElement("div", { className: "title" },
                          filterBy,
                          " widgets"),
                      React.createElement("div", { className: "result-count" },
                          "Showing ",
                          widgets[filterBy].length,
                          " out of ",
                          filterBy == "available" ? totalAvailable : widgets[filterBy].length,
                          " ")),
                  React.createElement("div", { className: "wmc-body" },
                      filterBy === 'installed' && renderInstalledWidgets(),
                      filterBy === 'deleted' && renderDeletedWidgets(),
                      filterBy === 'available' && renderAvailableWidgets(),
                      loading && React.createElement("div", { className: "loading" },
                          " ",
                          React.createElement("div", { className: "dot" }),
                          " "),
                      !hasMore && React.createElement("div", { className: "end-of-content" }, " -- End of Content --"))))));
  };
  exports.default = WidgetManager;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/Menu/WidgetManager/useWidgetSearch.tsx":
  /*!****************************************************************************!*\
    !*** ./src/components/UXPDashboard/Menu/WidgetManager/useWidgetSearch.tsx ***!
    \****************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
  const UXPDashboardContext_1 = __webpack_require__(/*! ../../UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  const useWidgetSearch = (query, pageNumber) => {
      // state
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState(null);
      const [hasMore, setHasMore] = React.useState(false);
      const [widgets, setWidgets] = React.useState([]);
      const [total, setTotal] = React.useState(0);
      // dashboard context 
      let context = React.useContext(UXPDashboardContext_1.UXPDashboardContext);
      let LoadFromMarketPlace = context.widgetManager.loadFromMarketPlace;
      let marketPlaceUrl = context.widgetManager.url;
      // cancel function
      let cancel;
      // callbacks
      React.useEffect(() => {
          setWidgets([]);
      }, [query]);
      React.useEffect(() => {
          if (LoadFromMarketPlace) {
              getWidgetsFromMarketPlace();
              return () => {
                  console.log("canceling search");
                  cancel();
              };
          }
          else {
              getWidgetsFromRegisteredWidgets();
          }
      }, [query, pageNumber]);
      // get widgets from marketplace
      const getWidgetsFromMarketPlace = () => {
          console.log("searching marketplace...");
          // update states 
          setLoading(true);
          setError(null);
          let fd = new FormData();
          fd.set('pageNumber', '' + pageNumber);
          fd.set('query', query);
          // api request
          axios_1.default({
              method: "POST",
              url: marketPlaceUrl,
              data: fd,
              headers: {
                  'Authorization': context.apiKey ? `APIKEY ${context.apiKey}` : '',
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              cancelToken: new axios_1.default.CancelToken(function executor(c) {
                  // An executor function receives a cancel function as a parameter
                  cancel = c;
              })
          })
              .then((res) => {
              // update states 
              // widgets
              setWidgets((prevWidgets) => {
                  // merge result with previous data
                  // use Set() function to filter unique items if required
                  return ([...new Set([...prevWidgets, ...res.data.widgets])]);
              });
              // has more
              setHasMore(res.data.paginated.found > 0);
              // loading 
              setLoading(false);
              // set total count
              setTotal(res.data.paginated.total);
          })
              .catch((e) => {
              // if error in cancel return
              if (axios_1.default.isCancel(e))
                  return;
              // else log
              console.log(e);
              // update state 
              // set error 
              setError(e);
          });
      };
      // load from registered widgets
      const getWidgetsFromRegisteredWidgets = () => {
          setLoading(true);
          setError(null);
          setHasMore(true);
          if (query.trim().length == 0) {
              // load all 
              let updated = [...window.Widgets];
              updated.map((widget) => {
                  if ((!widget.hasOwnProperty("icon")) || (widget.hasOwnProperty("icon") && widget.icon.trim().length == 0)) {
                      widget.icon = "https://static.iviva.com/images/Adani_UXP/emergency.svg";
                  }
              });
              setWidgets(updated);
              setLoading(false);
              setHasMore(false);
              setTotal(updated.length);
          }
          else {
              // cleaning user input
              let regExp = /[^\w\s+-@]/gi;
              let cleanedSearchText = query.replace(regExp, "");
              let queryRegexp = new RegExp(cleanedSearchText, 'i');
              let searchResult = window.Widgets.filter((widget) => queryRegexp.test(widget.name.toLowerCase()));
              setWidgets(searchResult);
              setLoading(false);
              setHasMore(false);
              setTotal(searchResult.length);
          }
      };
      return [widgets, loading, hasMore, error, total];
  };
  exports.default = useWidgetSearch;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/SideBar/SideBar.tsx":
  /*!*********************************************************!*\
    !*** ./src/components/UXPDashboard/SideBar/SideBar.tsx ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const UXPDashboardContext_1 = __webpack_require__(/*! ../UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  const utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");
  const SideBar = (props) => {
      // dashboard context
      let context = React.useContext(UXPDashboardContext_1.UXPDashboardContext);
      let _items = context.sidebarItems || [];
      let items = [];
      if (typeof _items == 'function') {
          items = _items();
      }
      else {
          items = _items;
      }
      const renderSideBarItem = (itemID, key) => {
          console.log('rendering', itemID);
          let item = utils_1.lookupSidebarItem(itemID);
          if (!item) {
              return React.createElement("a", { className: 'invalid' }, `Invalid item: ${itemID}`);
          }
          if (typeof item.component != "undefined") {
              return (React.createElement("a", { href: item.link, onClick: () => props.onClick(item) },
                  React.createElement("li", null,
                      item.icon &&
                          React.createElement("div", { className: "icon" },
                              React.createElement("img", { src: item.icon, alt: "" })),
                      React.createElement("div", { className: "text" }, item.label))));
          }
          if (item.click) {
              return (React.createElement("a", { href: item.link, onClick: () => item.click() },
                  React.createElement("li", null,
                      item.icon &&
                          React.createElement("div", { className: "icon" },
                              React.createElement("img", { src: item.icon, alt: "" })),
                      React.createElement("div", { className: "text" }, item.label))));
          }
          return (React.createElement("a", { href: item.link, target: `${item.target == undefined ? "_parent" : item.target}` },
              React.createElement("li", null,
                  item.icon &&
                      React.createElement("div", { className: "icon" },
                          React.createElement("img", { src: item.icon, alt: "" })),
                  React.createElement("div", { className: "text" }, item.label))));
      };
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: "sidebar" },
              React.createElement("div", { className: "logo" }),
              React.createElement("div", { className: "sidebar-links" },
                  React.createElement("ul", null, items.map((itemID, key) => renderSideBarItem(itemID, key)))))));
  };
  exports.default = SideBar;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/UXPDashboard.tsx":
  /*!******************************************************!*\
    !*** ./src/components/UXPDashboard/UXPDashboard.tsx ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const Menu_1 = __webpack_require__(/*! ./Menu/Menu */ "./src/components/UXPDashboard/Menu/Menu.tsx");
  const SideBar_1 = __webpack_require__(/*! ./SideBar/SideBar */ "./src/components/UXPDashboard/SideBar/SideBar.tsx");
  const WidgetContainer_1 = __webpack_require__(/*! ./WidgetContainer/WidgetContainer */ "./src/components/UXPDashboard/WidgetContainer/WidgetContainer.tsx");
  const react_transition_group_1 = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
  const UXPDashboardContext_1 = __webpack_require__(/*! ./UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  // import { getSavedItemsFromLocalStorage } from '../../utils';
  const Toast_1 = __webpack_require__(/*! ../UXPComponents/Toast */ "./src/components/UXPComponents/Toast/index.tsx");
  const UXPDashboard = (props) => {
      // states
      let [showMenu, setShowMenu] = React.useState(false);
      let [editDashboard, setEditDashboard] = React.useState(false);
      let [widgets, setWidgets] = React.useState([]);
      let [selectedLink, setSelectedLink] = React.useState(null);
      // toast 
      let Toast = Toast_1.useToast();
      // get dashboard context
      let Context = React.useContext(UXPDashboardContext_1.UXPDashboardContext);
      React.useEffect(() => {
          console.log("selectedLink");
          console.log(selectedLink);
      }, [selectedLink]);
      // loading widgets 
      React.useEffect(() => {
          loadPlaceholders();
          loadWidgetScripts(Context.scriptFiles, updateWidgets);
      }, []);
      // load placeholders 
      const loadPlaceholders = () => {
          // get saved items 
          let installed = getSavedItems();
          setWidgets(installed);
      };
      const getSavedItems = () => {
          return Context.widgetManager.getInstalledWidgets();
          /*
          let [installed, deleted] = getSavedItemsFromLocalStorage(Context.userKey);
          return installed;*/
      };
      // load scripts functions
      function loadWidgetScripts(scriptFiles, callback) {
          let loadedFiles = [];
          scriptFiles.map((scriptFile, i) => {
              if (loadedFiles.indexOf(scriptFile) == -1) {
                  loadScriptFile(scriptFile, callback);
                  loadedFiles.push(scriptFile);
              }
          });
      }
      function loadScriptFile(path, callback) {
          var script = document.createElement('script');
          script.onload = function () {
              if (typeof callback == "function") {
                  callback();
              }
          };
          script.setAttribute('src', path);
          document.head.appendChild(script);
      }
      function loadScriptFileAsync(path) {
          return new Promise((resolve, reject) => {
              loadScriptFile(path, () => resolve());
          });
      }
      // after script is loaded 
      const updateWidgets = () => {
          // get all widgets
          let _widgets = window.Widgets;
          let savedWidgets = [...widgets];
          if (savedWidgets.length == 0)
              savedWidgets = getSavedItems();
          let updatedWidget = savedWidgets.filter((widget) => {
              let _widget = _widgets.find((item) => item.id === widget.id);
              if (_widget !== undefined) {
                  widget.widget = _widget.widget;
              }
              return widget;
          });
          setWidgets(updatedWidget);
      };
      // menu
      React.useEffect(() => {
          showMenu ? console.log("Opening menu") : console.log("Closing menu");
      }, [showMenu]);
      // on edit dashboard
      React.useEffect(() => {
          // update widgets
          let _widgets = [...widgets];
          setWidgets(_widgets);
      }, [editDashboard]);
      // on save changes 
      const onSaveDashboardChanges = (changes) => {
          // get installed & deleted 
          //let [installed, deleted] = getSavedItemsFromLocalStorage(Context.userKey);
          let deleted = Context.widgetManager.getDeletedWidgets();
          let _widgets = [...widgets];
          // exit edit mode
          if (changes.hasOwnProperty("exitEditMode")) {
              setEditDashboard(!changes.exitEditMode);
              Toast.success({ content: "Changes Saved" });
          }
          // layout change
          if (changes.hasOwnProperty("layout")) {
              _widgets = _widgets.filter((_widget) => {
                  let updatedLayout = changes.layout.find((layout) => (layout.i === _widget.key));
                  if (updatedLayout !== undefined) {
                      _widget.layout = updatedLayout;
                  }
                  return _widget;
              });
          }
          // remove widget
          if (changes.hasOwnProperty("remove")) {
              _widgets = _widgets.filter((_widget) => {
                  if (changes.remove._id !== _widget._id) {
                      return _widget;
                  }
                  else {
                      // add to deleted
                      let delInst = deleted.find((item) => item.id == changes.remove.guid);
                      if (delInst == undefined) {
                          deleted.push(changes.remove);
                      }
                  }
              });
              Toast.success({ content: "Widget Removed" });
          }
          // update configurations 
          if (changes.hasOwnProperty("updatedInstance")) {
              _widgets = _widgets.filter((widget) => {
                  if (widget._id === changes.updatedInstance._id) {
                      widget = Object.assign({}, changes.updatedInstance);
                  }
                  return widget;
              });
              Toast.success({ content: "Changes Saved" });
          }
          // update widgets & save
          deleted = deleted.filter((del) => {
              let inst = _widgets.find((widget) => del.id == widget.id);
              if (inst == undefined)
                  return true;
          });
          setWidgets(_widgets);
          Context.widgetManager.onWidgetsChanged(_widgets, deleted);
          // saveToLocalStorage(_widgets, deleted);
          // saveToDB(_widgets, deleted);
      };
      // on open menu
      const onOpenMenu = () => {
      };
      // on close menu
      const onCloseMenu = () => {
          setShowMenu(false);
      };
      // on change menu content | on select menu item
      const onChangeMenu = (changes) => {
          switch (changes.type) {
              case "edit-dashboard":
                  // check if dashboard has widgets
                  //let [installed, deleted] = getSavedItemsFromLocalStorage(Context.userKey);
                  let installed = Context.widgetManager.getInstalledWidgets();
                  if (installed.length > 0) {
                      setEditDashboard(true);
                  }
                  else {
                      Toast.info({ content: "Please Add Widgets To Edit" });
                  }
                  break;
              case "widget-manager":
                  handleWidgetChanges(changes.data);
                  break;
          }
      };
      const handleWidgetChanges = (changes) => __awaiter(void 0, void 0, void 0, function* () {
          // get installed & deleted 
          let deleted = Context.widgetManager.getDeletedWidgets();
          // let [installed, deleted] = getSavedItemsFromLocalStorage(Context.userKey);
          // get existing widgets 
          let updated = [...widgets];
          // apply changes
          // add selected
          // check if it is available & add
          // if not available download & register then add
          if (changes.hasOwnProperty("selected") && changes.selected.length > 0) {
              let registeredWidgets = window.Widgets;
              let newWidgets = [];
              let newSources = {};
              changes.selected.map((newWidget) => {
                  var _a;
                  let registeredInstance = registeredWidgets.find((registered) => newWidget.id == registered.id);
                  if (registeredInstance != undefined) {
                      newWidgets.push(registeredInstance);
                  }
                  else {
                      let source = (_a = newWidget.sourceUrl) !== null && _a !== void 0 ? _a : '';
                      if (!newSources[source]) {
                          newSources[source] = [];
                      }
                      newSources[source].push(newWidget);
                  }
                  // if deleted earlier 
                  // remove from deleted
                  deleted = deleted.filter((item) => item.id !== newWidget.id);
              });
              for (let url in newSources) {
                  let widgets = newSources[url];
                  console.log('Loading url...', url);
                  yield loadScriptFileAsync(url);
                  for (let i in widgets) {
                      newWidgets.push(widgets[i]);
                  }
              }
              let newlyInitiatedWidgets = initializeNewWidgets(newWidgets);
              updated = [...updated, ...newlyInitiatedWidgets];
              Toast.success({ content: changes.selected.length + " New Widgets Added" });
          }
          // remove deleted
          if (changes.hasOwnProperty("deleted") && changes.deleted.length > 0) {
              updated = updated.filter((widget) => {
                  return !changes.deleted.some((deletedWidget) => {
                      if (widget.id === deletedWidget.id) {
                          // add to deleted
                          let inst = deleted.find((item) => item.id == deletedWidget.id);
                          if (inst == undefined) {
                              deleted.push(deletedWidget);
                          }
                          return true;
                      }
                      return false;
                  });
              });
              Toast.success({ content: "Widgets Deleted" });
          }
          setWidgets(updated);
          // save to local storage & db
          // saveToLocalStorage(updated, deleted);
          // saveToDB(updated, deleted);
          Context.widgetManager.onWidgetsChanged(updated, deleted);
      });
      // save
      // to local storage
      const ____saveToLocalStorage = (installed, deleted) => {
          localStorage.setItem("uxp_user_" + Context.userKey, JSON.stringify({ "installed": installed, "deleted": deleted }));
      };
      const ___saveToDB = (installed, deleted) => {
      };
      // update widget layouts & props
      const generateId = () => {
          let _id = new Date().getTime().toString() + (Math.round(Math.random() * 100000)).toString();
          return _id;
      };
      const generateLayout = (widget) => {
          let _id = generateId();
          let layout = {
              x: 0,
              y: 0,
              w: 6,
              h: 8,
              i: _id,
              static: false,
              _id: _id
          };
          // check for configurations 
          if (widget.hasOwnProperty("configs")
              && widget.configs.hasOwnProperty("layout")) {
              let configs = widget.configs;
              let layoutConfig = configs.layout;
              let sampleConfigKeys = ["w", "h", "isDraggable", "isResizable", "maxH", "maxW", "minH", "minW", "static"];
              // remove additional configurations
              Object.keys(layoutConfig).map(key => {
                  if (sampleConfigKeys.indexOf(key) == -1) {
                      delete layoutConfig[key];
                  }
              });
              // merge config with layout
              // layout options will be replaced with configs
              let merged = Object.assign(Object.assign({}, layout), layoutConfig);
              layout = merged;
          }
          return layout;
      };
      const initializeWidget = (widget, lastLayout) => {
          let hasConfigured = true;
          if (widget.hasOwnProperty("configs") && widget.configs.hasOwnProperty("props")) {
              widget.configs.props.map((prop) => {
                  prop.value = "";
              });
              hasConfigured = false;
          }
          let layout = generateLayout(widget);
          if (lastLayout !== null) {
              layout.y = lastLayout.y + lastLayout.h;
              if ((lastLayout.x + lastLayout.w) < 12 && (lastLayout.x + lastLayout.w + layout.w) <= 12) {
                  layout.x = lastLayout.x + lastLayout.w;
                  layout.y = lastLayout.y;
              }
          }
          return [layout, widget, hasConfigured];
      };
      const initializeNewWidgets = (newWidgets) => {
          // get last layout & key
          let _widgets = [...widgets];
          let lastLayout = null;
          _widgets.map((widget) => {
              if (lastLayout === null) {
                  lastLayout = widget.layout;
              }
              else {
                  let layout = widget.layout;
                  if ((layout.x > lastLayout.x) || (layout.y > lastLayout.y)) {
                      lastLayout = layout;
                  }
              }
          });
          let key = _widgets.length;
          let initiatedWidgets = [];
          newWidgets.map((newWidget) => {
              let [layout, updatedWidget, hasConfigured] = initializeWidget(newWidget, lastLayout);
              //layout.i = (key + initiatedWidgets.length).toString();
              let widgetInstance = Object.assign(Object.assign({ _id: layout.i }, updatedWidget), { key: layout.i, layout: layout, hasConfigured: hasConfigured });
              lastLayout = layout;
              initiatedWidgets.push(widgetInstance);
          });
          return initiatedWidgets;
      };
      const renderActiveLinkUI = (linkItem) => {
          // get component
          let LinkComponentElement = linkItem.component;
          let props = {
              onClose: () => { setSelectedLink(null); }
          };
          return (React.createElement(LinkComponentElement, Object.assign({}, props)));
      };
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: "main-block" },
              React.createElement("div", { className: "navigation-block" },
                  React.createElement(SideBar_1.default, { onClick: (linkItem) => setSelectedLink(linkItem) })),
              React.createElement("div", { className: "content-block" },
                  React.createElement("div", { className: "header-block" },
                      React.createElement("div", { className: "hb-item logo" }),
                      React.createElement("div", { className: "hb-item title" },
                          "Experience ",
                          React.createElement("span", { className: "dark" }, "Dashboard ")),
                      React.createElement("div", { className: "hb-item toolbar" },
                          React.createElement("div", { className: "tb-item marketplace" },
                              React.createElement("div", { className: "icon" }),
                              React.createElement("div", { className: "text" },
                                  React.createElement("span", { className: "dark" }, "market"),
                                  "place")),
                          React.createElement("div", { className: "tb-item user-profile" },
                              React.createElement("div", { className: "icon" },
                                  React.createElement("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA44AAAMGBAMAAABPOscSAAAAGFBMVEUsHh7628WZMpnm5ub////uvKKui59iVFMPJoDZAAAgAElEQVR42uzdTXPaytIH8KbA0tZTEPI1RKGErVySYWtXnGRLypx4qxScnK9/bF5sBBJC79P/7l7cqn6ub9Vj/zKjmel5oWgX4XQX7FPfT6TRRyR+OEL5ffcpITn6b//x++U/Og6XzuO/v/+8/bA62phG0deXmK6P//5+/C/V0Zo0fKHC4f711dGq9EdM5cJ9Vkdb0jJN8UjyX3W0IK2ouI3X7lUdO03rUNxJhurY3UQj/Ek1xet3MlTHbtLoPqb6wn2K1LGTCeNPqjfWkTp2MGGMqe5wfXVsO51TA+Gu1LHd9IWaib/q2GLaQJ96CIen4z7xk+Ucu1N/3hzj27g1ZPXX2CYsHefUbDxH6thCuqCmY6OOzaczaj7W6th06hG1BqmOjaUPRO1BqmNTqUfUIqQ6NpS2x7iFVMdm0hlRq5Dq2ETaMuPr9CNUx/rT1hmJVqE61p36c6KOINWxvrQTRiJfHetNG6xwXK4sq2OdabSkbsKJeDgyKbHNqKu40TpyfemCuou1OtaV3lOXsVHHetKOxjgfdeVQHWtIOxvjnK4HqGOV1J91zUjuDlIdq6Rz6j7cp1Adq6VRTDZA+upYKfU9Ilsg1bF8OidLwo3UsXwaxrY4bjeaq2O51F8SWQepjkXTTtfjzqOvjiXT2CrH/T5zdSyaLsmyWFnraPOGnAVZFyutIxdOQ/sYt9NIdSy2sWppoePb/gB1LLSxakZWRj9UxyLpnCyNVaSOBTZWxbY6krbH61NblscvreuoY34aksXRV8crUzvHqifrOuoYdX0jRy2fSHXMTWPLHR11vCYNyPbYqGN+GpL94atjbrpk4OioY146Jw6x0fNWl1M/ZuFIT1pHvpgueDDatV3HPseISXN8v01QHVPTgNiEOmanER/G/TqrOqZtWPUYOVq07co2x5ATI7nqmLHxmFVz3A111DElJWahjqlpwM2xr45pKbGLlTqepwE/R0cdz1NiGBt1PE0Djo6uOp6mMbFskHreKpkuWDLuFgO0jvxxoINncyQaqONxyrQ5vtc91HGbWr71OL9BquM2nRPxbpDqaPvBnOsapDpuHYmYN0h1fEsD1o4DddwfsIqJe4NURzZ7jy82SHVkchQgZ1FHHZlWOk52eKgj00rHSR1SHblWOpIbA9QxuufPSE6o5608AMfDtTqC68h+jODYF+84J4gQ7+hhOA6EO/pEQA1SruMCxXEj2pHxRoCztQDJjiHBhC/ZcYHjOBDs6D/gOJJkRyDGt5GOVMc5kuONWEfW++TSOlapjjGU40CqI1S3+ra/Q+h5qwDLkVZC68gxmGNfpmNIaBGJdFzAOa4kOuKskZ9uCxDmSITasYpynAM6rgQ6BoCOfXmOgJ9H6ua6gI4dERn3HaskxzmkY1+cYwDpSNIcMT+P+45VkiMm425DsiDHOaijK+y8FejnkehJVh15ieo4kOWIyrg90yrH8R7WkUQ5BriOG0mOHq5jPxTkGOM6upIcCTie5DjOkR0HchwDZEcnFOO4RHYkOY4xtONKjCM04/4SFgGOc2xHR4pjgO3Y8h+2u/qjB+74JKOODHfQKq12JcERnPFtiVWC4z26oyvDcYHuSL4IRw/ecSPCcQnv2BfhGMM77i6eR3ck/JDgGApwlNCvLgQ4btQRZ0UH3NET4Lgd6IA7LgU4ugIcYwGOJOC8lQTG7d4O7DryXITjAN5xIcKxD+8YiHB04B09EY4uuiPqRR2nAe8Yy3B8Qu9XZTC2+CxLN473QhwH4I4LIY59dUSZeEA7ekIcCdux2rRj81kdLXGsMu24mQzHbBx9bMcqf5qhMYYN5Ab7vFWFv8yzMYwgN9B15HmVXtVwghxAO1aYdphDfOExgYR2LF+1WpsPSA5rtE6I7Fh6+uhMDC9IF9oxrtyrbuOOASS0Y+mvjTmBtL+MOVXH805qYk5jqY7dOZaddjyfMZrhg+WOK2DHksNV57w5GjOyfLF1o46n8WjSwvLFVmTHcn1hb2LSw+oVgQGwY7npgsmMicXzjz6wY73N0e75hzrmzjmOP5I/bXW8iWDPW5WadmzMxRjZOtpxcOvIZaod7p3JCUs/ksCOZVbJ1yY37qzsW11YR/+hieZo7UwS1zGu/etocyVLHY/i7jpHM/mpjq19H0ssiphrY/gpVsd2HO+ba442NklYx+LTjp4pEpY1SV8dDzE0xcKqJjlFdQyabY7b1Z2JPQuuT6iOXtPNcStpTee6AnUsfLOcY0rFdKyOjToWbSjPpmRMXtSxQcdaC1Y5n8kfchxbrz8WLcSaKnE37vo7uQGtIxddBjAVY9qxJKpjweljb1IV0ozMj1gd606DlkY5yUZpfsfq2KGjOzE1xdT8eFHH+tJiywA9U2OMotd/Fd+///P9++NuT/PUf/t/Loymb//3F3UskBa8cmVo6o7h0EwmKa18aKJJE99RVMdCfypnYtqM4ejTUh2vc2xiP0edfa+puX9dgX4fW508mu6X2EHbY6FlAMd0EuFY22NeWmgz+dp0FDUeGAF1XNjerdZ9YATUMbC/W613U7M6Vix1VI2ajse2dW6u5fpjwKJbrRESdJ9VgWW5lhcBGjpmALp/dcmlW62rRYI6Fvgn/ti5o/mqjhlpgZLVXfeO5rM6VnXsWcBohrcVGV3xjs82OJrRUh1T0pDNrOM9qjmC3g9w/fLqjS2Os0qOfUzH65dX17Y4VrtSUryjsSeqLAcMMB0DNos5NfWs0h17FrXHKmPWDaajx7BbrfToy0q2ozuxybHCUMdvy7HV+uPVu1d7VrXHCgvmbRV2W3a8duj3aJdj+eW5ULSjXd1qhQbpyna0rFst/4UEfd/K59mtlq9E9qeSHZ2JdY4lX+5BfcfT1mMdTS3qrEQ7WshoRiV3ywl27NnoaEpNPUJMx+vKj9+sdByXmnYIdryxktGMSpSv+qCOV5Ufn+10LNOxDqZyHW8mljp+KTPtkOv4aCljmY51Cup4RRm5Z2tzLNOxhu05tlp/DLgOVsutzbntFXZtc+wZi6PwcFWu49Bmx6JFj4FYx7XNjCYoOlyV6uhMrHYs2rH6qI5LvoOcbTW5oGMk1LFneXMs+IF0hTra3qsa46njFY7fbGcsWvOQ6fjH2B/aHnMd7e9Vi570EOnoGg5xq445t658Y+HoqeNlx2cWjMUGOgIcP3ObOZYa6LTp2Gb98f1YwE2Y/FL+uWPCOCxSS97euYJYR/aPro5j2RoLrujAO5rEjV9/+DAWG7DCO77Cjd7/ZT8yYjQLdfxw3O5Q3R9F+3doOMVYHT8cdzerjj79/v045MVYbMA6BXd8NGxjpO3xw9EwjqW2x4OjO2HseKuOB8cbzu3RU8eDY5+z40wdD45rzo5jdTw4PnJ2NOp4cGTNOFTHg+Mda8f8iofThWOr9Uf+045rKh6bGH2/3O6fK2vG/AmkO12KcLwBd1y//wi2Y4+34xVnjdSRQXzObY5CHAe8Hb/kH/3z0B1jAEeTf/tPIKI9rpEdt6cbAhHtkbnjKP8yrpk6Mog497DRTMR+cu6OD7lHOBfqyHshoJeoUYKfmwN23P/EQh1ZL+j8Sf6Eg+24Ye74Off1GK8Dx1brj0uEdYBx7hnOQ3uE3b8K4fgp9wJgT4Qj83XyzAWds5EQrOMU2XF95tiH3Z/j4ToeXxuD7jj1APYDZOyY+3a+4oPrGADsz0lfKP9z/APx+6sPyI7M98ultkfn7vgHZDjy3r+a2h7dVGhcxwX//eSphavn1IGQOtody5ybKscfr+lAO/4Cczx9yWkB7zhH2DB3Wkg+G397Qhy5LwQkC5DuMOu/V0dGjueM7+11BXveKmJ0ZW52eJcZ30/WPcHWkaP3a8k4x9HdZM7wwvqrj+4IU4C8GV76ryN0R+4Tj8sXVc7EOPaZO473ferk8jAI2DGGGLCayfffv8xdzjKBC+/IveLxOia9sIweC3BcQgx0rvt6OviOv4AZxxIcPYyBzlWrBH1gx4AQruy4bhV9gO/If6Bzxa4PAY7AA51PIhwXLN4lrxKzxGvl6I49WMfbjhxbrT/uC5DAH8ij6yBXbf5hW3b8SugfyKMd5sCOIYF/IIPkLbqojj6BfyAfkq+wwDty31SeO3sEd3wfBmAusY5PXvHEd8RcYr2V4rhMO/eJOOvYnSpHdZx6BD3zOPo89qcyHBFnHp4Yx4/5FWLt6vgEzwDacUHIHWviFQ8pjngda+ItuhW04/zCeTOobpWeoB2nR7/pBLlbbfkP23L98bCjHLJjTV7o2fJG/Q4dwTrWUeL+BxfcMSbUEWvyHkh0x+OxANYaa/K4uQPuGKRdIIxWsnrfhSzDkflLyclYJB0HkhyRdgWc3KqzAXdM/rPF6VhPn6FbgTvOk18R0FEO0TdwxzDzFmGgtZy33TngjtHFmxIhKo8yHOOLd+xxXcs5u5EV3vFkXIcx9VicXZCM7hh6hNcgR2dX6/anwhwhvpAz6tyx7fqjH1x4+ILrktz5TdebqN0/bPuO87NfGazwuF8GQHcMM5/b4xqTlIcgfHjH6Pw1Wt6Qw7QHkyN8x/jim0L84mvak54CHJfnv/WQc6+a9g69I8DRu/QEJr9edZn23NVAgGPaO9FsP5GjB5LquEh9r40n5DDj0euNAMd5+pvtdwwZpz8z3th9EuAYZTwTPeU3xFlmPV0eyXUkl1vpI/MBeiGOcdZvzwvySzajI8LRy/r1eT1gdpvt2BfhGGT9+ryOKC+zHQftO7Zefzw+W34anMasw2zG7Vlk9Dpy4izrSbDeIXdyFhnfcUoIA51PFxynIhz9zN+f08nW2QXHUIZj5sSj9z97Z9OVxtIEYLwY2DIius5oXEMYdQsZha0m1z0az7smuf7/84qiMDBd3dXdM101Xb1KHeSczDxUdX10VTfDXe3EwXE8bDjHdhx2Ve2wMuo070NhRyQc56oXwOiozrEm7IiBY96EwEMTdsTAMWsAx4HGXY2Co9JhfWxC2NGNhuMd/wByArirsXBUO6x8Ao+exl2NguOcf8VjoXFXo+CYsw88jpdwdnXc+H6rkuZyjpWrFnioI4o68g1wtKMB4WMnIo5D7oHHCXwYIBaOE+6Bx0Q47k+1Yhh4AGHHc0Qcc+4c73RuThwcb5hXroCwoxsVR2UYzSOA7MNnV+PhOGEeeGjdnEg4znkfmQPCjpeoOOa8Aw+gapVFxVHp6PCYyNrTuquxcFywDjx6uqxcNBwnnAMP4LBcOzK7Oudc8QAOy70E4hik/giVIJmHHVntbzJgHXklcg48oI7y2DguGAcec8DNiY3jhLHD2gOyObFxnDM+anUHFK1i45jzPWrVXwJZgNg4Ks/ocHZXuxFyvGPrsF5CxY7oOE7YOqzXwnFLnLF1WHtQsSM6jjdsHdY7qNgRH8cFU4f1GCx2xMdxwtVhBc90xMdxztRhPQGPrsbH8Ybp2McJeBYgEMdQ9UegvfyAq5vz1lAeWR159e8hS0dHnZU7HMfJcc7T0YEbkSPkmLN0dK7hRuQIOao2SNqOTg+etxIhR9UGSTujswDHA0bJcc7wzFxfM6cjRo4cN8iBZk5HjBxVGyTl0tUQ3h6j5Mhxg1zA48ji5Djn182q2R7j5Dhmt0FewdM6I+Wo2iDpds/1wOHy0XKcMOu60iRXo7WrM24pVniYdTiOIeuPQA2SauShrj3mQd9kcI4LXjVIZdTxJW6O+YRX5AEMQY6boyo195tZzSqLnCOvwx3QkY64OSovu6JoWPvQbPnIOc4YGdY5FHVEzjFj1OaxgJJysXNc8EkFtNRRR/Qcx3z654aELramx1EVeXSoeTrA8NyxcFTfWkZNHU/gm8li5zhmMoGl36N0AStBjrdMZlwDw8iEI1BMJubpDEld+Eio3+pTnHAYpXOsG0kedR35TVQaVko5He0oa+GoHIn0hZBCLnQ3dghH9S0QdM7NXRG70Iokxxn5a5KOF9obAoQjcB/kL/I5gEAXIdHkqDSsRHbI/h21C3RoclR6rERc1suW9p5A4QgaVhLZcmh3/DCrwhE0rCQUEnBWW4eZcNyIasPamVIuWL16q8JxS8zUr+qF8LGcVW5VOG6LasPaDY1x1ILM6lg4bou5+lUdBHZ1ehDHTDgWxAxwCcMmA2YQxk5OhCOB+uO7CGxCQWOPPuTkrG5fDf/qiNSR1yLwtgIWlPugVV0lc4RjUZwATmGfplUNeGEHXY63wOsKVvcYLWGOrUw47orQKwuU1YEScmEvJiPMcQLZrzCb46kOY7CLAglzhDydMEHkVUu/hOOeOGzRsqyXBhhbz8JxV4R9w9p91pEJxtahcNwTQeew7qMBWle1OMdKOG7EOfjG/tQKsr9omS3huC/Cb6zOPKsmj7Pb3CEcC+IQTp7UuEWemmL8mNcpHLdETRasvi3y0hjj54BA4TjWjimre4s03hy3HB3pt9oS55qX9pvY5ijnkBWiztnvE7Oq61vmhOOOONH9+msAebxEcZT+jjJRux2NSFnV9zMBwnFP1Clk9U7rDIdR+ubKRe17q7r0sRSOPsSh9sVVGn1ArVWKyw2EY5mY699chdFH/xSLUfrKFeIiIMj+SUs4ehJN/IxfJCLHQgApHHdFk6RYnw5G4agQTRSyknyAHUbhqBKXYUBaYpQ5SCpxbvT6jolgFI5K0SwU79PAuJ70IP1W+6KZQvrUSJuAo3hFmdSRS0TDOu4vChiFo1o0zVX/CpbFEY5GounBisdRcIzCERCNi0ceQGZ3LeFYlWj8bv84c2w5LjkvB4i56VvsDO6dKA7uhWOV4tDwLX4ZPDy4YHwQjuHaIQv6+OAA8vW7zhxz4QiJE3N9fIVhqYweOHaFo0MbXVEf7UCuvykcQ7bRFfXRxrauv+fKsSMcNeICoY9oldx8zZFjW/wct/arHX3EqeTmS8IxdPvVjj4iQG5/x5XjofRbaUWkPpra1uJXHDlKX4BenCP10Ugld77gylH6dAzEBVIfDUju/rkrR+mbMxBztD5qjOvDg2eO0sdqJE7w+giRfPDOsS0cjcQlXh+VxrX0Lx05HgpHL20CX8o5lqik6g8dq8jC0Uwc2nHcJan+My/uqnB0PF6u5lggCfyRFzdHOGrFmTXHh/t7WBfdObaFo7E4tOZostw4vohdNRazJV2OY+FoLkKW9QDa+yrn2MmFo7mYXQP6qNv/YIhJcuxW7BCOCBG4/upA78nA/qwTx2ciHEnXH7fFJaSPcGChXOsxZG5RB42zhWw4zmB9tCD5OU7OLSknHHHiXMsRQ3IrQ3DslswRjkjxTs/RdJ9E3AwIe6s3whEvLg04GqB0HNO5W+sQjmjRjCPIsqz70Z7jjXC0EUt9nbbyGE4R5sDbgMdiblU4osXSdIDz3ZD2dvVf4WgnlqUDDmsfuLrt5QhHK7Hk/FzbmePCkuOLcLQW951Wd32cWOdyhKO1mO+CfHHmOHRRR+FoJ2a7IN0vpe85nT8WjpbiLQ2OL8LRTcyK+YDHMBy7OSmOTOqPxWMehXzAfRiOL6ReDkuO4wLIMBw7N8LRw/GALZBJTRyXr/5Vt7XcnCIXju7iFkh3jkYj0D695GV3ncoRjh7ETfjhPCfQ6Aad5X4zgHD0IubrdNq0Hn3c77ESjn7Eda51VEN+tVuWkROOvsRVGavrblcXVuooHP2Jr95OJ6m/3tERjp7FfOnOUX+uo1uaWhWOPsX/1X0d8mcPsnD0Keb1X8Aq/moF4rR6feyWb5DCkRZHm3OPwrEZHJ+pcWRYfyyKoxB+TqtN7G0IR72f01XMshaOtDji8znvdz0IR2L6aMPxRThy41hqdtu5cGyCPnaEIzmOdy2rDVI4EuNodV7uWTjy4thVDc4Rjk3Qx7ZwpMZxgndXyZ0nZ8/Rw/XI11b9HcKRmj7a3TkvdpWaPg6k36oRHBOL7fHj0BwVjuzrj1Vz1F1PJnVkMhztBsy1c+FIi6PdQKuucPQo5j7s6sJie/y4plw4ehGnPjjaDQiQ/ZEaxyE2uSocSXKct+wqHsKRFkfLRIBw9CeOkioDyK5wrEn0grHvkggQjmQ42k18bAtHf/2PfjjeCcew4tQPxyE6CbBJzAlHOhxP8F7O29FH4ehJ9OOu2lU8SHFkXn/0hLE0U941mvYgdWQPoi91tHJ0hCM9jj28Osp8cn+iL4wlGdau6CNDjjaOjuijL9EfRpsjAaKP9DjalJJFHz2JI48crzGZHNFHn+I08bnEroYSvWIsbpBL4Vib6FcdCxtkV/SxNtEzxsIGaea8toWju5h4X1h1FI7u4tQ/RnwEeSgcHcWkitVDqiMtjgzrj9NKMCaXcs6KXUOHl7GPcu6RwAEAtWFdCsfKxWlS4cKOCZC+AFsxqXRh21nHwtFKHCUVrx7KrEr/o52YVL5wHqv0I9uISQ0LNxi5IxzR4iipZaEGW7Vlf0SKeVLTOrZIAwhHU3GU1LZ6+DSAcDQT86TGNcOHj8LRSExqXRh9lHuRzMVpvRgx/axd4WgsJnUv1CkrUhwJFxxHtWOco8IOSu+KLsdpUv/CuavCcVfM9j9NQqwFyl3d/j9nwnE8zn/ufjoNghE1fqVwn072NM5j53hzlabPxU+TMGuAy65u/5/T9HfcHLPxU5qmZ9ufjgJhRKVX2+Mdjum3qDm+KmORYzCK6Kzc1hPNVg9xkUXLMX96w5heVNEKV+mQgKJj8/39MZ4j5fiujKu1/nQUEiOm/HgwKuO4sivxcZylaZFjngRdmKrV4yv2zRNlTx/PcREdx9t0e2WhlRGZlXv7v26eaPMgF1lMHLPLpwLG9DxQ5K/nWNolcLDW4H2OrwFIHgvH91ijyHEaHuMAmhRYxPnfx3fen2iW7oNsPsf8Kt1bX8NjxJxD3tpUV0/0I90H2XSOWf6UliwCHLVpgE+d7Gx/Ld+4qx/rLG9+v9VtmnLluG9W1yq598s8a3odObsqx5jeh+c4N54QsBuw7FuYs2ZzzL4rMKaPpPQRbg7o7H6zZKc4yxvMUY2RgqPTszOrr6vsgdYgm8gRwJhehOc4wXur64AlVYNsIEfl3kjE0Tk1PSm3G+sepWqQDeQ4gzAScHSube2qguMbyOZxvAUxEtgg5y1Lw/qkeqbfefM45il1jqfGU1cO9W7OuiDZPI5PGo7hHZ2rlp1CDoCnyprGcZbqFqf86ovJ9vhZkGsSRy3G8I4O4rhcwWUFOV40i+NPPcfwGyRizMOj0fa4dYSsGRz1VjVNv4XGiBlodWDMcX02txkcU5MVXB8xg8mmZmb1c4tsQr8VlI+jtEEucAetTDmmWVPqyEYYw5c8MOeQD0zNaj1l5To4Gqpj+AgS0/7YQXBMn5uhj6nhYhRAblIBRya/0LwBHLOfphxDG1ZMv9XnBmn0dGc5f463phiDR5Co/sdDc7O6ldbhy/HGWB2Db5Coichf1rbY8NHYczRXx/AbJCbw6Jpvj5tsAGOO3xEcvzIKPNaZAONnY84xR2AMblh7aId1YPxs57w5/sBwTDlxvMeY1c/WQK4cURhDG9YJhuMflFldKyRXjjMcx8CGFTVH9z+UWV0rJFeOTziOgXPlc2wAeZQiFZIpxxyJMbBhRSXmDnBm9V0hmfZbfcdyDGtYB0iOJ7iHO+daR85S9AqbY0VyPEL+SHOmHH/gOX7lxBH7cM9MOR7hOQYNIZGJcvTjnfHkOPqZ8jKsqET5fwn+4VhyHFk8aGBPBzOZ7MXC2pxz5JhYcQwaQmISc39tfqQ3/DgmyZEVx5DnWIcVc0z56ePUlmNITweT0LF6tnN2HKG+QLKhx6Bqjt+4cZwmlttjWE+nao4pM455gs5aUVBIRODRtXu2Z14cp4n19hhUIc1P6PyTumyQTDjmxic7iSnkXdUcL1hxnCb222NQhexVG3Z8bpBM+q0SN47hknPzyjmeM6ojjxKX7TGkQp5W7K6ucuV8OCauHIPtkCcVu6uvESQfjm/qaJsFCJvUuazYzXn9hfbZcExct8eAClk5x28JF44jHxxDlT2q3h5fOfaZcEQ1IlFzdareHlfPxYPjNHF3c8LFHlWb1RXHPguOI08cLyhz/OvkwXHg+HFJ1ZMrxzCuTtXbIxuOa7OapO7rkSzHf9w49hlwTPxxvCAbP/51jIzpc5x65BjAsp5W7K2uOfbJcxwlfsKOQJb1tHKz+p6pIs/x44UceeFYe3qu9//27qanjRgIA7DUX1Czu+FcS6Rnq9B7xKFXoCrnEql7jrjk7xfaJOSLZrqeGb/evOYCKqUOT+fD9mbXustZvaQW/P1WSdnR+SJI2XUdH/IdG/Bz5KDs6J1ZF9ZdzjrF1OL4oOTou8/amXc5a8cG2nGTVhW2AUqUyG/24bh+PdCOwcDRcxV5Zx+OlTnGWCGkqM1Ryi8NsGMycfRrWjvzZrUOx2Dj6Lav89EhHDf1/gwdnVYfzcK8ydlybGAdk5mjD+RX+yanCsftSqPs6JJafzpk1a11VA2O2vEY4y+Es8dnTccG1DFZxqND13pp36tW5zjRdzRfR3oUx539KVDHYOwYp/dFFx06jEaOiueP5o6mbWtyYtzKKi3kOXJycLQrks2dD+O2YwPpGDwczXLrjRPjzv9EfMeLaDZMcuupHXI1xp2FcAvomHzi0ahvvbRfN1bpaBiPFiF548a449icdTzqh+S/s+rSboMR0DF4Oipv0126VMYjueQLnGNydoxTzeQ6Wb4Xi8+mNaGho+4SpA39wrYuHr3+D96xix5DtUym8Lh8s1wsn23mvPuPwjkG/3h8Hb1qv/P4+iM/fzadcV2OIcbaJLu5y3z3tgPBHFMokVc1JX0U90sBumOIniO745m4TXV/ox/s/VahqGNmUPaO89y/zgjsHLm440tQDtsaeJy7znLf8RrKcQbgOITSGfGIY0vH45S9tFZ2/bzA/J7o+B/F8gek4eGyY10gURwPf1MPsfCYTo9qdjvVRvwAAAIeSURBVH1fdFp0HA66GhCzOfhFXQM53h46XkQO0Y5wC+Q4o+PAdpWOY3EMQI6BjgOXHfCOE5qdPEWuwbGjmahd/VsgMRxnx5baNKPjaMeVmaPigx7oOKRd1Xl8gIpjyfN1Oho7cuEha1fpOI42R+dxHhqOMzoO3l3Fd+RGgLA8gjuyYa3NMdExp81RebyOhmOgY06bg+7IBaSszUF3ZMMq2ZXDcbylY1abo/LYMgXHWfH3TFTe5oA7stERtjl0HEebo+KYf/5Y+h2F1ZfHECDOkd+dHRud3fFEx1GXR3RHXmolK4/ojmx0hOUxXAM4psBGJ7M8hhbbkQVSVh7pOI7yiO7IRkdWHtEd2ejIyuPmdoElHQHuEVV7edzcZg7VkQVSVB7hHXl0JSqP8I4skJtxX7UjC6SoPCo4Zp98BRbI7LS6ustcyXPkWWCBzFx1bO5OhuvIAilKq/iOLJCStIrvyAI5DkdusUrSKr5jQ8MoePpoeccUmFiz02po4B258hCk1fXt5gs6npwhFQUPdW7wHR/o+GkM8cgCKUirFTgysV6Nw/Hst3SexuF4wbTq4Jh78hWYWPO7nPUBZMFzZMEcz7xjvR+L43lvBcie/VuDY2BaPb0RUNgxSSZ51p1OGE88dgzHUcSjcAk5n/dv4+Xz6cvHavz5dPuP375tDF1O+XiUOUoS6+DHiEHvM8i6nPLxqPbl9+F/N4G8hJJf/gaYiQj5eayzgAAAAABJRU5ErkJggg==", alt: "user-profile-image" })),
                              React.createElement("div", { className: "text has-dropdown" }, "Jan Doe")),
                          React.createElement("div", { className: "tb-item messages" },
                              React.createElement("div", { className: "icon" })),
                          React.createElement("div", { className: "tb-item burger-menu", onClick: () => setShowMenu(!showMenu) },
                              React.createElement("div", { className: "icon" })),
                          React.createElement(react_transition_group_1.CSSTransition, { in: showMenu, timeout: 200, classNames: "m-slide-ftr", unmountOnExit: true },
                              React.createElement(Menu_1.default, { showMenu: showMenu, onOpen: onOpenMenu, onclose: onCloseMenu, onChange: onChangeMenu })))),
                  React.createElement("div", { className: `main-content-block ${editDashboard ? "edit" : ""}` },
                      selectedLink != null && renderActiveLinkUI(selectedLink),
                      React.createElement(WidgetContainer_1.default, { widgets: widgets, editDashboard: editDashboard, onChangeDashboard: onSaveDashboardChanges }))))));
  };
  exports.default = UXPDashboard;
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/UXPDashboardContext.tsx":
  /*!*************************************************************!*\
    !*** ./src/components/UXPDashboard/UXPDashboardContext.tsx ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
  const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
  const BATCH_TIME = 100;
  function isAction(val) {
      return !!val.model;
  }
  function isEvent(val) {
      return !!val.eventID;
  }
  class DefaultDashboardContext {
      constructor(partialContext) {
          this.actionQueue = [];
          this.lucyUrl = partialContext === null || partialContext === void 0 ? void 0 : partialContext.lucyUrl;
          this.apiKey = partialContext === null || partialContext === void 0 ? void 0 : partialContext.apiKey;
          this.userKey = partialContext === null || partialContext === void 0 ? void 0 : partialContext.userKey;
          this.root = partialContext === null || partialContext === void 0 ? void 0 : partialContext.root;
          this.widgetManager = partialContext === null || partialContext === void 0 ? void 0 : partialContext.widgetManager;
          this.scriptFiles = partialContext === null || partialContext === void 0 ? void 0 : partialContext.scriptFiles;
          this.sidebarItems = partialContext === null || partialContext === void 0 ? void 0 : partialContext.sidebarItems;
          this.executeQueuedItems = utils_1.throttle(this._executeQueuedItems.bind(this), BATCH_TIME, { leading: false });
      }
      _executeQueuedItems() {
          let queue = this.actionQueue;
          this.actionQueue = [];
          let payload = [];
          for (var i in queue) {
              let qi = queue[i];
              if (isAction(qi)) {
                  payload.push({ action: qi.action, model: qi.model, parameters: qi.parameters, id: qi.id });
              }
              else {
                  payload.push({ eventID: qi.eventID, id: qi.id });
              }
          }
          console.log('Sending batched items', queue.length, payload.length);
          let url = this.lucyUrl + '/api/UXP/ExecuteBatch';
          let formData = new FormData();
          formData.set('payload', JSON.stringify(payload));
          axios_1.default({
              method: "POST",
              url,
              data: formData,
              headers: {
                  'Authorization': `APIKEY ${this.apiKey || ''}`,
                  'Content-Type': 'multipart/form-data'
              },
              cancelToken: new axios_1.default.CancelToken(function executor(c) {
                  // An executor function receives a cancel function as a parameter
              })
          })
              .then((res) => {
              let response = res.data;
              for (var i in response) {
                  let item = response[i];
                  let { id, ok, error, data } = item;
                  let queueItem = utils_1.findFirst(queue, q => q.id == id);
                  if (!queueItem) {
                      console.warn('Unable to find item', id, 'in', queue);
                      continue;
                  }
                  if (ok) {
                      queueItem.callback(data);
                      continue;
                  }
                  queueItem.error(error);
              }
          })
              .catch((e) => {
              // if error in cancel return
              if (axios_1.default.isCancel(e))
                  return;
              // else log
              console.log(e);
              for (var i in queue) {
                  let q = queue[i];
                  q === null || q === void 0 ? void 0 : q.error(e);
              }
          });
      }
      executeAction(model, action, parameters) {
          let id = utils_1.generateUUID();
          return new Promise((resolve, reject) => {
              this.actionQueue.push({ model, action, parameters, id, callback: resolve, error: reject });
              this.executeQueuedItems();
          });
      }
      fireEvent(eventID) {
          let id = utils_1.generateUUID();
          return new Promise((resolve, reject) => {
              this.actionQueue.push({ eventID, id, callback: resolve, error: reject });
              this.executeQueuedItems();
          });
      }
      hasAppRole(roles) {
          return new Promise((resolve, reject) => resolve(true));
      }
  }
  function createUXPContext(partialContext) {
      return new DefaultDashboardContext(partialContext);
  }
  exports.createUXPContext = createUXPContext;
  exports.UXPDashboardContext = React.createContext(createUXPContext(null));
  
  
  /***/ }),
  
  /***/ "./src/components/UXPDashboard/WidgetContainer/WidgetContainer.tsx":
  /*!*************************************************************************!*\
    !*** ./src/components/UXPDashboard/WidgetContainer/WidgetContainer.tsx ***!
    \*************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const GridLayout = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
  const DynamicForm_1 = __webpack_require__(/*! ../../DynamicForm/DynamicForm */ "./src/components/DynamicForm/DynamicForm.tsx");
  const Portal_1 = __webpack_require__(/*! ../../UXPComponents/Portal/Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const Modal_1 = __webpack_require__(/*! ../../UXPComponents/Portal/Modal */ "./src/components/UXPComponents/Portal/Modal.tsx");
  const UXPDashboardContext_1 = __webpack_require__(/*! ../UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  const WidgetContainer = (props) => {
      // refs 
      const widgetContainer = React.useRef(null);
      const Width = 1200;
      // state 
      const [width, setWidth] = React.useState(Width);
      const [removeInstance, setRemoveInstance] = React.useState(null);
      const [editInstance, setEditInstance] = React.useState(null);
      // context 
      const Context = React.useContext(UXPDashboardContext_1.UXPDashboardContext);
      React.useEffect(() => {
          let _width = widgetContainer.current.clientWidth;
          if (_width > Width) {
              setWidth(_width);
          }
      }, []);
      // on exit edit
      const onExitEditMode = () => {
          props.onChangeDashboard({
              exitEditMode: true
          });
      };
      // on change layout
      const onLayoutChange = (layouts) => {
          props.onChangeDashboard({
              layout: layouts
          });
      };
      // on removeWidget
      const onConfirmRemove = () => {
          props.onChangeDashboard({
              remove: removeInstance
          });
      };
      // render config modal
      const onOpenConfigModal = () => {
          console.log("open modal");
      };
      const onCloseConfigModal = () => {
          setEditInstance(null);
      };
      const onSaveChanges = (submittedData) => {
          let _editInstance = editInstance;
          let defaultProps = _editInstance.configs.props;
          defaultProps.map((prop) => {
              prop.value = submittedData[prop.name];
          });
          _editInstance.configs.props = defaultProps;
          _editInstance.props = submittedData;
          _editInstance.hasConfigured = true;
          setEditInstance(_editInstance);
          props.onChangeDashboard({
              updatedInstance: _editInstance,
          });
      };
      const renderConfigModel = () => {
          let formStructure = editInstance != null ? editInstance.configs.props : [];
          return (React.createElement(Modal_1.default, { show: editInstance != null, title: "Edit Configurations", onOpen: onOpenConfigModal, onClose: onCloseConfigModal, class: "config-modal", animation: "m-zoom-fc" },
              React.createElement(DynamicForm_1.default, { formStructure: formStructure, onSubmit: onSaveChanges, onCancel: onCloseConfigModal })));
      };
      // render
      const renderWidget = (widget) => {
          let WidgetElement = widget.hasOwnProperty("widget") ? widget.widget : null;
          let styles = {};
          if (widget.hasConfigured && widget.hasOwnProperty("configs") && widget.configs.hasOwnProperty("container") && WidgetElement !== null) {
              let containerConfig = widget.configs.container;
              if (containerConfig.hasOwnProperty("background")) {
                  styles.background = containerConfig.background;
                  if (containerConfig.background == "transparent") {
                      styles.boxShadow = "none";
                  }
              }
          }
          let showConfigOption = (widget.hasOwnProperty("configs") && widget.configs.hasOwnProperty("props"));
          let showDragHandler = true;
          if (widget.hasOwnProperty("configs") && widget.configs.hasOwnProperty("layout")
              && widget.configs.layout.hasOwnProperty("isDraggable") && !widget.configs.layout.isDraggable) {
              showDragHandler = false;
          }
          // get widget props
          let widgetProps = Object.assign({}, widget.props);
          // add context 
          widgetProps.uxpContext = Context;
          return (React.createElement("div", { className: `layout-item`, key: widget.layout.i, "data-grid": widget.layout, "data-instance-id": widget._id },
              React.createElement("div", { className: `layout-content ${WidgetElement == null ? "placeholder" : ""}`, style: styles },
                  widget.hasConfigured ?
                      React.createElement(React.Fragment, null, WidgetElement == null ? null
                          : React.createElement(WidgetElement, Object.assign({}, widgetProps)))
                      :
                          React.createElement("div", { className: "layout-not-configured" },
                              React.createElement("div", { className: "header" },
                                  React.createElement("div", { className: "icon" }),
                                  React.createElement("div", { className: "text" })),
                              React.createElement("div", { className: "content" },
                                  React.createElement("div", { className: "para" },
                                      React.createElement("div", { className: "text" }),
                                      React.createElement("div", { className: "text" })),
                                  React.createElement("div", { className: "para" },
                                      React.createElement("div", { className: "text" }),
                                      React.createElement("div", { className: "text" })),
                                  React.createElement("div", { className: "para" },
                                      React.createElement("div", { className: "text" }),
                                      React.createElement("div", { className: "text" }))),
                              React.createElement("div", { className: "placeholder" },
                                  React.createElement("div", { className: "icon" }),
                                  React.createElement("p", { className: "widget-name" }, widget.name),
                                  React.createElement("button", { className: "btn config-widget", onClick: () => {
                                          setEditInstance(widget);
                                      } },
                                      React.createElement("div", { className: "icon" }),
                                      React.createElement("div", { className: "text" }, "Configure")))),
                  props.editDashboard ?
                      React.createElement(React.Fragment, null,
                          React.createElement("div", { className: "layout-overlay" },
                              React.createElement("div", { className: "toolbar" },
                                  showConfigOption ? React.createElement("div", { className: "action-btn config", onClick: () => setEditInstance(widget) })
                                      : null,
                                  showDragHandler ? React.createElement("div", { className: "action-btn move" })
                                      : null,
                                  removeInstance !== null && removeInstance._id === widget._id ?
                                      React.createElement(React.Fragment, null,
                                          React.createElement("div", { className: "action-btn remove-confirm", onClick: onConfirmRemove },
                                              React.createElement("div", { className: "icon" }),
                                              React.createElement("div", { className: "text" }, "confirm")),
                                          React.createElement("div", { className: "action-btn remove-undo", onClick: () => setRemoveInstance(null) }))
                                      : React.createElement("div", { className: "action-btn remove", onClick: () => setRemoveInstance(widget) }))))
                      : null)));
      };
      const renderEditToolbar = () => {
          return (React.createElement(Portal_1.default, null,
              React.createElement("div", { className: "edit-toolbar" },
                  React.createElement("div", { className: "icon" }),
                  React.createElement("div", { className: "text" }, "You are in edit mode. You can configure, delete or add to your widgets and apps"),
                  React.createElement("div", { className: "btn exit-edit", onClick: onExitEditMode },
                      React.createElement("div", { className: "icon" }),
                      React.createElement("div", { className: "text" }, "Exit")))));
      };
      return (React.createElement(React.Fragment, null,
          React.createElement("div", { className: `widget-container ${props.editDashboard ? "edit" : ""}`, ref: widgetContainer },
              React.createElement(GridLayout, { className: "layout", cols: 30, rowHeight: 30, width: width, isResizable: true, isDraggable: true, autoSize: false, onLayoutChange: onLayoutChange }, props.widgets.map((widget) => renderWidget(widget)))),
          renderConfigModel(),
          props.editDashboard && renderEditToolbar()));
  };
  exports.default = WidgetContainer;
  
  
  /***/ }),
  
  /***/ "./src/index.tsx":
  /*!***********************!*\
    !*** ./src/index.tsx ***!
    \***********************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  const React = __webpack_require__(/*! react */ "react");
  const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
  // components
  const UXPDashboard_1 = __webpack_require__(/*! ./components/UXPDashboard/UXPDashboard */ "./src/components/UXPDashboard/UXPDashboard.tsx");
  const UXPDashboardContext_1 = __webpack_require__(/*! ./components/UXPDashboard/UXPDashboardContext */ "./src/components/UXPDashboard/UXPDashboardContext.tsx");
  /* these are for widgets to use */
  const Portal_1 = __webpack_require__(/*! ./components/UXPComponents/Portal/Portal */ "./src/components/UXPComponents/Portal/Portal.tsx");
  const Tooltip_1 = __webpack_require__(/*! ./components/UXPComponents/Portal/Tooltip */ "./src/components/UXPComponents/Portal/Tooltip.tsx");
  const Popover_1 = __webpack_require__(/*! ./components/UXPComponents/Portal/Popover */ "./src/components/UXPComponents/Portal/Popover.tsx");
  const Modal_1 = __webpack_require__(/*! ./components/UXPComponents/Portal/Modal */ "./src/components/UXPComponents/Portal/Modal.tsx");
  const FilterPanel_1 = __webpack_require__(/*! ./components/UXPComponents/Portal/FilterPanel */ "./src/components/UXPComponents/Portal/FilterPanel.tsx");
  const TitleBar_1 = __webpack_require__(/*! ./components/UXPComponents/WidgetComponents/TitleBar */ "./src/components/UXPComponents/WidgetComponents/TitleBar.tsx");
  const Toast_1 = __webpack_require__(/*! ./components/UXPComponents/Toast */ "./src/components/UXPComponents/Toast/index.tsx");
  const TextField_1 = __webpack_require__(/*! ./components/UXPComponents/Form/TextField */ "./src/components/UXPComponents/Form/TextField.tsx");
  const CheckboxField_1 = __webpack_require__(/*! ./components/UXPComponents/Form/CheckboxField */ "./src/components/UXPComponents/Form/CheckboxField.tsx");
  const FullPageWidgetContainer_1 = __webpack_require__(/*! ./components/UXPComponents/WidgetComponents/FullPageWidgetContainer */ "./src/components/UXPComponents/WidgetComponents/FullPageWidgetContainer.tsx");
  const LinkWidgetContainer_1 = __webpack_require__(/*! ./components/UXPComponents/WidgetComponents/LinkWidgetContainer */ "./src/components/UXPComponents/WidgetComponents/LinkWidgetContainer.tsx");
  const WrappedUXPDashboard = (props) => {
      return (React.createElement(React.Fragment, null,
          React.createElement(UXPDashboardContext_1.UXPDashboardContext.Provider, { value: UXPDashboardContext_1.createUXPContext(props.context) },
              React.createElement(Toast_1.ToastProvider, null,
                  React.createElement(UXPDashboard_1.default, null)))));
  };
  /* populate it in the window so widgets can use it */
  window.UXPComponents = {
      PortalContainer: Portal_1.default,
      Tooltip: Tooltip_1.default,
      Popover: Popover_1.default,
      Modal: Modal_1.default,
      FilterPanel: FilterPanel_1.default,
      TitleBar: TitleBar_1.default,
      useToast: Toast_1.useToast,
      TextField: TextField_1.default,
      CheckboxField: CheckboxField_1.default,
      FullPageWidgetContainer: FullPageWidgetContainer_1.default,
      LinkWidgetContainer: LinkWidgetContainer_1.default
  };
  // register widget function
  window.registerWidget = (widget) => {
      let widgets = window.Widgets;
      if (!widgets) {
          window.Widgets = [];
      }
      window.Widgets.push(widget);
  };
  //  register link function
  window.registerLink = (link) => {
      let links = window.SidebarLinks;
      if (!links) {
          window.SidebarLinks = [];
      }
      window.SidebarLinks.push(link);
  };
  // render dashboard
  window.renderDashboard = (context) => {
      ReactDOM.render(React.createElement(WrappedUXPDashboard, { context: context }), document.getElementById(context.root));
  };
  
  
  /***/ }),
  
  /***/ "./src/utils.ts":
  /*!**********************!*\
    !*** ./src/utils.ts ***!
    \**********************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", { value: true });
  function evalInScope(vars, code) {
      let script = '';
      let keys = Object.keys(vars);
      for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          script += `const ${key} = vars['${key}'];\n`;
      }
      script += '\n' + code;
      let f = Function('vars', script);
      return () => f(vars);
  }
  exports.evalInScope = evalInScope;
  function generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
      });
      return uuid;
  }
  exports.generateUUID = generateUUID;
  function ___getSavedItemsFromLocalStorage(userId) {
      // get saved items from local storage
      let savedWidgets = JSON.parse(localStorage.getItem("uxp_user_" + userId)) || {};
      // get installed widgets 
      let installed = [];
      if (savedWidgets.hasOwnProperty("installed")) {
          installed = savedWidgets.installed;
      }
      // get deleted widgets 
      let deleted = [];
      if (savedWidgets.hasOwnProperty("deleted")) {
          deleted = savedWidgets.deleted;
      }
      return [installed, deleted];
  }
  exports.___getSavedItemsFromLocalStorage = ___getSavedItemsFromLocalStorage;
  function filterUniqueWidgets(widgets) {
      let ids = [];
      let uniqueWidgets = widgets.filter((widget) => {
          if (ids.indexOf(widget.id) == -1) {
              ids.push(widget.id);
              return true;
          }
      });
      return uniqueWidgets;
  }
  exports.filterUniqueWidgets = filterUniqueWidgets;
  function lookupSidebarItem(id) {
      console.log('lookinup', id);
      let registeredItems = window.SidebarLinks;
      for (let i in registeredItems) {
          if (registeredItems[i].id == id) {
              return registeredItems[i];
          }
      }
      return null;
  }
  exports.lookupSidebarItem = lookupSidebarItem;
  /* extracted from underscore/lodash */
  function throttle(func, wait, options) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      if (!options)
          options = {};
      var later = function () {
          previous = options.leading === false ? 0 : Date.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout)
              context = args = null;
      };
      return function () {
          var now = Date.now();
          if (!previous && options.leading === false)
              previous = now;
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout)
                  context = args = null;
          }
          else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
          }
          return result;
      };
  }
  exports.throttle = throttle;
  ;
  function findFirst(haystack, needle) {
      let items = haystack.filter((x) => needle(x));
      if (items.length == 0) {
          return null;
      }
      return items[0];
  }
  exports.findFirst = findFirst;
  
  
  /***/ }),
  
  /***/ "react":
  /*!************************!*\
    !*** external "React" ***!
    \************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = React;
  
  /***/ }),
  
  /***/ "react-dom":
  /*!***************************!*\
    !*** external "ReactDOM" ***!
    \***************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = ReactDOM;
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=main.js.map