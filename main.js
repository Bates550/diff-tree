#!/usr/bin/env node

const exec = require('child_process').exec;
const tree = require('./src/tree');
const diffStrToChanges = require('./src/diffStrToChanges');
const drawTree = require('./src/drawTree');
const print = require('./src/print');

const execDiffandDrawTree = (branchB) => {
  exec(`git diff --name-status --no-renames ${diffAgainstBranch}...${branchB}`, (err, stdout, stderr) => {
    const changes = diffStrToChanges(stdout);
    const treeData = tree(changes);
    console.log(drawTree(treeData));
  });
};

const diffAgainstBranch = process.argv[2] || 'master';
if (process.argv[3] === undefined) {
  exec('git symbolic-ref --short HEAD', (err, stdout, stderr) => {
    const checkedOutBranch = stdout.trim();
    execDiffandDrawTree(checkedOutBranch);
  });
} else {
  const branchB = process.argv[3];
  execDiffandDrawTree(branchB);
}
