// ======================================================

let Limit = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === Limit;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const iterator of asyncIterable) {
    console.log("iterator", iterator);
  }
})();

// ======================================================
async function* foo() {
  yield 1;
  yield 2;
}

(async function () {
  for await (const num of foo()) {
    console.log("num", num);
    break;
  }
})();

// ======================================================

function getPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise will resolve in ${time}`);
    }, time);
  });
}

const Arr = [getPromise(2000), getPromise(3000), getPromise(4000)];

(async function () {
  for await (const iterator of Arr) {
    console.log(iterator);
  }
})();

// ======================================================

async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i;
    i++;
  }
}

(async () => {
  for await (const iterator of asyncGenerator()) {
    console.log("asyncGenerator", iterator);
  }
})();

// ======================================================

// async function* streamAsyncIterable(stream) {
//   console.log("stream", stream);
//   const reader = stream.getReader();
//   try {
//     const { value, done } = reader.read();
//     if (done) return;
//     yield value;
//   } finally {
//     reader.releaseLock();
//   }
// }

// const getResponseSize = async (url) => {
//   let responseSize = 0;
//   const response = await fetch(url);

//   for await (const chunk of streamAsyncIterable(response.body)) {
//     responseSize += chunk.length;
//   }

//   console.log(`Response Size: ${responseSize} bytes`);
//   return responseSize;
// };

// getResponseSize("https://jsonplaceholder.typicode.com/photos");

// ======================================================

function* generatorWithRejectedPromises() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.reject(3);
  yield 4;
  throw 5;
}

(async () => {
  try {
    for (const iterator of generatorWithRejectedPromises()) {
      console.log("iterator1", await iterator);
    }
  } catch (error) {
    console.log("caught", error);
  }
})();
