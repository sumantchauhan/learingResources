const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff working");
  } else {
    reject("Error, it broken");
  }
});

// promise.then((result) => console.log("Result", result));

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/users",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((result) => {
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
  console.log(result[3]);
});
