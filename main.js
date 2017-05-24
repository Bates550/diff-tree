const exec = require('child_process').exec;
const tree = require('./tree');
const print = require('./print');

const diffAgainstBranch = process.argv[2];
exec(`git diff --name-only ${diffAgainstBranch}`, (err, stdout, stderr) => {
  const paths = stdout.split('\n').slice(0, -1);
  print('tree(paths):', tree(paths));
});

