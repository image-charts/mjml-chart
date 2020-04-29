module.exports = (imageChartsVersion = require('./scripts/swagger.json').info.version,
                  packageVersion = require('./package.json').version) => {
  const [chartsMajor, chartsMinor] = imageChartsVersion.split('.');
  const [packageMajor, packageMinor, packagePatch] = packageVersion.split('.');

  if (packageMajor === chartsMajor && packageMinor === chartsMinor) {
    const newVersion = [packageMajor, packageMinor, parseInt(packagePatch) + 1].join('.');
    return newVersion;
  } else {
    return imageChartsVersion;
  }
}
