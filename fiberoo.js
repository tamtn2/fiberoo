function fib() {
  let x = 0;
  let y = 1;
  let z = 0;
  const arr1 = [x];
  for (let i = 1; i < 50; i++) {
    z = x + y;
    arr1.push(z);
    y = x;
    x = z;
  }
  return arr1;
}

function numsToStrings(array) {
  return _.map(array, function (num) { return num.toString(); });
}

function numEvenNums(array) {
  const evenArr = _.filter(array, function (num) { return num % 2 === 0; });
  return evenArr.length;
}

console.log(numEvenNums(fib()));
