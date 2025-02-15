#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { CdkStack } = require('../lib/cdk-stack');

const app = new cdk.App();
new CdkStack(app, 'CdkStack', {
  env: { account: '135808949624', region: 'eu-central-1' },
});
