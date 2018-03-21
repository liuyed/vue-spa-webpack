#!/bin/bash
echo ">>> npm install start"
npm config set registry http://registry.npm.taobao.org
npm install --production
echo ">>> npm install complete"
echo "compile static files..."
cd ../
npm run test
echo "success"