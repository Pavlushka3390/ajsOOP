import Magician from '../../classes/magician';

test('test magician', () => {
  const person = new Magician('dasha', 'Magician');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 10,
    _defense: 40,
    _name: 'dasha',
    _type: 'Magician',
  };

  expect(expected).toEqual(person);
});