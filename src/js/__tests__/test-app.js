import orderByProps from '../app';

test('sorting the array according to the passed rule', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const received = orderByProps(obj, ['name', 'level']);

  expect(received).toEqual(expected);
});

test('sorting an array without a passed rule', () => {
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const received = orderByProps(obj);

  expect(received).toEqual(expected);
});

test('sorting an array by an incorrect rule', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  expect(() => orderByProps(obj, ['prop'])).toThrowError(
    new Error('Check the sorting parameters. One of the specified properties is missing in the object'),
  );
});