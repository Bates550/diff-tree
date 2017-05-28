const exec = require('child_process').exec;
const tree = require('./tree');
const diffStrToChanges = require('./diffStrToChanges');
const print = require('./print');

const diffAgainstBranch = process.argv[2];
exec(`git diff --name-status ${diffAgainstBranch}`, (err, stdout, stderr) => {
  const changes = diffStrToChanges(stdout);
  print('g diff --name-status:', stdout);
  print('changes:', changes);
  print('tree(changes):', tree(changes));
});
