#!/bin/bash
perses_workspaces=$(jq -r '.workspaces[]' < package.json)
function bumpVersion() {
  version="${1}"
  cx_workspaces="${@:2}"
  if [[ "${version}" == v* ]]; then
    version="${version:1}"
  fi

    for workspace in ${cx_workspaces}; do
     sed -E -i "s|(\"version\": )\".+\"|\1\"${version}\"|" "$workspace"/package.json
    done

  for workspace in ${perses_workspaces}; do
    cd $workspace
    for cx_ws in $cx_workspaces; do
        sed -E -i "s|(\"@perses-dev/${cx_ws}\": )\".+\"|\1\"${version}\"|" package.json
    done
     cd .. 
  done

  # increase the version on all packages
  npm i --package-lock-only
}


function checkPackage() {
  version="${1}"
  cx_workspaces="${@:2}"
  if [[ "${version}" == v* ]]; then
    version="${version:1}"
  fi
  for workspace in ${cx_workspaces}; do
    cd "${workspace}"
    package_version=$(npm run env | grep npm_package_version | cut -d= -f2-)
    if [ "${version}" != "${package_version}" ]; then
      echo "version of ${workspace} is not the correct one"
      echo "expected one: ${version}"
      echo "current one: ${package_version}"
      echo "please use script/cx_ui_release --release ${version} ${publish_workspaces}"
      exit 1
    fi
    cd ..
  done
}



if [[ $1 == "--releasa" ]]; then
  bumpVersion $2 "${@:3}"
fi

if [[ $1 == "--check-version" ]]; then
  checkPackage $2 "${@:3}"
fi