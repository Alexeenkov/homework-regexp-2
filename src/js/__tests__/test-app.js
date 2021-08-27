import formatTelNumber from '../app';

test('the formats is correct', () => {
  const expected = '+79270000000';
  const receiver = formatTelNumber('8 (927) 000-00-00');

  expect(receiver).toBe(expected);
});