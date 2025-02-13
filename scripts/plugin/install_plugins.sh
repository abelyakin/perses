#!/bin/sh
set -e
PLUGINS_PATH="../../plugins-archive"
REPO_URL="https://nexus.cldx.io/repository/raw/mon/perses/plugins"
LENGTH=$(yq length  plugin.yaml)
mkdir -p "$PLUGINS_PATH"
for i in $(seq 0 $(($LENGTH - 1 )))
do
	nam=$(yq -r ".[$i].name" plugin.yaml)
	ver=$(yq -r ".[$i].version" plugin.yaml)
 	filename=$(echo "$nam-$ver.tar.gz")
	echo $filename
    echo $REPO_URL/$filename
	wget --no-check-certificate  -O "$PLUGINS_PATH/$filename" "$REPO_URL/$filename"
done
