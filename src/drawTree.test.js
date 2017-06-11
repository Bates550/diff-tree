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

describe.skip('generateFileLine', () => {
  test(`returns 'M     └── abc.txt\\n' when is not the last item and depth 1`, () => {
    const file = { status: 'M', path: 'abc.txt' };
    const input = {
      isLastChild: true,
      isLastItem: true,
      depth: 3,
      areAncestorsLastChildren: [true, true, false],
    };
    const expected = 'M     └── abc.txt\n';
    const result = generateFileLine(file, input);
    expect(result).toEqual(expected);
  });
});

describe.skip('generateDirLine', () => {
  test(`returns '  ├── dir\\n' when is not the last item and depth 1`, () => {
    const input = {
      isLastItem: false,
      key: 'dir',
      areAncestorsLastChildren: [true],
    };
    const expected = '  ├── dir\n';
    const result = generateDirLine(input);
    expect(result).toEqual(expected);
  });

  test(`returns '  └── dir\\n' when is the last item and depth 1`, () => {
    const input = {
      isLastItem: true,
      key: 'dir',
      areAncestorsLastChildren: [true],
    };
    const expected = '  └── dir\n';
    const result = generateDirLine(input);
    expect(result).toEqual(expected);
  });

  test(`returns '  │   ├── dir\\n' when is not the last item and depth 2`, () => {
    const input = {
      isLastItem: false,
      key: 'dir',
      areAncestorsLastChildren: [true, false],
    };
    const expected = '  │   ├── dir\n';
    const result = generateDirLine(input);
    expect(result).toThrow();
  });

  test(`returns '      └── dir\\n' when is the last item and depth 2`, () => {
    const input = {
      isLastItem: true,
      key: 'dir',
      areAncestorsLastChildren: [true, true],
    };
    const expected = '      └── dir\n';
    const result = generateDirLine(input);
    expect(result).toEqual(expected);
  });

  test(`returns '  │       └── dir\\n' when ancestors are last children [true, false, true]`, () => {
    const input = {
      isLastItem: true,
      key: 'dir',
      areAncestorsLastChildren: [true, false, true],
    };
    const expected = '  │       └── dir\n';
    const result = generateDirLine(input);
    expect(result).toEqual(expected);
  });
});

describe.skip('generateDepthStr', () => {
  test(`should return '' when given []`, () => {
    const input = []
    const expected = '';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '' when given [true]`, () => {
    const input = [true]
    const expected = '';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '' when given [false]`, () => {
    const input = [false]
    const expected = '';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '│  ' when given [true, false]`, () => {
    const input = [true, false]
    const expected = '│   ';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '    ' when given [true, true]`, () => {
    const input = [true, true]
    const expected = '    ';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });
  test(`should return '    │  ' when given [true, true, false]`, () => {
    const input = [true, true, false]
    const expected = '    │   ';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '│   │  ' when given [true, false, false]`, () => {
    const input = [true, false, false]
    const expected = '│   │   ';
    const result = generateDepthStr(input);
    expect(result).toEqual(expected);
  });
});
