import Daemon from '../../classes/daemon';

test('test daemon', () => {
  const person = new Daemon('irina', 'Daemon');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 10,
    _defense: 40,
    _name: 'irina',
    _type: 'Daemon',
  };

  expect(expected).toEqual(person);
});