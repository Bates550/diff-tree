const tree = require('./tree');

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
  ];
  const expected = {
    '/': {
      childrenDirs: {},
      childrenFiles: [{ path: 'abc.txt', status: 'M' }],
    },
  };
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
    { path: 'dir0/ghi.txt', status: 'M' },
  ];
  const expected = {
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
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
    { path: 'def.txt', status: 'M' },
    { path: 'dir0/ghi.txt', status: 'M' },
  ];
  const expected = {
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
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
    { path: 'def.txt', status: 'M' },
    { path: 'dir0/ghi.txt', status: 'M' },
    { path: 'dir0/jkl.txt', status: 'M' },
  ];
  const expected = {
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
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
    { path: 'def.txt', status: 'M' },
    { path: 'dir0/ghi.txt', status: 'M' },
    { path: 'dir1/jkl.txt', status: 'M' },
  ];
  const expected = {
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
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
    { path: 'def.txt', status: 'M' },
    { path: 'dir0/ghi.txt', status: 'M' },
    { path: 'dir0/dirAlpha/jkl.txt', status: 'M' },
  ];
  const expected = {
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
  const result = tree(input);
  expect(result).toEqual(expected);
});

test('', () => {
  const input = [
    { path: 'abc.txt', status: 'M' },
    { path: 'def.txt', status: 'M' },
    { path: 'dir0/ghi.txt', status: 'M' },
    { path: 'dir0/dirAlpha/jkl.txt', status: 'M' },
    { path: 'dir0/dirAlpha/mno.txt', status: 'M' },
  ];
  const expected = {
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
  const result = tree(input);
  expect(result).toEqual(expected);
});
