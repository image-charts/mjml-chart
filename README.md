## mjml-chart for [mjml](https://mjml.io/)

[![Build Status](https://img.shields.io/circleci/project/image-charts/mjml-chart.svg)](https://circleci.com/gh/image-charts/mjml-chart/) [![Deps](https://img.shields.io/david/image-charts/mjml-chart.svg)](https://david-dm.org/image-charts/mjml-chart) [![NPM version](https://img.shields.io/npm/v/mjml-chart.svg)](http://badge.fury.io/js/mjml-chart)  [![Downloads](http://img.shields.io/npm/dm/mjml-chart.svg)](https://www.npmjs.com/package/mjml-chart) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

Displays charts as images in your email. Note that the chart can be animated (gif) when the `chan` attribute is specified.

#### 🎩 Usage


```xml
<mjml>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-chart chs="700x200" chd="s:theresadifferencebetweenknowingthepathandwalkingthepath" cht="bvs" chxt="y" chf="b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1" />
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>
```

<p align="center">
  <a href="https://image-charts.com/documentation">
    <img src="https://image-charts.com/chart?cht=bvs&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1" />
  </a>
</p>

##### 🚀 Setup

```bash
npm install mjml-chart --save
```

##### 🚧 Documentation


| attribute                                                                      | description                                                                     | value examples                                  |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| [cht](https://image-charts.com/documentation#chart-type)                       | chart type                                                                      | `bvg`, `p`                                      |
| [chd](https://image-charts.com/documentation#data-format)                      | chart data                                                                      | `t:10,20,30|15,25,35`                           |
| [chds](https://image-charts.com/documentation#text-format-with-custom-scaling) | text format custom scaling                                                      | `-80,140`                                       |
| [chof](https://image-charts.com/documentation#output-format)                   | output fake format                                                              | `.png`                                          |
| [chs](https://image-charts.com/documentation#chart-size)                       | chart size                                                                      | `400x400`                                       |
| [chdl](https://image-charts.com/documentation#chart-legend-text-and-style)     | text for each series, to display in the legend                                  | `NASDAQ|FTSE100|DOW`                            |
| [chdls](https://image-charts.com/documentation#chart-legend-text-and-style)    | chart legend text and style                                                     | `9e9e9e,17`                                     |
| [chg](https://image-charts.com/documentation#grid-lines)                       | grid lines                                                                      | `1,1`, `0,1,1,5`                                |
| [chco](https://image-charts.com/documentation#series-colors)                   | series colors                                                                   | `FFC48C`, `FF0000,00FF00,0000FF`                |
| [chtt](https://image-charts.com/documentation)                                 | chart title                                                                     | `My beautiful chart`                            |
| [chts](https://image-charts.com/documentation)                                 | chart title colors and font size                                                | `00FF00,17`                                     |
| [chxt](https://image-charts.com/documentation)                                 | axis to apply labels to                                                         | `y`, `x,y`                                      |
| [chxl](https://image-charts.com/documentation)                                 | custom axis labels                                                              | `0:|Jan|July|Jan`, `0:|Jan|July|Jan|1|10|20|30` |
| [chm](https://image-charts.com/documentation)                                  | line fills                                                                      |                                                 |
| [chls](https://image-charts.com/documentation#line-styles)                     | line thickness and solid/dashed style                                           | `10`, `3,6,3|5`                                 |
| [chl](https://image-charts.com/documentation#labels)                           | pie chart labels                                                                | `label1|label2`                                 |
| [chma](https://image-charts.com/documentation)                                 | chart margins                                                                   | `30,30,30,30`, `40,20`                          |
| [chf](https://image-charts.com/documentation#background-fills)                 | Background Fills                                                                | `b0,lg,0,f44336,0.3,03a9f4,0.8`                 |
| [chan](https://image-charts.com/documentation#chart-gif-animation)             | gif configuration                                                               | `1200`, `1300|easeInOutSine`                    |
| [chli](https://image-charts.com/documentation#inside-label)                    | doughnut chart inside label                                                     | `95K€`, `45%`                                   |
| [icac](https://image-charts.com/documentation#enterprise-version)              | image-charts enterprise `account_id`                                            | `accountId`                                     |
| [ichm](https://image-charts.com/documentation#enterprise-version)              | HMAC-SHA256 signature                                                           | `0785cf22a0381c2e0239e27c126de4181f501d11…`     |
| [icwt](https://image-charts.com/documentation#enterprise-version)              | Force watermark display even if the chart was signed with an enterprise account | `0`, `1`                                        |


Since `mjml-chart` is a wrapper for `mjml-image`, `mjml-image` attributes are also available:

| attribute                                 | default values |
| ----------------------------------------- | -------------- |
| [align](#mjml-image)                      | center         |
| [alt](#mjml-image)                        | n/a            |
| [border](#mjml-image)                     | none           |
| [border-radius](#mjml-image)              | 0              |
| [container-background-color](#mjml-image) | n/a            |
| [padding-bottom](#mjml-image)             | n/a            |
| [padding-left](#mjml-image)               | n/a            |
| [padding-right](#mjml-image)              | n/a            |
| [padding-top](#mjml-image)                | n/a            |
| [padding](#mjml-image)                    | 10px 25px      |
| [title](#mjml-image)                      | n/a            |
| [vertical-align](#mjml-image)             | n/a            |


Note:
- `src` attribute is not customizable, it's generated by `mjml-chart`
- `width` and `height` are automatically generated by `mjml-chart` based on the `chs` attribute

