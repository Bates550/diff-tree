const { VERT_SPACER, LAST_CHILD, CHILD, PREFIX_SPACE } = require('./constants');

const generateDepthStr = (areAncestorsLastChildren) => {
  return areAncestorsLastChildren.reduce((str, ancestor, i) => {
    if (i === 0) {
      return str;
    }
    const spacer = ancestor ? ' ' : VERT_SPACER;
    return str.concat(`${spacer}   `);
  }, '');
}

const generateFileLine = ({ file, isLastChild, areAncestorsLastChildren }) => {
  const childSymbol = isLastChild ? LAST_CHILD : CHILD;
  const { status, path } = file;
  const depthStr = generateDepthStr(areAncestorsLastChildren);
  return `${status} ${depthStr}${childSymbol}${PREFIX_SPACE}${path}\n`;
};

const generateDirLine = ({ isLastItem, key, areAncestorsLastChildren }) => {
  const depth = areAncestorsLastChildren.length;
  const lastDirDepthStr = `${isLastItem ? LAST_CHILD : CHILD}${PREFIX_SPACE}`;
  const dirDepthStr = generateDepthStr(areAncestorsLastChildren);
  const numLastDirDepthStrs = depth > 0 ? 1 : 0;
  const numDirDepthStrs = depth <= 0 ? 0 : depth - 1;
  return `  ${dirDepthStr}${lastDirDepthStr.repeat(numLastDirDepthStrs)}${key}\n`
};

module.exports = {
  generateFileLine,
  generateDirLine,
}
