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
  return _drawTree(tree, 0, 1);
}

const _drawTree = (tree, depth, numSiblingDirs) => {
  return ramda.keys(tree).reduce((treeStr, key, i) => {
    const dir = tree[key];
    let growingTreeStr = treeStr;
    let lastDirDepthStr = `${i + 1 === numSiblingDirs ? LAST_CHILD : CHILD}${PREFIX_SPACE}`;
    const numLastDirDepthStrs = depth > 0 ? 1 : 0;
    const dirDepthStr = `${i + 1 === numSiblingDirs ? ' ' : VERT_SPACER}   `;
    const numDirDepthStrs = depth <= 0 ? 0 : depth - 1;
    growingTreeStr = growingTreeStr.concat(`  ${dirDepthStr.repeat(numDirDepthStrs)}${lastDirDepthStr.repeat(numLastDirDepthStrs)}${key}\n`);
    if (isNotEmpty(dir.childrenDirs)) {
      growingTreeStr = growingTreeStr.concat(_drawTree(dir.childrenDirs, depth + 1, ramda.keys(dir.childrenDirs).length));
    }
    dir.childrenFiles.map((file, i, files) => {
      const childSymbol = i === files.length - 1 ? LAST_CHILD : CHILD;
      const { status, path } = file;
      const depthStr = `${i + 1 === numSiblingDirs ? ' ' : VERT_SPACER}   `.repeat(depth);
      growingTreeStr = growingTreeStr.concat(`${status} ${depthStr}${childSymbol}${PREFIX_SPACE}${path}\n`);
    });
    return growingTreeStr;
  }, '');
};

module.exports = drawTree;
