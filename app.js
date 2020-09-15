const fubu = (function () {
  const fubu = {};

  fubu.filter = (array, callback) => {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        temp.push(array[i]);
      }
    }
    return temp;
  };

  fubu.map = (array, callback) => {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
      temp.push(callback(array[i], i, array));
    }
    return temp;
  };

  fubu.reduce = (array, callback, initialValue) => {
    if (!initialValue) initialValue = 0;
    for (let i = 0; i < array.length; i++) {
      initialValue = callback(initialValue, array[i], i, array);
    }
    return initialValue;
  };

  fubu.find = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
  };

  fubu.findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return i;
      }
    }
  };

  return fubu;
})();

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const people = [
  { name: 'Abel', edad: 39 },
  { name: 'Cris', edad: 27 },
];

console.log(fubu.find(nums, (num) => num === 2));
console.log(fubu.find(people, (person) => person.name === 'Cris'));
