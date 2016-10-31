/**
 * GENERATED-CODE
 *
 * Beware don't edit `index.js` it was automatically generated with `npm run update`, edit `scripts/templates/component.js.tmpl` instead.
 */

import {
  MJMLElement
} from 'mjml-core'
import Image from 'mjml-image'

import React, {
  Component
} from 'react'
import qs from 'querystring'
import memoize from 'lodash/memoize'
import min from 'lodash/min'
import toNumber from 'lodash/toNumber'
import includes from 'lodash/includes'

const tagName = 'mj-chart'
const parentTag = ['mj-column', 'mj-hero-content']
const selfClosingTag = true
const defaultMJMLDefinition = {
  "attributes": {
    "cht": undefined,
    "chd": undefined,
    "chds": undefined,
    "chof": undefined,
    "chs": undefined,
    "chdl": undefined,
    "chdls": undefined,
    "chg": undefined,
    "chco": undefined,
    "chtt": undefined,
    "chts": undefined,
    "chxt": undefined,
    "chxl": undefined,
    "chm": undefined,
    "chls": undefined,
    "chl": undefined,
    "chf": undefined,
    "chan": undefined,
    "chli": undefined,
    "icac": undefined,
    "ichm": undefined,
    "align": "center",
    "alt": undefined,
    "border": "none",
    "border-radius": undefined,
    "container-background-color": undefined,
    "padding-bottom": undefined,
    "padding-left": undefined,
    "padding-right": undefined,
    "padding-top": undefined,
    "padding": "10px 25px",
    "title": undefined,
    "vertical-align": undefined
  }
}
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
    "pattern": "/^((t:(?:(?:[\\-0-9_\\.]+)[,|])+[\\.\\-0-9_]+)|(s:[a-z0-9_,]+)|(e:[a-z0-9_,-\\.]+))$/i",
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
    "pattern": "/^(?:[a-z0-9+\\s\\u00C0-\\u017F_!()&-°.]*\\|?)+$/i",
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
    "pattern": "/([xy],)*[xy]/i",
    "examples": [
      "y",
      "x,y"
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
  }
]

const endingTag = true
const baseStyles = {
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0px'
  },
  img: {
    border: 'none',
    borderRadius: '',
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    width: '100%'
  }
}

const strToRegExp = memoize((regexp) => {
  const [__, pattern, flags] = /\/(.*)\/(.*)/.exec(regexp); // eslint-disable-line no-unused-vars
  return new RegExp(pattern, flags);
})

function buildURL (mjAttribute) {

  function buildQuery () {
    return imageChartsParameters.reduce((query, attr) => {
      const val = mjAttribute(attr.name);

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

@MJMLElement
class Chart extends Component {

  getContentWidth (chsWidth) {
    const { mjAttribute, getPadding } = this.props
    const parentWidth = mjAttribute('parentWidth')

    const width = min([parseInt(chsWidth), parseInt(parentWidth)])

    const paddingRight = getPadding('right')
    const paddingLeft = getPadding('left')
    const widthOverflow = paddingLeft + paddingRight + width - parseInt(parentWidth)

    return widthOverflow > 0 ? width - widthOverflow : width
  }

  render () {
    const {
      mjAttribute
    } = this.props

    const [width, height] = mjAttribute('chs').split('x').map(toNumber)

    return (<Image
      width={this.getContentWidth(width)}
      src={buildURL(mjAttribute)}
      padding={mjAttribute('padding')}
      align={mjAttribute('align')}
      alt={mjAttribute('alt')}
      border={mjAttribute('border')}
      border-radius={mjAttribute('border-radius')}
      title={mjAttribute('title')}
    />);
  }
}

Chart.tagName = tagName
Chart.parentTag = parentTag
Chart.endingTag = endingTag
Chart.selfClosingTag = selfClosingTag
Chart.defaultMJMLDefinition = defaultMJMLDefinition
Chart.baseStyles = baseStyles

export default Chart

