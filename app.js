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

  return fubu;
})();

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const copia = fubu.filter(nums, (num) => num % 2 === 0);

console.log(copia);

const result = nums.reduce((prev, num) => {
  if (num === 2) {
    return prev + num;
  } else {
    return prev;
  }
}, 100);

console.log(result);
