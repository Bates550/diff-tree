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
  return _drawTree(tree, 0, 1, 0);
}

const _drawTree = (tree, depth, numSiblingDirs, numSiblingFiles) => {
  return ramda.keys(tree).reduce((treeStr, key, i) => {
    const isLastDir = i + 1 === numSiblingDirs;
    const hasNoSiblingFiles = numSiblingFiles === 0;
    const isLastItem = isLastDir && hasNoSiblingFiles;
    const dir = tree[key];
    let growingTreeStr = treeStr;
    let lastDirDepthStr = `${isLastItem ? LAST_CHILD : CHILD}${PREFIX_SPACE}`;
    const numLastDirDepthStrs = depth > 0 ? 1 : 0;
    const dirDepthStr = `${isLastItem ? ' ' : VERT_SPACER}   `;
    const numDirDepthStrs = depth <= 0 ? 0 : depth - 1;
    growingTreeStr = growingTreeStr.concat(`  ${dirDepthStr.repeat(numDirDepthStrs)}${lastDirDepthStr.repeat(numLastDirDepthStrs)}${key}\n`);
    debugger;
    if (isNotEmpty(dir.childrenDirs)) {
      growingTreeStr = growingTreeStr.concat(_drawTree(dir.childrenDirs, depth + 1, ramda.keys(dir.childrenDirs).length, dir.childrenFiles.length));
    }
    dir.childrenFiles.map((file, i, files) => {
      const childSymbol = i === files.length - 1 ? LAST_CHILD : CHILD;
      const { status, path } = file;
      const depthStr = `${isLastItem ? ' ' : VERT_SPACER}   `.repeat(depth);
      growingTreeStr = growingTreeStr.concat(`${status} ${depthStr}${childSymbol}${PREFIX_SPACE}${path}\n`);
    });
    return growingTreeStr;
  }, '');
};

module.exports = drawTree;
