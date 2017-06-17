#!/usr/bin/env node

const exec = require('child_process').exec;
const tree = require('./src/tree');
const diffStrToChanges = require('./src/diffStrToChanges');
const drawTree = require('./src/drawTree');
const print = require('./src/print');

const diffAgainstBranch = process.argv[2];
exec('git symbolic-ref --short HEAD', (err, stdout, stderr) => {
  const thisBranch = stdout.trim();
  exec(`git diff --name-status ${diffAgainstBranch}...${thisBranch}`, (err, stdout, stderr) => {
    const changes = diffStrToChanges(stdout);
    const treeData = tree(changes);
    console.log(drawTree(treeData));
  });
});
