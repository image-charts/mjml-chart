/**
 * GENERATED-CODE
 *
 * Beware don't edit `index.js` it was automatically generated with `npm run update`, edit `scripts/templates/component.js.tmpl` instead.
 */

import {
  BodyComponent
} from 'mjml-core'
import { registerDependencies } from 'mjml-validator'
import Image from 'mjml-image'
import widthParser from 'mjml-core/lib/helpers/widthParser'

import qs from 'querystring'
import memoize from 'lodash/memoize'
import min from 'lodash/min'
import toNumber from 'lodash/toNumber'
import includes from 'lodash/includes'

registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['mj-chart'],
  'mj-column': ['mj-chart'],
  'mj-body': ['mj-chart'],
  // Tell the validator which tags are allowed as our component's children
  'mj-chart': []
})

const imageChartsParameters = [
  {
    "name": "cht",
    "examples": [
      "bvg",
      "p"
    ],
    "required": true,
    "enum": [
      "bvs",
      "bhs",
      "bvg",
      "bhg",
      "bvo",
      "p",
      "p3",
      "pc",
      "pd",
      "ls",
      "lc",
      "lxy",
      "ls:nda",
      "lc:nda",
      "lxy:nda"
    ]
  },
  {
    "name": "chd",
    "pattern": "/^((t:(?:(?:[\\-0-9_\\.]+)[,|])*[\\.\\-0-9_]+)|(s:[a-z0-9_,]+)|(e:[a-z0-9_,-\\.]+))$/i",
    "examples": [
      "t:10,20,30|15,25,35"
    ],
    "required": true
  },
  {
    "name": "chds",
    "pattern": "/a|([0-9\\-],?)+/",
    "examples": [
      "-80,140"
    ]
  },
  {
    "name": "chxr",
    "pattern": "/^(?:[0-9-.]+)(?:,(?:[0-9-.]+)){2,3}\\|?((?:[0-9-.]+)(?:,(?:[0-9-.]+)){2,3})?$/i",
    "examples": [
      "0,0,200",
      "0,10,50,5",
      "0,0,500|1,0,200"
    ],
    "required": false
  },
  {
    "name": "chof",
    "examples": [
      ".png"
    ],
    "required": false
  },
  {
    "name": "chs",
    "pattern": "/^[0-9]{1,3}x[0-9]{1,3}$/",
    "examples": [
      "400x400"
    ],
    "required": true
  },
  {
    "name": "chdl",
    "pattern": "/^(?:[a-z0-9+\\s\\u00C0-\\u017F_!()&-°$€Ÿ₹.]*\\|?)+$/i",
    "examples": [
      "NASDAQ|FTSE100|DOW"
    ],
    "required": false
  },
  {
    "name": "chdls",
    "pattern": "/^[0-9A-F]{6}(?:[0-9A-F]{2})?(?:,[0-9]+)?$/i",
    "examples": [
      "9e9e9e,17"
    ],
    "required": false
  },
  {
    "name": "chg",
    "pattern": "/^[0-9]+(?:,[0-9.]+){0,5}?$/i",
    "examples": [
      "1,1",
      "0,1,1,5"
    ],
    "required": false
  },
  {
    "name": "chco",
    "pattern": "/^([0-9A-F]{6}(?:[0-9A-F]{2})?,?\\|?)+$/i",
    "examples": [
      "FFC48C",
      "FF0000,00FF00,0000FF"
    ],
    "required": false
  },
  {
    "name": "chtt",
    "pattern": "/^[a-z0-9sW -~-ÿ]+$/i",
    "examples": [
      "My beautiful chart"
    ],
    "required": false
  },
  {
    "name": "chts",
    "pattern": "/^([0-9A-F]{6}(?:[0-9A-F]{2})?),[0-9]+(,[lcr])?$/i",
    "examples": [
      "00FF00,17"
    ],
    "required": false
  },
  {
    "name": "chxt",
    "pattern": "/^(?:[xy])(,(?:[xy]))*$/i",
    "examples": [
      "y",
      "x,y",
      "x,x,y"
    ],
    "required": false
  },
  {
    "name": "chxl",
    "pattern": "/\\|?[0-9]+:(\\|[a-z0-9\\u00C0-\\u017F\\+\\s(?!:)]*)+/i",
    "examples": [
      "0:|Jan|July|Jan",
      "0:|Jan|July|Jan|1|10|20|30"
    ],
    "required": false
  },
  {
    "name": "chm",
    "examples": [],
    "required": false
  },
  {
    "name": "chls",
    "pattern": "/^(((?:[0-9]\\.?)+,?){1,3}\\|?)+/i",
    "examples": [
      "10",
      "3,6,3|5"
    ],
    "required": false
  },
  {
    "name": "chl",
    "pattern": "/(?:[a-z0-9\\u00C0-\\u017F\\s]+\\|?)+/i",
    "examples": [
      "label1|label2"
    ],
    "required": false
  },
  {
    "name": "chma",
    "pattern": "/^(?:(?:[0-9\\.]+),?)+\\|?(?:[0-9\\.]\\,?)+$/i",
    "examples": [
      "30,30,30,30",
      "40,20"
    ],
    "required": false
  },
  {
    "name": "chf",
    "pattern": "/^(?:(?:b(?:[0-9]+|g)|a|c),s,[0-9A-F]{6}(?:[0-9A-F]{2})?|(?:(?:(?:b(?:[0-9]+|g)|c)|ps[0-9]+-[0-9]+),lg,[0-9]{1,2}(?:,[0-9A-F]{6}(?:[0-9A-F]{2})?,[0-9.]+){1,})|(?:(?:b(?:[0-9]+|g)|c),ls,[0-9]{1,2}(?:,[0-9A-F]{6}(?:[0-9A-F]{2})?,[0-9.]+){1,})|\\|?)+$/i",
    "examples": [
      "b0,lg,0,f44336,0.3,03a9f4,0.8"
    ],
    "required": false
  },
  {
    "name": "chan",
    "pattern": "/^[0-9]{2,4}(?:,(?:easeInQuad|easeOutQuad|easeInOutQuad|easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeOutSine|easeInOutSine|easeInExpo|easeOutExpo|easeInOutExpo|easeInCirc|easeOutCirc|easeInOutCirc|easeInElastic|easeOutElastic|easeInOutElastic|easeInBack|easeOutBack|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce))?$/",
    "examples": [
      "1200",
      "1300|easeInOutSine"
    ],
    "required": false
  },
  {
    "name": "chli",
    "pattern": "/^(?:.*)$/i",
    "examples": [
      "95K€",
      "45%"
    ],
    "required": false
  },
  {
    "name": "icac",
    "examples": [
      "accountId"
    ],
    "required": false
  },
  {
    "name": "ichm",
    "examples": [
      "0785cf22a0381c2e0239e27c126de4181f501d117c2c81745611e9db928b0376"
    ],
    "required": false
  },
  {
    "name": "icwt",
    "examples": [
      "0",
      "1"
    ],
    "required": false
  }
];

const strToRegExp = memoize((regexp) => {
  const [__, pattern, flags] = /\/(.*)\/(.*)/.exec(regexp); // eslint-disable-line no-unused-vars
  return new RegExp(pattern, flags);
})

function buildURL (getAttribute) {

  function buildQuery () {
    return imageChartsParameters.reduce((query, attr) => {
      const val = getAttribute(attr.name);

      if(attr.required && val === undefined){
        throw new Error(`${attr.name} is required. Examples values ${attr.examples.join(', ')}`);
      }

      if (val === undefined) {
        return query;
      }

      if (attr.pattern && !strToRegExp(attr.pattern).test(val)) {
        throw new Error(`"${val}" is an invalid value for ${attr.name}. Examples: ${attr.examples.join(', ')}`);
      }

      if (attr.enum && !includes(attr.enum, val)) {
        throw new Error(`"${val}" is not an valid value for ${attr.name}. Valid values are: ${JSON.stringify(attr.enum)}`);
      }

      query[attr.name] = val;
      return query;
    }, {});
  }

  return `https://image-charts.com/chart?${qs.stringify(buildQuery())}`;
}

export default class MjChart extends BodyComponent {
  // Tell the parser that our component won't contain other mjml tags
  static endingTag = true

  // Tells the validator which attributes are allowed for mj-chart
  static allowedAttributes = {
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
};

  // What the name suggests. Fallback value for this.getAttribute('attribute-name').
  static defaultAttributes = {
  "align": "center",
  "border": "0",
  "padding": "10px 25px"
};

  // Tells the validator which attributes are allowed for mj-chart
  static imageAttributes = [
  {
    "name": "alt",
    "link": "#mjml-image"
  },
  {
    "name": "srcset",
    "link": "#mjml-image"
  },
  {
    "name": "title",
    "link": "#mjml-image"
  },
  {
    "name": "align",
    "link": "#mjml-image",
    "defaultValue": "center"
  },
  {
    "name": "border",
    "link": "#mjml-image",
    "defaultValue": "0"
  },
  {
    "name": "border-bottom",
    "link": "#mjml-image"
  },
  {
    "name": "border-left",
    "link": "#mjml-image"
  },
  {
    "name": "border-right",
    "link": "#mjml-image"
  },
  {
    "name": "border-top",
    "link": "#mjml-image"
  },
  {
    "name": "border-radius",
    "link": "#mjml-image"
  },
  {
    "name": "container-background-color",
    "link": "#mjml-image"
  },
  {
    "name": "padding",
    "link": "#mjml-image",
    "defaultValue": "10px 25px"
  },
  {
    "name": "padding-bottom",
    "link": "#mjml-image"
  },
  {
    "name": "padding-left",
    "link": "#mjml-image"
  },
  {
    "name": "padding-right",
    "link": "#mjml-image"
  },
  {
    "name": "padding-top",
    "link": "#mjml-image"
  }
];

  /*
    Render is the only required function in a component.
    It must return an html string.
  */
  render () {
    const getAttribute = this.getAttribute.bind(this);
    const [width, height] = getAttribute('chs').split('x').map(toNumber);

    const attributes = MjChart.imageAttributes.reduce((attrs, {name}) => {
      attrs[name] = getAttribute(name);
      return attrs;
    }, {
      src: buildURL(getAttribute),
      width: `${width}px`
    });

    return this.renderMJML(`<mj-image ${this.htmlAttributes(attributes)} />`);
  }
}

