const diffStrToChanges = (diffStr) => {
  if (diffStr === '') {
    return []; 
  }
  const trimmedDiffStr = diffStr.slice(0, -1).split('\n');
  const changes = trimmedDiffStr.map((change) => {
    const [status, path] = change.split('\t');
    return { status, path };
  });
  return changes;
}

module.exports = diffStrToChanges;
