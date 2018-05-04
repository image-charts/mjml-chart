'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * GENERATED-CODE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Beware don't edit `index.js` it was automatically generated with `npm run update`, edit `scripts/templates/component.js.tmpl` instead.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _mjmlCore = require('mjml-core');

var _mjmlImage = require('mjml-image');

var _mjmlImage2 = _interopRequireDefault(_mjmlImage);

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _memoize = require('lodash/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _min = require('lodash/min');

var _min2 = _interopRequireDefault(_min);

var _toNumber = require('lodash/toNumber');

var _toNumber2 = _interopRequireDefault(_toNumber);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageChartsParameters = [{
  "name": "cht",
  "examples": ["bvg", "p"],
  "required": true,
  "enum": ["bvs", "bhs", "bvg", "bhg", "bvo", "p", "p3", "pc", "pd", "ls", "lc", "lxy", "ls:nda", "lc:nda", "lxy:nda"]
}, {
  "name": "chd",
  "pattern": "/^((t:(?:(?:[\\-0-9_\\.]+)[,|])*[\\.\\-0-9_]+)|(s:[a-z0-9_,]+)|(e:[a-z0-9_,-\\.]+))$/i",
  "examples": ["t:10,20,30|15,25,35"],
  "required": true
}, {
  "name": "chds",
  "pattern": "/a|([0-9\\-],?)+/",
  "examples": ["-80,140"]
}, {
  "name": "chxr",
  "pattern": "/^(?:[0-9-.]+)(?:,(?:[0-9-.]+)){2,3}\\|?((?:[0-9-.]+)(?:,(?:[0-9-.]+)){2,3})?$/i",
  "examples": ["0,0,200", "0,10,50,5", "0,0,500|1,0,200"],
  "required": false
}, {
  "name": "chof",
  "examples": [".png"],
  "required": false
}, {
  "name": "chs",
  "pattern": "/^[0-9]{1,3}x[0-9]{1,3}$/",
  "examples": ["400x400"],
  "required": true
}, {
  "name": "chdl",
  "pattern": '/^(?:[a-z0-9+\\s\\u00C0-\\u017F_!()&-\xB0.]*\\|?)+$/i',
  "examples": ["NASDAQ|FTSE100|DOW"],
  "required": false
}, {
  "name": "chdls",
  "pattern": "/^[0-9A-F]{6}(?:[0-9A-F]{2})?(?:,[0-9]+)?$/i",
  "examples": ["9e9e9e,17"],
  "required": false
}, {
  "name": "chg",
  "pattern": "/^[0-9]+(?:,[0-9.]+){0,5}?$/i",
  "examples": ["1,1", "0,1,1,5"],
  "required": false
}, {
  "name": "chco",
  "pattern": "/^([0-9A-F]{6}(?:[0-9A-F]{2})?,?\\|?)+$/i",
  "examples": ["FFC48C", "FF0000,00FF00,0000FF"],
  "required": false
}, {
  "name": "chtt",
  "pattern": "/^[a-z0-9sW -~-ÿ]+$/i",
  "examples": ["My beautiful chart"],
  "required": false
}, {
  "name": "chts",
  "pattern": "/^([0-9A-F]{6}(?:[0-9A-F]{2})?),[0-9]+(,[lcr])?$/i",
  "examples": ["00FF00,17"],
  "required": false
}, {
  "name": "chxt",
  "pattern": "/^(?:[xy])(,(?:[xy]))*$/i",
  "examples": ["y", "x,y", "x,x,y"],
  "required": false
}, {
  "name": "chxl",
  "pattern": '/\\|?[0-9]+:(\\|[a-z0-9\\u00C0-\\u017F\\+\\s(?!:)]*)+/i',
  "examples": ["0:|Jan|July|Jan", "0:|Jan|July|Jan|1|10|20|30"],
  "required": false
}, {
  "name": "chm",
  "examples": [],
  "required": false
}, {
  "name": "chls",
  "pattern": "/^(((?:[0-9]\\.?)+,?){1,3}\\|?)+/i",
  "examples": ["10", "3,6,3|5"],
  "required": false
}, {
  "name": "chl",
  "pattern": '/(?:[a-z0-9\\u00C0-\\u017F\\s]+\\|?)+/i',
  "examples": ["label1|label2"],
  "required": false
}, {
  "name": "chma",
  "pattern": "/^(?:(?:[0-9\\.]+),?)+\\|?(?:[0-9\\.]\\,?)+$/i",
  "examples": ["30,30,30,30", "40,20"],
  "required": false
}, {
  "name": "chf",
  "pattern": "/^(?:(?:b(?:[0-9]+|g)|a|c),s,[0-9A-F]{6}(?:[0-9A-F]{2})?|(?:(?:(?:b(?:[0-9]+|g)|c)|ps[0-9]+-[0-9]+),lg,[0-9]{1,2}(?:,[0-9A-F]{6}(?:[0-9A-F]{2})?,[0-9.]+){1,})|(?:(?:b(?:[0-9]+|g)|c),ls,[0-9]{1,2}(?:,[0-9A-F]{6}(?:[0-9A-F]{2})?,[0-9.]+){1,})|\\|?)+$/i",
  "examples": ["b0,lg,0,f44336,0.3,03a9f4,0.8"],
  "required": false
}, {
  "name": "chan",
  "pattern": "/^[0-9]{2,4}(?:,(?:easeInQuad|easeOutQuad|easeInOutQuad|easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeOutSine|easeInOutSine|easeInExpo|easeOutExpo|easeInOutExpo|easeInCirc|easeOutCirc|easeInOutCirc|easeInElastic|easeOutElastic|easeInOutElastic|easeInBack|easeOutBack|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce))?$/",
  "examples": ["1200", "1300|easeInOutSine"],
  "required": false
}, {
  "name": "chli",
  "pattern": "/^(?:.*)$/i",
  "examples": ["95K€", "45%"],
  "required": false
}, {
  "name": "icac",
  "examples": ["accountId"],
  "required": false
}, {
  "name": "ichm",
  "examples": ["0785cf22a0381c2e0239e27c126de4181f501d117c2c81745611e9db928b0376"],
  "required": false
}, {
  "name": "icwt",
  "examples": ["0", "1"],
  "required": false
}];

var strToRegExp = (0, _memoize2.default)(function (regexp) {
  var _$exec = /\/(.*)\/(.*)/.exec(regexp),
      _$exec2 = _slicedToArray(_$exec, 3),
      __ = _$exec2[0],
      pattern = _$exec2[1],
      flags = _$exec2[2]; // eslint-disable-line no-unused-vars


  return new RegExp(pattern, flags);
});

function buildURL(getAttribute) {

  function buildQuery() {
    return imageChartsParameters.reduce(function (query, attr) {
      var val = getAttribute(attr.name);

      if (attr.required && val === undefined) {
        throw new Error(attr.name + ' is required. Examples values ' + attr.examples.join(', '));
      }

      if (val === undefined) {
        return query;
      }

      if (attr.pattern && !strToRegExp(attr.pattern).test(val)) {
        throw new Error('"' + val + '" is an invalid value for ' + attr.name + '. Examples: ' + attr.examples.join(', '));
      }

      if (attr.enum && !(0, _includes2.default)(attr.enum, val)) {
        throw new Error('"' + val + '" is not an valid value for ' + attr.name + '. Valid values are: ' + JSON.stringify(attr.enum));
      }

      query[attr.name] = val;
      return query;
    }, {});
  }

  return 'https://image-charts.com/chart?' + _querystring2.default.stringify(buildQuery());
}

var Chart = (_temp = _class = function (_BodyComponent) {
  _inherits(Chart, _BodyComponent);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
  }

  _createClass(Chart, [{
    key: 'getContentWidth',
    value: function getContentWidth(chsWidth) {
      var parentWidth = this.getAttribute('parentWidth');
      var width = (0, _min2.default)([parseFloat(chsWidth), parseFloat(parentWidth)]);
      return width;
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var _getAttribute$split$m = this.getAttribute('chs').split('x').map(_toNumber2.default),
          _getAttribute$split$m2 = _slicedToArray(_getAttribute$split$m, 2),
          _width = _getAttribute$split$m2[0],
          height = _getAttribute$split$m2[1];

      var width = this.getContentWidth(_width);
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : null,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        },
        td: {
          width: fullWidth ? null : '' + parsedWidth + unit
        },
        img: {
          border: this.getAttribute('border'),
          borderRadius: '',
          display: 'block',
          outline: 'none',
          textDecoration: 'none',
          'min-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : '100%',
          'max-width': fullWidth ? '100%' : null
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _getAttribute$split$m3 = this.getAttribute('chs').split('x').map(_toNumber2.default),
          _getAttribute$split$m4 = _slicedToArray(_getAttribute$split$m3, 2),
          width = _getAttribute$split$m4[0],
          height = _getAttribute$split$m4[1];

      return '<image\n      ' + this.htmlAttributes({
        'width': this.getContentWidth(width),
        'src': buildURL(this.getAttribute.bind(this)),
        'padding': this.getAttribute('padding'),
        'align': this.getAttribute('align'),
        'alt': this.getAttribute('alt'),
        'border': this.getAttribute('border'),
        'border-radius': this.getAttribute('border-radius'),
        'title': this.getAttribute('title')
      }) + '\n    />';
    }
  }]);

  return Chart;
}(_mjmlCore.BodyComponent), _class.tagOmission = true, _class.endingTag = true, _class.allowedAttributes = {
  "cht": "string",
  "chd": "string",
  "chds": "string",
  "chxr": "string",
  "chof": "string",
  "chs": "string",
  "chdl": "string",
  "chdls": "string",
  "chg": "string",
  "chco": "string",
  "chtt": "string",
  "chts": "string",
  "chxt": "string",
  "chxl": "string",
  "chm": "string",
  "chls": "string",
  "chl": "string",
  "chma": "string",
  "chf": "string",
  "chan": "string",
  "chli": "string",
  "icac": "string",
  "ichm": "string",
  "icwt": "string",
  "alt": "string",
  "srcset": "string",
  "title": "string",
  "align": "string",
  "border": "string",
  "border-bottom": "string",
  "border-left": "string",
  "border-right": "string",
  "border-top": "string",
  "border-radius": "string",
  "container-background-color": "string",
  "padding": "string",
  "padding-bottom": "string",
  "padding-left": "string",
  "padding-right": "string",
  "padding-top": "string"
}, _class.defaultAttributes = {
  "cht": "",
  "chd": "",
  "chds": "",
  "chxr": "",
  "chof": "",
  "chs": "",
  "chdl": "",
  "chdls": "",
  "chg": "",
  "chco": "",
  "chtt": "",
  "chts": "",
  "chxt": "",
  "chxl": "",
  "chm": "",
  "chls": "",
  "chl": "",
  "chma": "",
  "chf": "",
  "chan": "",
  "chli": "",
  "icac": "",
  "ichm": "",
  "icwt": "",
  "alt": "",
  "srcset": "",
  "title": "",
  "align": "center",
  "border": "0",
  "border-bottom": "",
  "border-left": "",
  "border-right": "",
  "border-top": "",
  "border-radius": "",
  "container-background-color": "",
  "padding": "10px 25px",
  "padding-bottom": "",
  "padding-left": "",
  "padding-right": "",
  "padding-top": ""
}, _temp);
exports.default = Chart;

