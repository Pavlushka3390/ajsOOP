import Zombie from '../../classes/zombie';

test('test Zombie', () => {
  const person = new Zombie('nastya', 'Zombie');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 40,
    _defense: 10,
    _name: 'nastya',
    _type: 'Zombie',
  };

  expect(expected).toEqual(person);
});