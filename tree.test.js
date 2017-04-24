const tree = require('./tree');

test('', () => {
  const input = [
    'dir0/ghi.txt',
    'dir1/dirOmega/apple.txt',
    'dir1/wvu.txt',
  ];
  const expected = {
    dir0: {
      childrenDirs: {},
      childrenFiles: ['ghi.txt'],
    },
    dir1: {
      childrenDirs: {
        dirOmega: {
          childrenDirs: {},
          childrenFiles: ['apple.txt'],
        },
      },
      childrenFiles: 'wvu.txt',
    }
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});
