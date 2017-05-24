const tree = require('./tree');

test('', () => {
  const input = [
    'abc.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {},
      childrenFiles: ['abc.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    'abc.txt',
    'dir0/ghi.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: ['ghi.txt'],
        },
      },
      childrenFiles: ['abc.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    'abc.txt',
    'def.txt',
    'dir0/ghi.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: ['ghi.txt'],
        },
      },
      childrenFiles: ['abc.txt', 'def.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    'abc.txt',
    'def.txt',
    'dir0/ghi.txt',
    'dir0/jkl.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: ['ghi.txt', 'jkl.txt'],
        },
      },
      childrenFiles: ['abc.txt', 'def.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    'abc.txt',
    'def.txt',
    'dir0/ghi.txt',
    'dir1/jkl.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: ['ghi.txt'],
        },
        dir1: {
          childrenDirs: {},
          childrenFiles: ['jkl.txt'],
        },
      },
      childrenFiles: ['abc.txt', 'def.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    'abc.txt',
    'def.txt',
    'dir0/ghi.txt',
    'dir0/dirAlpha/jkl.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: ['jkl.txt'],
            },
          },
          childrenFiles: ['ghi.txt'],
        },
      },
      childrenFiles: ['abc.txt', 'def.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    'abc.txt',
    'def.txt',
    'dir0/ghi.txt',
    'dir0/dirAlpha/jkl.txt',
    'dir0/dirAlpha/mno.txt',
  ];
  const expected = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: ['jkl.txt', 'mno.txt'],
            },
          },
          childrenFiles: ['ghi.txt'],
        },
      },
      childrenFiles: ['abc.txt', 'def.txt'],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});
