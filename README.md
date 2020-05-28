## mjml-chart for [mjml](https://mjml.io/)

[![Build Status](https://img.shields.io/circleci/project/image-charts/mjml-chart.svg)](https://circleci.com/gh/image-charts/mjml-chart/) [![Coveralls branch](https://img.shields.io/coveralls/image-charts/mjml-chart/master.svg)](https://coveralls.io/github/image-charts/mjml-chart) [![Deps](https://img.shields.io/david/image-charts/mjml-chart.svg)](https://david-dm.org/image-charts/mjml-chart) [![NPM version](https://img.shields.io/npm/v/mjml-chart.svg)](http://badge.fury.io/js/mjml-chart)  [![Downloads](http://img.shields.io/npm/dm/mjml-chart.svg)](https://www.npmjs.com/package/mjml-chart) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

Displays charts as images in your email. Note that the chart can be animated (gif) when the `chan` attribute is specified.

#### 🎩 Usage


```xml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-chart chs="700x200" chd="s:theresadifferencebetweenknowingthepathandwalkingthepath" cht="bvs" chxt="y" chf="b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

<p align="center">
  <a href="https://image-charts.com/documentation">
    <img src="https://image-charts.com/chart?cht=bvs&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0,lg,90,4CA4F5,0.1,C371D3,0.8,EA469E,1" />
  </a>
</p>

##### 🚀 Setup


- `mjml-chart` v5.x.x is built for *MJML4* ([Community components](https://mjml.io/documentation/#community-components)):

```bash
npm install mjml-chart@5 --save

cat <<EOF > .mjmlconfig
{
  "packages": [
    "mjml-chart/lib/index.js"
  ]
}
EOF
```

- `mjml-chart` v4.x.x is built for *MJML3*:

```bash
npm install mjml-chart@4 --save
```


##### 🚧 Documentation


| attribute                                                                                             | description                                                                                | value examples                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [cht](https://documentation.image-charts.com/reference/chart-type/)                                   | Chart type                                                                                 | `bvg`, `p`                                                                                                                                     |
| [chd](https://documentation.image-charts.com/reference/data-format/)                                  | chart data                                                                                 | `a:-100,200.5,75.55,110`, `t:10,20,30\|15,25,35`, `s:BTb19_,Mn5tzb`, `e:BaPoqM2s,-A__RMD6`                                                     |
| [chds](https://documentation.image-charts.com/reference/data-format/#text-format-with-custom-scaling) | data format with custom scaling                                                            | `-80,140`                                                                                                                                      |
| [choe](https://documentation.image-charts.com/qr-codes/#data-encoding)                                | QRCode data encoding                                                                       | `UTF-8`                                                                                                                                        |
| [chld](https://documentation.image-charts.com/qr-codes/#error-correction-level-and-margin)            | QRCode error correction level and optional margin                                          | `L\|4`, `M\|10`, `Q\|5`, `H\|18`                                                                                                               |
| [chxr](https://documentation.image-charts.com/reference/chart-axis/#axis-range)                       | Axis data-range                                                                            | `0,0,200`, `0,10,50,5`, `0,0,500\|1,0,200`                                                                                                     |
| [chof](https://documentation.image-charts.com/reference/output-format/)                               | Image output format                                                                        | `.png`, `.svg`, `.gif`                                                                                                                         |
| [chs](https://documentation.image-charts.com/reference/chart-size/)                                   | Chart size (<width>x<height>)                                                              | `400x400`                                                                                                                                      |
| [chdl](https://documentation.image-charts.com/reference/legend-text-and-style/)                       | Text for each series, to display in the legend                                             | `NASDAQ\|FTSE100\|DOW`                                                                                                                         |
| [chdls](https://documentation.image-charts.com/reference/legend-text-and-style/)                      | Chart legend text and style                                                                | `9e9e9e,17`                                                                                                                                    |
| [chg](https://documentation.image-charts.com/reference/grid-lines/)                                   | Solid or dotted grid lines                                                                 | `1,1`, `0,1,1,5`                                                                                                                               |
| [chco](https://documentation.image-charts.com/bar-charts/#examples)                                   | series colors                                                                              | `FFC48C`, `FF0000,00FF00,0000FF`                                                                                                               |
| [chtt](https://documentation.image-charts.com/reference/chart-title/)                                 | chart title                                                                                | `My beautiful chart`                                                                                                                           |
| [chts](https://documentation.image-charts.com/reference/chart-title/)                                 | chart title colors and font size                                                           | `00FF00,17`                                                                                                                                    |
| [chxt](https://documentation.image-charts.com/reference/chart-axis/#visible-axes)                     | Display values on your axis lines or change which axes are shown                           | `y`, `x,y`, `x,x,y`, `x,y,t,r,t`                                                                                                               |
| [chxl](https://documentation.image-charts.com/reference/chart-axis/#custom-axis-labels)               | Custom string axis labels on any axis                                                      | `0:\|Jan\|July\|Jan`, `0:\|Jan\|July\|Jan\|1\|10\|20\|30`                                                                                      |
| [chxs](https://documentation.image-charts.com/reference/chart-axis/#axis-label-styles)                | Font size, color for axis labels, both custom labels and default label values              | `1,0000DD`, `1N*cUSD*Mil,FF0000`, `1N*cEUR*,FF0000`, `2,0000DD,13,0,t`, `0N*p*per-month,0000FF`, `0N*e*,000000\|1N*cUSD*Mil,FF0000\|2N*2sz*,…` |
| [chm](https://documentation.image-charts.com/reference/compound-charts/)                              | compound charts and line fills                                                             |                                                                                                                                                |
| [chls](https://documentation.image-charts.com/line-charts/#line-styles)                               | line thickness and solid/dashed style                                                      | `10`, `3,6,3\|5`                                                                                                                               |
| [chl](https://documentation.image-charts.com/reference/chart-label/)                                  | bar, pie slice, doughnut slice and polar slice chart labels                                | `label1\|label2`, `multi\nline\nlabel1\|label2`                                                                                                |
| [chma](https://documentation.image-charts.com/reference/chart-margin/)                                | chart margins                                                                              | `30,30,30,30`, `40,20`                                                                                                                         |
| [chdlp](https://documentation.image-charts.com/reference/legend-text-and-style/)                      | Position of the legend and order of the legend entries                                     |                                                                                                                                                |
| [chf](https://documentation.image-charts.com/reference/background-fill/)                              | Background Fills                                                                           | `b0,lg,0,f44336,0.3,03a9f4,0.8`                                                                                                                |
| [chan](https://documentation.image-charts.com/reference/animation/)                                   | gif configuration                                                                          | `1200`, `1300\|easeInOutSine`                                                                                                                  |
| [chli](https://documentation.image-charts.com/pie-charts/#inside-label)                               | doughnut chart inside label                                                                | `95K€`, `45%`                                                                                                                                  |
| [icac](https://documentation.image-charts.com/enterprise/)                                            | image-charts enterprise `account_id`                                                       | `accountId`                                                                                                                                    |
| [ichm](https://documentation.image-charts.com/enterprise/)                                            | HMAC-SHA256 signature required to activate paid features                                   | `0785cf22a0381c2e0239e27c126de4181f501d11…`                                                                                                    |
| [icff](https://documentation.image-charts.com/reference/chart-font/)                                  | Default font family for all text from Google Fonts. Use same syntax as Google Font CSS API | `Abel`, `Akronim`, `Alfa Slab One`                                                                                                             |
| [icfs](https://documentation.image-charts.com/reference/chart-font/)                                  | Default font style for all text                                                            | `normal`, `italic`                                                                                                                             |
| [iclocale]()                                                                                          | localization (ISO 639-1)                                                                   | `en`                                                                                                                                           |
| [icretina](https://documentation.image-charts.com/reference/retina/)                                  | retina mode                                                                                | `1`                                                                                                                                            |
| [icqrb](https://documentation.image-charts.com/qr-codes/#background-color)                            | Background color for QR Codes                                                              | `FFFFFF`                                                                                                                                       |
| [icqrf](https://documentation.image-charts.com/qr-codes/#foreground-color)                            | Foreground color for QR Codes                                                              | `000000`                                                                                                                                       |


Since `mjml-chart` is a wrapper for `mjml-image`, `mjml-image` attributes are also available:

| attribute                                 | default values |
| ----------------------------------------- | -------------- |
| [alt](#mjml-image)                        | n/a            |
| [name](#mjml-image)                       | n/a            |
| [srcset](#mjml-image)                     | n/a            |
| [title](#mjml-image)                      | n/a            |
| [rel](#mjml-image)                        | n/a            |
| [align](#mjml-image)                      | center         |
| [border](#mjml-image)                     | 0              |
| [border-bottom](#mjml-image)              | n/a            |
| [border-left](#mjml-image)                | n/a            |
| [border-right](#mjml-image)               | n/a            |
| [border-top](#mjml-image)                 | n/a            |
| [border-radius](#mjml-image)              | n/a            |
| [container-background-color](#mjml-image) | n/a            |
| [fluid-on-mobile](#mjml-image)            | n/a            |
| [padding](#mjml-image)                    | 10px 25px      |
| [padding-bottom](#mjml-image)             | n/a            |
| [padding-left](#mjml-image)               | n/a            |
| [padding-right](#mjml-image)              | n/a            |
| [padding-top](#mjml-image)                | n/a            |
| [max-height](#mjml-image)                 | n/a            |
| [font-size](#mjml-image)                  | 13px           |
| [usemap](#mjml-image)                     | n/a            |


Note:
- `src` attribute is not customizable, it's generated by `mjml-chart`
- `width` and `height` are automatically generated by `mjml-chart` based on the `chs` attribute

