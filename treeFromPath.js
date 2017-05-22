function treeFromPath(path) {
  return _treeFromPath(path, 0);
}

function _treeFromPath(path, i) {
  const pathComponents = path.split('/');
  const currentDir = pathComponents[0];
  const nextDir = pathComponents[1];
  const dirs = pathComponents.slice(1, -1);
  const file = pathComponents[pathComponents.length - 1];
  debugger;
  if (i === 0) {
    debugger;
    if (currentDir === file) {
      debugger;
      return {
        '/': {
          childrenDirs: {},
          childrenFiles: [file],
        }
      }
    }
    debugger;
    return {
      '/': {
        childrenDirs: _treeFromPath(pathComponents.join('/'), i + 1),
        childrenFiles: [],
      }
    }
  } else if (nextDir !== file) {
    const stepDown = pathComponents.slice(1).join('/');
    debugger;
    return {
      [currentDir]: {
        childrenDirs: _treeFromPath(stepDown, i + 1),
        childrenFiles: [],
      }
    };
  }
  debugger;
  return {
    [currentDir]: {
      childrenDirs: {},
      childrenFiles: [file],
    }
  };
}

module.exports = treeFromPath;
