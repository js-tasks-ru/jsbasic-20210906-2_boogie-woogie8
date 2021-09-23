function getMinMax(str) {
  let strSplit = str.split(" ");
  let strMap = strSplit.map((item) => +item);
  let newArray = strMap.filter(Boolean);
  return {
    min: Math.min.apply(Math, newArray),
    max: Math.max.apply(Math, newArray),
  };
}
