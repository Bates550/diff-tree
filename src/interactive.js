const inquirer = require('inquirer');
const autocomplete = require('inquirer-autocomplete-prompt')
const fuzzy = require('fuzzy');
const exec = require('child_process').exec;

inquirer.registerPrompt('autocomplete', autocomplete);

let branches = [];

const fuzzySearch = (input, list) => (
  fuzzy
    .filter(input, list)
    .map(el => input ? el.original : el)
);

const getBranches = (answers, input) => {
  return new Promise((resolve, reject) => {
    exec('git branch -a --sort creatordate', (err, stdout, stderr) => {
      branches = stdout
        .split('\n')
        .map(str => str.replace(/(.+->|\*)/, '').trim())
        .filter(str => str)
      resolve(fuzzySearch(input, branches));
    });
  });
};
  
module.exports = (cb) => {
  inquirer.prompt([
    {
      type: 'autocomplete',
      name: 'diffAgainstBranch',
      message: 'Which branch do you want to compare against?',
      pageSize: 6,
      source: getBranches,
    }, 
    {
      type: 'autocomplete',
      name: 'targetBranch',
      message: 'What is the target branch?',
      pageSize: 6,
      source: (answers, input) => (
        new Promise(resolve => {
          branches = branches.filter(br => br !== answers.diffAgainstBranch);
          resolve(fuzzySearch(input, branches));
        })
      ),
    }, 
  ]).then(function(answers) {
    const { diffAgainstBranch, targetBranch} = answers;
    cb(diffAgainstBranch, targetBranch);
  })
}
