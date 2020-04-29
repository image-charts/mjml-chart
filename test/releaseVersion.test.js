import { expect } from 'chai';

const releaseVersion = require('../releaseVersion')

describe('releaseVersion script', function () {
  it('should return patch version if major/minor are the same between image-charts and mjml-charts', function () {
    expect(releaseVersion('5.5.0', '5.5.0')).to.equal('5.5.1')
  })
  it('should return image-charts version if new version of image-charts is available', () => {
    expect(releaseVersion('5.5.0', '5.4.0')).to.equal('5.5.0')
  })
  it('should use mjml-chart version of project', () => {
    const packageVersion = require('../package.json').version
    const [packageMajor, packageMinor, packagePatch] = packageVersion.split('.');
    expect(releaseVersion()).to.equal([packageMajor, packageMinor, parseInt(packagePatch) + 1].join('.'))
  })
})
