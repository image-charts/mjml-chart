/**
 *
 *  mjml-chart test suite
 *
 *  Compile and run the tests:
 *    npm test
 *
 */
import { expect } from 'chai';
import  { registerDependencies } from 'mjml-validator'
import mjml2html, {registerComponent, components } from 'mjml-core';
import ChartComponent from '../src';


describe('mjml-chart', () => {
  before(() => {
    registerComponent(ChartComponent);
    console.log(mjml2html, components);
  });

  describe('compile-time error handling', () => {
    it.only('ok', () => {
      console.log(mjml2html(`
        <mjml>
          <mj-body>
            <chart
            chs="300x200"
            chd="t:10,20,30|15,25,35"
            cht="bvs"
            chxt="x,y"
            chxl="0:|A|B|C" />
          </mj-body>
        </mjml>`));
    })

    it('should crash at compile time in case of missing (cht) required attributes', () =>
      expect(
        mjml2html(`
          <mjml>
          <mj-body>
          <mj-chart
          chs="300x200"
          chd="t:10,20,30|15,25,35"
          chxt="x,y"
          chxl="0:|A|B|C" />
          </mj-body>
          </mjml>`).errors
      ).to.throw('cht is required'));

    it('should crash at compile time in case of bad formatted attributes', () =>
      expect(mjml2html(`
          <mjml>
          <mj-body>
          <mj-chart
          chs="300x200"
          chd="t:10,20,30|15,25,35"
          cht="aa"
          chxt="x,y"
          chxl="0:|A|B|C" />
          </mj-body>
        </mjml>`).errors
      ).to.throw(
        '"aa" is not an valid value for cht. Valid values are: ["bvs","bhs","bvg","bhg","bvo","p","p3","pc","pd","ls","lc","lxy","ls:nda","lc:nda","lxy:nda"]'
      ));

    it('should crash at compile time in case of bad attribute values', () =>
      expect(() => {
        mjml2html(`
          <mjml>
          <mj-body>
          <mj-chart
          chs="300x200"
          chd="INVALID_CHD_VALUE"
          cht="bvs"
          chxt="x,y"
          chxl="0:|A|B|C" />
          </mj-body>
        </mjml>`)
      }).to.throw(
        '"INVALID_CHD_VALUE" is an invalid value for chd. Examples: t:10,20,30|15,25,35'
      ));
  });

  describe('chart generation', () => {
    it('should render a mjml chart', () => {
      expect(
        mjml2html(`
          <mjml>
            <mj-body>
              <mj-chart
              chs="300x200"
              chd="t:10,20,30|15,25,35"
              cht="bvs"
              chxt="x,y"
              chxl="0:|A|B|C" />
            </mj-body>
          </mjml>`).html
      ).to.contain(
        '<img height="auto" src="https://image-charts.com/chart?cht=bvs&chd=t%3A10%2C20%2C30%7C15%2C25%2C35&chs=300x200&chxt=x%2Cy&chxl=0%3A%7CA%7CB%7CC" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300">'
      );
    });

    it('should render mjml-image attributes', () => {
      expect(
        mjml2html(`
          <mjml>
            <mj-body>
              <mj-chart
              alt="alt"
              align="left"
              chs="300x200"
              chd="t:10,20,30|15,25,35"
              cht="bvg"
              chxt="x,y"
              chxl="0:|A|B|C" />
            </mj-body>
          </mjml>`).html
      )
        .to.contain(`align="left"`)
        .contain(
          '<img alt="alt" height="auto" src="https://image-charts.com/chart?cht=bvg&chd=t%3A10%2C20%2C30%7C15%2C25%2C35&chs=300x200&chxt=x%2Cy&chxl=0%3A%7CA%7CB%7CC" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300">'
        );
    });
  });
});
