function treeFromPath(path) {
  if (path === '') {
    throw new Error('Cannot generate tree from empty path');
  }
  return _treeFromPath(path, true);
}

function _treeFromPath(path, isFirst) {
  const pathComponents = path.split('/');
  const currentDir = pathComponents[0];
  const nextDir = pathComponents[1];
  const dirs = pathComponents.slice(1, -1);
  const file = pathComponents[pathComponents.length - 1];
  if (isFirst) {
    if (currentDir === file) {
      return {
        '/': {
          childrenDirs: {},
          childrenFiles: [file],
        }
      }
    }
    return {
      '/': {
        childrenDirs: _treeFromPath(pathComponents.join('/'), false),
        childrenFiles: [],
      }
    }
  } else if (nextDir !== file) {
    const stepDown = pathComponents.slice(1).join('/');
    return {
      [currentDir]: {
        childrenDirs: _treeFromPath(stepDown, false),
        childrenFiles: [],
      }
    };
  }
  return {
    [currentDir]: {
      childrenDirs: {},
      childrenFiles: [file],
    }
  };
}

module.exports = treeFromPath;
