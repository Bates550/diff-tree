const exec = require('child_process').exec;
const tree = require('./src/tree');
const diffStrToChanges = require('./src/diffStrToChanges');
const drawTree = require('./src/drawTree');
const print = require('./src/print');

const diffAgainstBranch = process.argv[2];
exec(`git diff --name-status ${diffAgainstBranch}`, (err, stdout, stderr) => {
  const changes = diffStrToChanges(stdout);
  const treeData = tree(changes);
  print('tree(changes):', tree(changes));
  console.log(drawTree(treeData));
});
