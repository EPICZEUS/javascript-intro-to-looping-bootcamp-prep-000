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

function doWhileLoop(arr) {
  do {
    
  } while(arr.length > 0 && incrementVariable())
}