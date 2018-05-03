const {
  chartAttributes,
  imageAttributes,
  API_ENDPOINT
} = require('./model');
const fs = require('fs');
const path = require('path');
const pick = require('lodash/pick');

const COMPONENT_IN = fs.readFileSync(path.resolve(__dirname, 'templates/component.js.tmpl'), 'utf8');

const allowedAttributes = chartAttributes.concat(imageAttributes).reduce((attribute, {name}) => {
  attribute[name] = 'string';
  return attribute;
}, {});

const defaultAttributes = chartAttributes.concat(imageAttributes).reduce((attribute, {name, defaultValue}) => {
  attribute[name] = defaultValue || '';
  return attribute;
}, {});

const COMPONENT_OUT = COMPONENT_IN
  .replace('/*allowedAttributes*/', JSON.stringify(allowedAttributes, null, 2).replace(/null/g, 'undefined'))
  .replace('/*defaultAttributes*/', JSON.stringify(defaultAttributes, null, 2).replace(/null/g, 'undefined'))
  .replace('/*imageChartsParameters*/', JSON.stringify(chartAttributes.map((attribute) => pick(attribute, ['name', 'pattern', 'examples', 'required', 'enum'])), null, 2))
  .replace('/*documentation_url*/', API_ENDPOINT);

console.log(COMPONENT_OUT); // eslint-disable-line no-console
