let inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  let strSplit = str.split(" ");
  let strMap = strSplit.map((item) => +item);
  let newArray = strMap.filter(Boolean);
  console.log(newArray);
  return {
    min: Math.min.apply(Math, newArray),
    max: Math.max.apply(Math, newArray),
  };
}
