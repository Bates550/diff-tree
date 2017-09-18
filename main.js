#!/usr/bin/env node
const program = require('commander');
const R = require('ramda');
const exec = require('child_process').exec;
const tree = require('./src/tree');
const diffStrToChanges = require('./src/diffStrToChanges');
const drawTree = require('./src/drawTree');
const print = require('./src/print');
const interactive = require('./src/interactive');

const execDiffandDrawTree = (branchA, branchB) => {
  exec(`git diff --name-status ${branchA}...${branchB}`, (err, stdout, stderr) => {
    const changes = diffStrToChanges(stdout);
    const treeData = tree(changes);
    console.log(drawTree(treeData));
  });
};

program
  .usage('[options] [branchA [branchB]]')
  .option('-i --interactive', 'Interactive mode', false)
  .parse(process.argv);

if (program.interactive) {
  console.log('do interactive');
  interactive(execDiffandDrawTree);
} else { 
  const diffAgainstBranch = R.defaultTo('master', program.args[0]);
  if (program.args.length <= 1) {
    exec('git symbolic-ref --short HEAD', (err, stdout, stderr) => {
      const checkedOutBranch = stdout.trim();
      execDiffandDrawTree(diffAgainstBranch, checkedOutBranch);
    });
  } else {
    const branchB = program.args[1];
    execDiffandDrawTree(diffAgainstBranch, branchB);
  }
}
