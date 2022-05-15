import Undead from '../../classes/undead';

test('test Undead', () => {
  const person = new Undead('yana', 'Undead');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 25,
    _defense: 25,
    _name: 'yana',
    _type: 'Undead',
  };

  expect(expected).toEqual(person);
});