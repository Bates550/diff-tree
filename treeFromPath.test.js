const treeFromPath = require('./treeFromPath');

const input = [
  'abc.txt',
  'dir0/def.txt',
  'dir0/dir1/ghi.txt',
];

test('0 directories deep', () => {
  const input = 'abc.txt';
  const expected = {
    '/': {
      childrenDirs: {},
      childrenFiles: ['abc.txt'],
    },
  };
  const result = treeFromPath(input);
  expect(result).toEqual(expected);
});

test('1 directory deep', () => {
  const input = 'dir0/def.txt';
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: ['def.txt'],
        }
      },
      childrenFiles: [],
    },
  };
  const result = treeFromPath(input);
  expect(result).toEqual(expected);
});

test('2 directories deep', () => {
  const input = 'dir0/dir1/ghi.txt';
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dir1: {
              childrenDirs: {},
              childrenFiles: ['ghi.txt'],
            }
          },
          childrenFiles: [],
        }
      },
      childrenFiles: [],
    },
  };
  const result = treeFromPath(input);
  expect(result).toEqual(expected);
});

test('3 directories deep', () => {
  const input = 'dir0/dir1/dir2/ghi.txt';
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dir1: {
              childrenDirs: {
                dir2: {
                  childrenDirs: {},
                  childrenFiles: ['ghi.txt'],
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
  const result = treeFromPath(input);
  expect(result).toEqual(expected);
});
