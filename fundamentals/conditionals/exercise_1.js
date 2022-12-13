const getNumberSign = (x) => {

if (x === 0) {
  return "zero";
} else if (x < 0) {
  return "negative";
} else {
  return "positive";
}

}

console.log(getNumberSign(-100))