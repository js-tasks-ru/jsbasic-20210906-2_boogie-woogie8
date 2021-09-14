function checkSpam(str) {
  let stringFirst = "1xBet";
  let stringSecond = "XXX";
  if (
    str.toLowerCase().indexOf(stringFirst.toLowerCase()) !== -1 ||
    str.toLowerCase().indexOf(stringSecond.toLowerCase()) !== -1
  ) {
    return true;
  } else {
    return false;
  }
}
