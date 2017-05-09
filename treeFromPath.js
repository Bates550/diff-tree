function treeFromPath(path) {
  if (path === '') { return; }
  const pathComponents = path.split('/');
  const currentDir = pathComponents.slice(0, 1);
  const dirs = pathComponents.slice(1, -1);
  const file = pathComponents.slice(-1);
  debugger;
  const childrenDirs = dirs.length === 0
    ? []
    : treeFromPath(dirs.concat(file).join('/'))
  ;
  return {
    [currentDir]: {
      childrenDirs,
      childrenFiles: [file],
    }
  };
}

module.exports = treeFromPath;
