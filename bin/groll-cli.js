#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const program = require('commander');

const log = require('../lib/log.js');
let pkg = require('../package.json');

// 检测当前运行的 Node 版本
if (!semver.satisfies(process.version, pkg.engines.node)) {
  log.error(
      `You are using Node ${process.version}, 
      but this version of ifly-cli requires Node ${pkg.engines.node}.\n
      Please upgrade your Node version.
      `
  );
  process.exit(1);
}

// 定义当前版本
program.version(pkg.version);

// 定义使用方法
program.usage('<command>');

program
	.command('init')
	.description('Generate a new project by template.')
	.alias('i')
	.action(() => {
		require('../cmd/init')();
	});

program.parse(process.argv);
if(!program.args.length){
  program.help();
}


