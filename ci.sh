#!/usr/bin/env bash

release_changelog_push () {
  npm run release --release_version=$1
}

npm run --silent generate-swagger && \
npm run --silent generate && \
npm run --silent test && \
npm run --silent test-coverage && \

echo "Update deps"
UPDATR_RESULT=$(npm run --silent updtr)
echo $UPDATR_RESULT

(git add package.json || true) && (git add package-lock.json || true) && (git commit -m 'update deps' || true)

SWAGGER_VERSION=$(jq '.info.version' ./scripts/swagger.json)
# Remove all "
SWAGGER_VERSION=${SWAGGER_VERSION//\"/}
echo $SWAGGER_VERSION

MJML_CHART_VERSION=$(jq '.version' ./package.json)
# Remove all "
MJML_CHART_VERSION=${MJML_CHART_VERSION//\"/}

SWAGGER_VERSION_SPLIT=(${SWAGGER_VERSION//./ })

MJML_CHART_VERSION_SPLIT=(${MJML_CHART_VERSION//./ })

MJML_CHART_MAJOR_VERSION=${MJML_CHART_VERSION_SPLIT[0]}
MJML_CHART_MINOR_VERSION=${MJML_CHART_VERSION_SPLIT[1]}
MJML_CHART_PATCH_VERSION=${MJML_CHART_VERSION_SPLIT[2]}

# Check if major/minor version of image-charts have changed to update mjml-chart version
if [[ $MJML_CHART_MAJOR_VERSION -ne ${SWAGGER_VERSION_SPLIT[0]} || $MJML_CHART_MINOR_VERSION -ne ${SWAGGER_VERSION_SPLIT[1]} ]]
then
  release_changelog_push $SWAGGER_VERSION
# Check if deps have been bumped. Updtr return "up-to-date" if no deps are outdated
elif [[ $(echo $UPDATR_RESULT | grep -c "up-to-date") -eq 0 ]]
then
  release_changelog_push "$MJML_CHART_MAJOR_VERSION.$MJML_CHART_MINOR_VERSION.$(($MJML_CHART_PATCH_VERSION+1))"
fi

npm run --silent changelog-commit
npm run --silent git-push
