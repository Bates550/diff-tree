const { generateFileLine, generateDirLine, _generateDepthStr } = require('./generateLines');

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

describe('generateDirLine', () => {
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

describe('_generateDepthStr', () => {
  test(`should return '' when given []`, () => {
    const input = []
    const expected = '';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '' when given [true]`, () => {
    const input = [true]
    const expected = '';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '' when given [false]`, () => {
    const input = [false]
    const expected = '';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '│  ' when given [true, false]`, () => {
    const input = [true, false]
    const expected = '│   ';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '    ' when given [true, true]`, () => {
    const input = [true, true]
    const expected = '    ';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });
  test(`should return '    │  ' when given [true, true, false]`, () => {
    const input = [true, true, false]
    const expected = '    │   ';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });

  test(`should return '│   │  ' when given [true, false, false]`, () => {
    const input = [true, false, false]
    const expected = '│   │   ';
    const result = _generateDepthStr(input);
    expect(result).toEqual(expected);
  });
});
