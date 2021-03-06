import { parse } from '../src/index';

const testObject1 = {
  people: {
    Matt: {
      age: 36,
      favouriteThings: ['Monzo', 'The Wirecutter', 'Jurassic Park'],
    },
    James: {
      age: 93,
      favouriteThings: ['Far Cry 1', 'Far Cry 2', 'Far Cry 3', 'Far Cry 4', 'Far Cry 5', 'Far Cry 6'],
    },
    Eric: {
      age: 38,
      favouriteThings: ['Bitcoin'],
    },
    Dan: {
      age: 34,
      favouriteThings: ['Friday admin', 'Doing laundry', 'Frasier'],
    },
  },
};

const testArray1 = [
  {
    name: 'Matt',
    age: 36,
    favouriteThings: ['Monzo', 'The Wirecutter', 'Jurassic Park'],
  },
  {
    name: 'James',
    age: 93,
    favouriteThings: ['Far Cry 1', 'Far Cry 2', 'Far Cry 3', 'Far Cry 4', 'Far Cry 5', 'Far Cry 6'],
  },
  {
    name: 'Eric',
    age: 38,
    favouriteThings: ['Bitcoin'],
  },
  {
    name: 'Dan',
    age: 34,
    favouriteThings: ['Friday admin', 'Doing laundry', 'Frasier'],
  },
];

const employees = {
  people: [
    {
      name: 'Matt',
      age: 36,
    },
    {
      name: 'James',
      age: 39,
    },
  ],
  count: 2,
};

describe('Values parsing tests', () => {
  test('Parsing object', () => {
    const structure = parse(testObject1);
    const values = structure.values;

    expect(values.rootPath).toEqual('$');
    expect(values.values['$.people'].children?.length).toEqual(4);
    expect(values.values['$.people.James.age'].value).toEqual(93);
  });

  test('Parsing array', () => {
    const structure = parse(testArray1);
    const values = structure.values;

    expect(values.rootPath).toEqual('$');
    expect(values.values['$'].children?.length).toEqual(4);
    expect(values.values['$.1.age'].value).toEqual(93);
    expect(values.values['$.1'].name).toEqual('Root 1');
    expect(values.values['$.1'].displayName).toEqual('Root 1');
  });

  test('Parsing employees', () => {
    const structure = parse(employees);
    console.log(JSON.stringify(structure));
  });
});

describe('Parsing name tests', () => {
  test('Name test', () => {
    const structure = parse(testObject1);
    const values = structure.values;

    expect(values.values['$.people.Matt.favouriteThings'].name).toEqual('favouriteThings');
    expect(values.values['$.people.Matt.favouriteThings'].displayName).toEqual('Favourite Things');
  });
});
