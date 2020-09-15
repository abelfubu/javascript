const fubu = (function () {
  const fubu = {};

  fubu.filter = function (array, callback) {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        temp.push(array[i]);
      }
    }
    return temp;
  };

  fubu.map = function (array, callback) {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
      temp.push(callback(array[i], i, array));
    }
    return temp;
  };

  fubu.reduce = function (array, callback, initialValue) {
    if (!initialValue) initialValue = 0;
    for (let i = 0; i < array.length; i++) {
      initialValue = callback(initialValue, array[i], i, array);
      debugger;
    }
    return initialValue;
  };

  return fubu;
})();

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const copia = fubu.filter(nums, (num) => num % 2 === 0);

const copiaDoble = fubu.map(nums, (num) => num * 2);

console.log(copia);
console.log(copiaDoble);

const result = nums.reduce((prev, num) => {
  if (num === 2) {
    return prev + num;
  } else {
    return prev;
  }
}, 100);

console.log(result);

const reduce = fubu.reduce(nums, (prev, num) => prev + num);

console.log(reduce);
