function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
}

function howAreYou() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('how are you?');
    }, 4000);
  });
}

// async function sayHello() {
//   console.log('start');
//   console.time();
//   const promisesResolved = await Promise.all([hello(), howAreYou()]);
//   promisesResolved.forEach((promise) => console.log(promise));
//   console.timeEnd();
//   console.log('end');
// }

function sayHello() {
  console.log('start');
  console.time();
  hello()
    .then((hello) => {
      console.log(hello);
      return howAreYou();
    })
    .then((greeting) => {
      console.log(greeting);
      console.timeEnd();
      console.log('end');
    })
    .catch((error) => console.log(error));
}

sayHello();
