import Swordsman from '../../classes/swordsman';

test('test swordsman', () => {
  const person = new Swordsman('aida', 'Swordsman');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 40,
    _defense: 10,
    _name: 'aida',
    _type: 'Swordsman',
  };

  expect(expected).toEqual(person);
});