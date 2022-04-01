let a = 1;
let b = 2;
let d = calculation(a, b);
console.log("D: ", d);

function calculation(a, b) {
  console.log(`a=${a}\nb=${b}`);
  let c = 0;
  for (let index = 0; index < b; index++) {
    c += a;
  }
  return c;
}
