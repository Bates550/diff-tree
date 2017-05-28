const treeFromChange = require('./treeFromChange');

test('empty string passed in to throw an error', () => {
  expect(() => {
    treeFromChange('')
  }).toThrow();
});

test('undefined passed in to throw an error', () => {
  expect(() => {
    treeFromChange(undefined)
  }).toThrow();
});

test('empty object passed in to throw an error', () => {
  expect(() => {
    treeFromChange({})
  }).toThrow();
});

test('object with empty keys passed in to throw an error', () => {
  expect(() => {
    treeFromChange({ path: '', status: '' })
  }).toThrow();
});

test('0 directories deep', () => {
  const input = { path: 'abc.txt', status: 'M' };
  const expected = {
    '/': {
      childrenDirs: {},
      childrenFiles: [{ path: 'abc.txt', status: 'M' }],
    },
  };
  const result = treeFromChange(input);
  expect(result).toEqual(expected);
});

test('1 directory deep', () => {
  const input = { path: 'dir0/def.txt', status: 'M' };
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'def.txt', status: 'M' }],
        }
      },
      childrenFiles: [],
    },
  };
  const result = treeFromChange(input);
  expect(result).toEqual(expected);
});

test('2 directories deep', () => {
  const input = { path: 'dir0/dir1/ghi.txt', status: 'M' };
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dir1: {
              childrenDirs: {},
              childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
            }
          },
          childrenFiles: [],
        }
      },
      childrenFiles: [],
    },
  };
  const result = treeFromChange(input);
  expect(result).toEqual(expected);
});

test('3 directories deep', () => {
  const input = { path: 'dir0/dir1/dir2/ghi.txt', status: 'M' };
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dir1: {
              childrenDirs: {
                dir2: {
                  childrenDirs: {},
                  childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
                },
              },
              childrenFiles: [],
            }
          },
          childrenFiles: [],
        }
      },
      childrenFiles: [],
    },
  };
  const result = treeFromChange(input);
  expect(result).toEqual(expected);
});
