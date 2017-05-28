const diffStrToChanges = require('./diffStrToChanges'); 

test('zero changes', () => {
  const input = '';
  const expected = [];
  const result = diffStrToChanges(input);
  expect(result).toEqual(expected);
});

test('one change', () => {
  const input = 'M\tdir0/ghi.txt\n';
  const expected = [{ status: 'M', path: 'dir0/ghi.txt' }];
  const result = diffStrToChanges(input);
  expect(result).toEqual(expected);
});

test('two changes', () => {
  const input = 'M\tdir0/ghi.txt\nA\tdir1/dirOmega/apple.txt\n';
  const expected = [
    { status: 'M', path: 'dir0/ghi.txt' },
    { status: 'A', path: 'dir1/dirOmega/apple.txt' },
  ];
  const result = diffStrToChanges(input);
  expect(result).toEqual(expected);
});
