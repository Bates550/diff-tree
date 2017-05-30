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
  return _drawTree(tree, 0);
}

const _drawTree = (tree, depth) => {
  return ramda.keys(tree).reduce((treeStr, key) => {
    let growingTreeStr = treeStr;
    const lastDirDepthStr = `${CHILD}${PREFIX_SPACE}`;
    const numLastDirDepthStrs = depth > 0 ? 1 : 0;
    const dirDepthStr = `${VERT_SPACER}   `;
    const numDirDepthStrs = depth <= 0 ? 0 : depth - 1;
    growingTreeStr = growingTreeStr.concat(`  ${dirDepthStr.repeat(numDirDepthStrs)}${lastDirDepthStr.repeat(numLastDirDepthStrs)}${key}\n`);
    const dir = tree[key];
    if (isNotEmpty(dir.childrenDirs)) {
      growingTreeStr = growingTreeStr.concat(_drawTree(dir.childrenDirs, depth + 1));
    }
    dir.childrenFiles.map((file, i, files) => {
      const childSymbol = i === files.length - 1 ? LAST_CHILD : CHILD;
      const { status, path } = file;
      const depthStr = `${VERT_SPACER}   `.repeat(depth);
      growingTreeStr = growingTreeStr.concat(`${status} ${depthStr}${childSymbol}${PREFIX_SPACE}${path}\n`);
    });
    return growingTreeStr;
  }, '');
};

module.exports = drawTree;
