function treeFromChange(change) {
  if (typeof change === 'string') {
    throw new Error(
      'treeFromChange expects argument of the form: \
      { path : String, change : String }'
    );
  }
  if (change.path === '' || change.path === undefined ) {
    throw new Error('Cannot generate tree from empty path');
  }

  return _treeFromChange(change, true);
}

function _treeFromChange(change, isFirst) {
  const { path, status } = change;
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
          childrenFiles: [{ path: file, status, }],
        }
      }
    }
    return {
      '/': {
        childrenDirs: _treeFromChange({ path: pathComponents.join('/'), status }, false),
        childrenFiles: [],
      }
    }
  } else if (nextDir !== file) {
    const nextPath = pathComponents.slice(1).join('/');
    return {
      [currentDir]: {
        childrenDirs: _treeFromChange({ path: nextPath, status }, false),
        childrenFiles: [],
      }
    };
  }
  return {
    [currentDir]: {
      childrenDirs: {},
      childrenFiles: [{ path: file, status }],
    }
  };
}

module.exports = treeFromChange;
