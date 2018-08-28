function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loop${i==1 ? "" : "s"}.`);
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return "done";
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while(arr.length > 0 && incrementVariable())
}