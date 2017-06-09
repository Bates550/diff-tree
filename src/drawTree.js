const ramda = require('ramda');

const print = console.log;

const CHILD = '├';
const LAST_CHILD = '└';
const HORZ_SPACER = '─';
const VERT_SPACER = '│';
const PREFIX_SPACE = `${HORZ_SPACER}${HORZ_SPACER} `;

const isNotEmpty = (x) => {
  return !ramda.isEmpty(x);
};

const drawTree = (tree) => {
  return _drawTree(tree, 0, 1, 0, []);
};

const generateDepthStr = (areAncestorsLastChildren) => {
  return areAncestorsLastChildren.reduce((str, ancestor) => {
    const spacer = ancestor ? ' ' : VERT_SPACER;
    return str.concat(`${spacer}   `);
  }, '');
}

const generateFileLine = (file, { isLastChild, isLastItem, depth }) => {
  childSymbol = isLastChild ? LAST_CHILD : CHILD;
  const { status, path } = file;
  const depthStr = `${isLastItem ? ' ' : VERT_SPACER}   `.repeat(depth);
  return `${status} ${depthStr}${childSymbol}${PREFIX_SPACE}${path}\n`;
};

const generateDirLine = ({ isLastItem, depth, key }) => {
  const lastDirDepthStr = `${isLastItem ? LAST_CHILD : CHILD}${PREFIX_SPACE}`;
  const dirDepthStr = `${isLastItem ? ' ' : VERT_SPACER}   `;
  const numLastDirDepthStrs = depth > 0 ? 1 : 0;
  const numDirDepthStrs = depth <= 0 ? 0 : depth - 1;
  return `  ${dirDepthStr.repeat(numDirDepthStrs)}${lastDirDepthStr.repeat(numLastDirDepthStrs)}${key}\n`
};

const isLast = (i, numSiblingFiles, numSiblingDirs) => {
  const isLastDir = i === numSiblingDirs;
  const hasNoSiblingFiles = numSiblingFiles === 0;
  return isLastDir && hasNoSiblingFiles;
};

const _drawTree = (tree, depth, numSiblingDirs, numSiblingFiles, areAncestorsLastChildren) => {
  return ramda.keys(tree).reduce((treeStr, key, i) => {
    const isLastItem = isLast(i, numSiblingFiles, numSiblingDirs);
    const dir = tree[key];
    let growingTreeStr = treeStr;
    growingTreeStr = growingTreeStr.concat(generateDirLine({
      isLastItem,
      depth,
      key
    }));
    debugger;
    if (isNotEmpty(dir.childrenDirs)) {
      growingTreeStr = growingTreeStr.concat(_drawTree(dir.childrenDirs, depth + 1, ramda.keys(dir.childrenDirs).length - 1, dir.childrenFiles.length, isLastItem));
    }
    dir.childrenFiles.map((file, j, files) => {
      const fileLine = generateFileLine(file, {
        depth,
        isLastChild: j === files.length - 1,
        isLastItem,
      });
      growingTreeStr = growingTreeStr.concat(fileLine);
    });
    return growingTreeStr;
  }, '');
};

module.exports = {
  drawTree,
  generateDepthStr,
};
