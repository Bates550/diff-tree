function treeFromPath(path) {
  if (path === '') {
    throw new Error('Cannot generate tree from empty path');
  }
  return _treeFromPath(path, 0);
}

function _treeFromPath(path, i) {
  const pathComponents = path.split('/');
  const currentDir = pathComponents[0];
  const nextDir = pathComponents[1];
  const dirs = pathComponents.slice(1, -1);
  const file = pathComponents[pathComponents.length - 1];
  if (i === 0) {
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
        childrenDirs: _treeFromPath(pathComponents.join('/'), i + 1),
        childrenFiles: [],
      }
    }
  } else if (nextDir !== file) {
    const stepDown = pathComponents.slice(1).join('/');
    return {
      [currentDir]: {
        childrenDirs: _treeFromPath(stepDown, i + 1),
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
