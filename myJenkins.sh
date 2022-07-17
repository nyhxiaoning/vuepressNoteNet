#!/bin/sh -l

npm install --registry=https://registry.npm.taobao.org
npm run build
docker build -t jenkins-test .