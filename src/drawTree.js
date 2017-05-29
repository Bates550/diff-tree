const ramda = require('ramda');

const print = console.log;

const CHILD = '├';
const LAST_CHILD = '└';
const HORZ_SPACER = '─';
const VERT_SPACER = '│';
const PREFIX_SPACE = `${HORZ_SPACER}${HORZ_SPACER} `;

const isNotEmpty = (x) => {
  return !ramda.isEmpty(x);
}

const drawTree = (tree) => {
  return ramda.keys(tree).reduce((treeStr, key) => {
    let growingTreeStr = treeStr;
    growingTreeStr = growingTreeStr.concat(`  ${key}\n`);
    const dir = tree[key];
    if (isNotEmpty(dir.childrenDirs)) {
      drawTree(dir.childrenDirs);
    }
    dir.childrenFiles.map((file, i, files) => {
      const boxChar = i === files.length - 1 ? LAST_CHILD : CHILD;
      const { status, path } = file;
      growingTreeStr = growingTreeStr.concat(`${status} ${boxChar}${PREFIX_SPACE}${path}\n`);
    });
    return growingTreeStr;
  }, '');
};

module.exports = drawTree;
