const ramda = require('ramda');
const { generateFileLine, generateDirLine } = require('./generateLines')

const isNotEmpty = (x) => {
  return !ramda.isEmpty(x);
};

const isLast = (i, numSiblingFiles, numSiblingDirs) => {
  const isLastDir = i === numSiblingDirs;
  const hasNoSiblingFiles = numSiblingFiles === 0;
  return isLastDir && hasNoSiblingFiles;
};

const drawTree = (tree) => {
  return _drawTree({
    areAncestorsLastChildren: [],
    depth: 0,
    numSiblingDirs: 0,
    numSiblingFiles: 0,
    tree,
  });
};

const _drawTree = ({
  areAncestorsLastChildren,
  depth,
  numSiblingDirs,
  numSiblingFiles,
  tree,
}) => {
  return ramda.keys(tree).reduce((treeStr, key, i) => {
    const isLastItem = isLast(i, numSiblingFiles, numSiblingDirs);
    const ancestorsForChild = areAncestorsLastChildren.concat(isLastItem);
    const dir = tree[key];
    let growingTreeStr = treeStr;
    growingTreeStr = growingTreeStr.concat(
      generateDirLine({
        areAncestorsLastChildren,
        depth,
        isLastItem,
        key,
      })
    );
    if (isNotEmpty(dir.childrenDirs)) {
      growingTreeStr = growingTreeStr.concat(
        _drawTree({
          areAncestorsLastChildren: ancestorsForChild,
          depth: depth + 1,
          numSiblingDirs: ramda.keys(dir.childrenDirs).length - 1,
          numSiblingFiles: dir.childrenFiles.length,
          tree: dir.childrenDirs,
        })
      );
    }
    dir.childrenFiles.map((file, j, files) => {
      const fileLine = generateFileLine({
        areAncestorsLastChildren: ancestorsForChild,
        file,
        isLastChild: j === files.length - 1,
      });
      growingTreeStr = growingTreeStr.concat(fileLine);
    });
    return growingTreeStr;
  }, '');
};

module.exports = drawTree;
