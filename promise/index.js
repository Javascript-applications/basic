let PromiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("PromiseOne Started...");
    resolve();
  }, 1000);
});

PromiseOne.then((res) => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then((res) => {
  console.log("Async 2 Resolved");
});

let PromiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Deepak kurmi", password: 1234 });
  }, 1000);
});

PromiseThree.then((res) => {
  console.log(res);
});

let PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Rohit", password: 12444 });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

PromiseFour.then((res) => {
  return res.name;
})
  .then((name) => {
    console.log("name", name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is either resolve or reject");
  });

let PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ language: "Java", password: 12444 });
    } else {
      reject("Error: Js went wrong");
    }
  }, 1000);
});

async function ConsumePromiseFive() {
  try {
    let response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}

ConsumePromiseFive();
