const _ = require('lodash');
const swagger = require('./swagger.json');

const EXCLUDE_IMAGE_ATTRIBUTES = [
  // automatically generated attributes:
  'src', 'width', 'height',
  // currently not supported mjml-image attributes:
  'href', 'target'];

/*
{ [Function: MjImage]
  tagOmission: true,
  allowedAttributes:
   { alt: 'string',
     href: 'string',
     src: 'string',
     srcset: 'string',
     title: 'string',
     align: 'enum(left,center,right)',
     border: 'string',
     'border-bottom': 'string',
     'border-left': 'string',
     'border-right': 'string',
     'border-top': 'string',
     'border-radius': 'unit(px,%)',
     'container-background-color': 'string',
     padding: 'unit(px,%){1,4}',
     'padding-bottom': 'unit(px,%)',
     'padding-left': 'unit(px,%)',
     'padding-right': 'unit(px,%)',
     'padding-top': 'unit(px,%)',
     height: 'unit(px)',
     width: 'unit(px)' },
  defaultAttributes:
   { align: 'center',
     border: '0',
     height: 'auto',
     padding: '10px 25px',
     target: '_blank' } }
 */
const {
  allowedAttributes: allowedAttributes,
  defaultAttributes:defaultAttributes
} = require('mjml-image');
const {
  imageCharts: {
    documentation: DOCUMENTATION_ENDPOINT,
    api: API_ENDPOINT
  }
} = require('../package.json');

function meta (parameter) {
  return parameter['x-meta'];
}

const chartAttributes = swagger.paths['/chart'].get.parameters
  .filter(parameter => parameter.in === 'query' && (meta(parameter).implementation.status === 'COMPLETE' || meta(parameter).implementation.status === 'PARTIAL'))
  .map(parameter => ({
    name: parameter.name,
    link: `${DOCUMENTATION_ENDPOINT}${meta(parameter).link}`,
    description: parameter.description,
    examples: meta(parameter).examples,
    pattern: parameter.pattern,
    enum: parameter.enum,
    required: parameter.required
  }));

const imageAttributes = _.chain(allowedAttributes)
  .toPairs()
  .filter(([attribute]) => !EXCLUDE_IMAGE_ATTRIBUTES.includes(attribute))
  .map(([attribute, defaultValue]) => ({
    name: attribute,
    link: '#mjml-image',
    defaultValue: defaultAttributes[attribute]
  }))
  .value();

module.exports = {
  chartAttributes,
  imageAttributes,
  API_ENDPOINT,
  EXCLUDE_IMAGE_ATTRIBUTES
};
