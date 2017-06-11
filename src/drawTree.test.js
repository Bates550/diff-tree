const drawTree = require('./drawTree');

test('', () => {
  const input = {
    '/': {
      childrenDirs: {},
      childrenFiles: [{ path: 'abc.txt', status: 'M' }],
    },
  };
  const expected = '\
  /\n\
M └── abc.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [{ path: 'abc.txt', status: 'M' }],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
M └── abc.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [
            { path: 'ghi.txt', status: 'M' },
            { path: 'jkl.txt', status: 'M' },
          ],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   ├── ghi.txt\n\
M │   └── jkl.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
        dir1: {
          childrenDirs: {},
          childrenFiles: [{ path: 'jkl.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── ghi.txt\n\
  ├── dir1\n\
M │   └── jkl.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: [{ path: 'jkl.txt', status: 'M' }],
            },
          },
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
  │   ├── dirAlpha\n\
M │   │   └── jkl.txt\n\
M │   └── ghi.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: [
                { path: 'jkl.txt', status: 'M' },
                { path: 'mno.txt', status: 'M' },
              ],
            },
          },
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [
        { path: 'abc.txt', status: 'M' },
        { path: 'def.txt', status: 'M' },
      ],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
  │   ├── dirAlpha\n\
M │   │   ├── jkl.txt\n\
M │   │   └── mno.txt\n\
M │   └── ghi.txt\n\
M ├── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs:{
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        },
      },
      childrenFiles: [],
    },
  };
  const expected = '\
  /\n\
  └── dir0\n\
M     └── ghi.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs:{
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
            },
          },
          childrenFiles: [],
        },
      },
      childrenFiles: [],
    },
  };
  const expected = '\
  /\n\
  └── dir0\n\
      └── dirAlpha\n\
M         └── ghi.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs:{
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {
                dirA: {
                  childrenDirs: {},
                  childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
                },
              },
              childrenFiles: [],
            },
          },
          childrenFiles: [],
        },
      },
      childrenFiles: [],
    },
  };
  const expected = '\
  /\n\
  └── dir0\n\
      └── dirAlpha\n\
          └── dirA\n\
M             └── ghi.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs:{
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'abc.txt', status: 'M' }],
        },
        dir1: {
          childrenDirs: {},
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        }
      },
      childrenFiles: [],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── abc.txt\n\
  └── dir1\n\
M     └── ghi.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs:{
        dir0: {
          childrenDirs: {},
          childrenFiles: [{ path: 'abc.txt', status: 'M' }],
        },
        dir1: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {},
              childrenFiles: [{ path: 'xyz.txt', status: 'M' }],
            },
          },
          childrenFiles: [{ path: 'ghi.txt', status: 'M' }],
        }
      },
      childrenFiles: [],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
M │   └── abc.txt\n\
  └── dir1\n\
      ├── dirAlpha\n\
M     │   └── xyz.txt\n\
M     └── ghi.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = {
    '/': {
      childrenDirs: {
        dir0: {
          childrenDirs: {
            dirAlpha: {
              childrenDirs: {
                dirRed: {
                  childrenDirs: {},
                  childrenFiles: [{ path: 'xyz.txt', status: 'M' }],
                },
              },
              childrenFiles: [{ path: 'abc.txt', status: 'M' }],
            },
          },
          childrenFiles: [],
        },
      },
      childrenFiles: [{ path: 'def.txt', status: 'M' }],
    },
  };
  const expected = '\
  /\n\
  ├── dir0\n\
  │   └── dirAlpha\n\
  │       ├── dirRed\n\
M │       │   └── xyz.txt\n\
M │       └── abc.txt\n\
M └── def.txt\n\
';
  const result = drawTree(input);
  expect(result).toEqual(expected);
});
