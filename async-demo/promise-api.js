const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("p1");
    resolve(__filename);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("p2");
    resolve(module);
  }, 6000);
});

Promise.all([p1, p2]).then((result) => console.log("result : ", result));
