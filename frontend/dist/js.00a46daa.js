// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/html/Html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _default() {
  return new Html();
}

var Html =
/*#__PURE__*/
function () {
  function Html() {
    _classCallCheck(this, Html);
  }

  _createClass(Html, [{
    key: "addAttribute",
    value: function addAttribute(attributeToSet, attributeValue) {
      this.element.setAttribute(attributeToSet, attributeValue);
      return this;
    }
  }, {
    key: "click",
    value: function click(callback) {
      this.element.addEventListener("click", callback);
      return this;
    }
  }, {
    key: "create",
    value: function create(element) {
      this.element = document.createElement(element);
      return this;
    }
  }, {
    key: "addChild",
    value: function addChild(elementToAdd) {
      if (elementToAdd.render() instanceof HTMLUnknownElement) {
        throw new Error("Invalid HTML tag");
      }

      this.element.append(elementToAdd.render());
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(classToAdd) {
      if (this.element.classList.contains(classToAdd)) {
        throw new Error("This class already exists");
      }

      this.element.classList.add(classToAdd);
      return this;
    }
  }, {
    key: "addHtml",
    value: function addHtml(contentToAdd) {
      if (contentToAdd === undefined) {
        return this.elements.innerHTML;
      }

      this.element.innerHTML = contentToAdd;
      return this;
    }
  }, {
    key: "isClassQuery",
    value: function isClassQuery(query) {
      return query.startsWith(".");
    }
  }, {
    key: "isIdQuery",
    value: function isIdQuery(query) {
      return query.startsWith("#");
    }
  }, {
    key: "render",
    value: function render() {
      return this.element;
    }
  }, {
    key: "replace",
    value: function replace(element) {
      this.element.innerHTML = '';
      this.addChild(element);
      return this;
    }
  }, {
    key: "select",
    value: function select(query) {
      var selection = document.querySelectorAll(query);

      if (selection.length === 1) {
        this.element = selection[0];
      } else {
        this.element = selection;
      }

      return this;
    }
  }, {
    key: "text",
    value: function text(textToAdd) {
      if (textToAdd === undefined) {
        return this.element.textContent;
      }

      this.element.textContent = textToAdd;
      return this;
    }
  }]);

  return Html;
}();
},{}],"js/utils/api/Api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _default() {
  return new Api();
}

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: "getRequest",
    value: function getRequest(location, callback) {
      fetch(location).then(function (response) {
        return response.json();
      }).then(callback).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return Api;
}();
},{}],"js/utils/components/Components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Html = _interopRequireDefault(require("../html/Html"));

var _Api = _interopRequireDefault(require("../api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default = function _default() {
  return new Components();
};

exports.default = _default;

var Components =
/*#__PURE__*/
function () {
  function Components() {
    _classCallCheck(this, Components);
  }

  _createClass(Components, [{
    key: "getAppContext",
    value: function getAppContext() {
      return (0, _Html.default)().select("#app");
    }
  }, {
    key: "renderWrapperDiv",
    value: function renderWrapperDiv() {
      return (0, _Html.default)().create("div").addClass("wrapper");
    }
  }, {
    key: "renderContainerDiv",
    value: function renderContainerDiv() {
      return (0, _Html.default)().create("div").addClass("container");
    }
  }, {
    key: "renderMainHeader",
    value: function renderMainHeader() {
      var mainHeader = (0, _Html.default)().create("header");
      var mainHeaderTitle = (0, _Html.default)().create("h1").addClass("page-title").text("Whisky Aficionado");
      var headerNav = this.renderMainNav();
      mainHeader.addChild(mainHeaderTitle);
      mainHeader.addChild(headerNav);
      return mainHeader;
    }
  }, {
    key: "renderMainNav",
    value: function renderMainNav() {
      var _this = this;

      var headerNav = (0, _Html.default)().create("nav");
      var headerNavList = (0, _Html.default)().create("ul").addClass("nav-list");
      var headerNavListItemOne = (0, _Html.default)().create("li").addClass("nav-list-item").addChild((0, _Html.default)().create("a").addAttribute("href", "").text("Home").click(function (event) {
        event.preventDefault();

        _this.renderPageHome();
      }));
      var headerNavListItemTwo = (0, _Html.default)().create("li").addClass("nav-list-item").addChild((0, _Html.default)().create("a").addAttribute("href", "").text("Types").click(function (event) {
        event.preventDefault();

        _this.renderPageTypes();
      }));
      var headerNavListItemThree = (0, _Html.default)().create("li").addClass("nav-list-item").addChild((0, _Html.default)().create("a").addAttribute("href", "").text("Brands").click(function (event) {
        event.preventDefault();

        _this.renderPageBrands();
      }));
      headerNavList.addChild(headerNavListItemOne);
      headerNavList.addChild(headerNavListItemTwo);
      headerNavList.addChild(headerNavListItemThree);
      headerNav.addChild(headerNavList);
      return headerNav;
    }
  }, {
    key: "renderContentBlock",
    value: function renderContentBlock(requestedData) {
      var _this2 = this;

      var contentBlock = (0, _Html.default)().create('section').addClass('content-block');
      var contentBlockTitle = (0, _Html.default)().create('h3').addClass('content-block__title').text(requestedData);
      var contentBlockList = (0, _Html.default)().create('ul').addClass('content-block__list');
      (0, _Api.default)().getRequest("http://localhost:8080/api/".concat(requestedData), function (responseCollection) {
        responseCollection.forEach(function (item) {
          var elementName;

          if (item.name) {
            elementName = item.name;
          } else if (item.brandName) {
            elementName = item.brandName;
          } else {
            elementName = labelName;
          }

          var contentBlockListItem = (0, _Html.default)().create('li').addClass('content-block__list-item').addChild((0, _Html.default)().create('a').addAttribute('href', "/".concat(requestedData, "/").concat(item.id)).text(elementName).click(function (event) {
            event.preventDefault();
            var endpoint = event.target.getAttribute('href');
            (0, _Api.default)().getRequest("http://localhost:8080/api".concat(endpoint), function (data) {
              _this2.renderPageSingle(data, endpoint);
            });
          }));
          contentBlockList.addChild(contentBlockListItem);
        });
      });
      contentBlock.addChild(contentBlockTitle);
      contentBlock.addChild(contentBlockList);
      return contentBlock;
    }
  }, {
    key: "renderMainContent",
    value: function renderMainContent(requestedData) {
      var mainContent = (0, _Html.default)().create("main").addClass("main-content");
      var containerDiv = (0, _Html.default)().create("div").addClass("container");
      var contentBlock = this.renderContentBlock(requestedData);
      containerDiv.addChild(contentBlock);
      mainContent.addChild(containerDiv);
      return mainContent;
    }
  }, {
    key: "renderMainFooter",
    value: function renderMainFooter() {
      var mainFooter = (0, _Html.default)().create("footer").addClass("footer");
      var mainFooterCopy = (0, _Html.default)().create("small").addClass("main-footer__copy").addHtml("&copy; 2019 Whisky");
      mainFooter.addChild(mainFooterCopy);
      return mainFooter;
    }
  }, {
    key: "renderPageSingle",
    value: function renderPageSingle(data, endpoint) {
      var typeOfObject = endpoint.split("/")[1];

      if (typeOfObject === "types") {
        this.renderPageType(data);
      }

      if (typeOfObject === "brands") {
        this.renderPageBrand(data);
      }

      if (typeOfObject === "labels") {
        this.renderPageLabel(data);
      }
    }
  }, {
    key: "renderPageHome",
    value: function renderPageHome() {
      var app = this.getAppContext();
      var wrapperDiv = this.renderWrapperDiv();
      var mainHeader = this.renderMainHeader();
      var mainContent = this.renderMainContent("");
      var mainFooter = this.renderMainFooter();
      wrapperDiv.addChild(mainHeader);
      wrapperDiv.addChild(mainContent);
      wrapperDiv.addChild(mainFooter);
      app.replace(wrapperDiv);
    }
  }, {
    key: "renderPageTypes",
    value: function renderPageTypes() {
      var currentMainContentContainer = this.renderWrapperDiv().select(".main-content").select(".container");
      currentMainContentContainer.replace(this.renderContentBlock("types"));
    }
  }, {
    key: "renderPageType",
    value: function renderPageType(data) {
      var currentMainContentContainerContentBlock = this.renderWrapperDiv().select(".main-content").select(".container").select(".content-block"); // console.log(data);

      var typeEntry = (0, _Html.default)().create("div").addClass("typeEntry");
      var typeName = (0, _Html.default)().create("h3").addClass("content-block__title").text(data.name);
      var typeDescription = (0, _Html.default)().create('h5').addClass("content-block__description").text(data.description); // const typeBrands = Html().create('ul');
      // data.brands.forEach(brand =>{
      //   const brandElement = Html()
      //   .create('li')
      //   .addChild(
      //     Html()
      //     .create('a')
      //     .addAttribute("href", `/brands/$brand,id`)
      //     .text(brand.brandName)
      //     .click(event =>{
      //       event.preventDefault();
      //       const endpoint = event.target.gettAttribute("href");
      //       Api().getRequest(`http://localhost:8080/api${endpoint}`), data =>{
      //         this.renderPageSingle(data, endpoint);
      //       }
      //     })
      //   );
      //   typeBrands.addChild(brandElement);
      // });

      typeEntry.addChild(typeName);
      typeEntry.addChild(typeDescription);
      currentMainContentContainerContentBlock.replace(typeEntry);
    }
  }, {
    key: "renderPageBrands",
    value: function renderPageBrands() {
      var currentMainContentContainer = this.renderWrapperDiv().select(".main-content").select(".container");
      currentMainContentContainer.replace(this.renderContentBlock("brands"));
    }
  }, {
    key: "renderPageBrand",
    value: function renderPageBrand(data) {
      var _this3 = this;

      var currentMainContentContainerContentBlock = this.renderWrapperDiv().select(".main-content").select(".container").select(".content-block"); // console.log(data);

      var brandEntry = (0, _Html.default)().create("div").addClass("brand-Entry");
      var brandsName = (0, _Html.default)().create("h3").addClass("content-block__title").text(data.brandName);
      var brandDescription = (0, _Html.default)().create("h5").addClass("content-block__description").text(data.brandDescription);
      var brandLabels = (0, _Html.default)().create("ul");
      data.labels.forEach(function (label) {
        var labelElement = (0, _Html.default)().create("li").addChild((0, _Html.default)().create("a").addAttribute("href", "/labels/".concat(label.id)).text(label.labelName).click(function (event) {
          event.preventDefault();
          var endpoint = event.target.getAttribute("href");
          (0, _Api.default)().getRequest("http://localhost:8080/api".concat(endpoint), function (data) {
            _this3.renderPageSingle(data, endpoint);
          });
        }));
        brandLabels.addChild(labelElement);
      });
      brandEntry.addChild(brandsName);
      brandEntry.addChild(brandDescription);
      currentMainContentContainerContentBlock.replace(brandEntry);
    }
  }, {
    key: "renderPageLabel",
    value: function renderPageLabel(data) {
      var _this4 = this;

      var currentMainContentContainerContentBlock = this.getWrapperDiv().select('.main-content').select('.container').select('.content-block');
      var labelName = (0, _Html.default)().create('h3').addClass('content-block__title').text(data.labelName);
      var labelBrand = (0, _Html.default)().create('ul').addClass('brand');
      data.whiskyBrand.forEach(function (brand) {
        var brandElement = (0, _Html.default)().create('li').addChild((0, _Html.default)().create('a').addAttribute('href', "/brands/".concat(brand.id)).text(brand.name).click(function (event) {
          event.preventDefault();
          var endpoint = event.target.getAttribute('href');
          (0, _Api.default)().getRequest("http://localhost:8080/api".concat(endpoint), function (data) {
            _this4.renderPageSingle(data, endpoint);
          });
        }));
        labelBrand.addChild(brandElement);
      });
      var labelType = (0, _Html.default)().create('h4').addChild((0, _Html.default)().create('a').addAttribute('href', "/types/".concat(data.type.id)).text(data.type.name).click(function (event) {
        event.preventDefault();
        var endpoint = event.target.getAttribute('href');
        (0, _Api.default)().getRequest("http://localhost:8080/api".concat(endpoint), function (data) {
          _this4.renderPageSingle(data, endpoint);
        });
      }));
      currentMainContentContainerContentBlock.replace(labelName);
      currentMainContentContainerContentBlock.addChild(labelBrand);
      currentMainContentContainerContentBlock.addChild(labelType);
    }
  }]);

  return Components;
}();

;
},{"../html/Html":"js/utils/html/Html.js","../api/Api":"js/utils/api/Api.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = main;

var _Components = _interopRequireDefault(require("./utils/components/Components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  (0, _Components.default)().renderPageHome();
}
},{"./utils/components/Components":"js/utils/components/Components.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _main = _interopRequireDefault(require("./main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _main.default)();
},{"./main":"js/main.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55429" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map