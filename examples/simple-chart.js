import { mjml2html, registerMJElement } from 'mjml'
import path from 'path'

// First require mjml-chart:
// import mjmlchart from 'mjml-chart'
// ^^^ this import should be used in your project instead
import mjmlchart from '../'

// Then register mjml-chart
registerMJElement(mjmlchart);


/*
  Compile an mjml string
*/
const {errors, html} = mjml2html(require('fs').readFileSync(path.resolve(__dirname, 'simple-chart.mjml'), 'utf8'))

if(errors.length > 0){
  console.error(errors);
  process.exit(1);
}
/*
  Print the responsive HTML generated
*/
console.log(html); // eslint-disable-line no-console
