import Bowerman from '../../classes/bowerman';

test('test Bowerman', () => {
  const person = new Bowerman('alina', 'Bowerman');

  const expected = {
    _level: 1,
    _health: 100,
    _attack: 25,
    _defense: 25,
    _name: 'alina',
    _type: 'Bowerman',
  };

  expect(expected).toEqual(person);
});