const exec = require('child_process').exec;
const tree = require('./tree');
const print = require('./print');

const diffAgainstBranch = process.argv[2];
exec(`git diff --name-status ${diffAgainstBranch}`, (err, stdout, stderr) => {
  const changes = nameStatusToTree(stdout);
  print('changes:', changes);
  print('tree(changes):', tree(changes));
});

const nameStatusToTree = (nameStatus) => {
  const trimmedNameStatus = nameStatus.slice(0, -1).split('\n');
  const changes = trimmedNameStatus.map((change) => {
    const [status, path] = change.split('\t');
    return { status, path };
  });
  return changes;
}
