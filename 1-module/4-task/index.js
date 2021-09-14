function checkSpam(str) {
  let stringFirst = "1xBet";
  let stringSecond = "XXX";
  return (
    str.toLowerCase().includes(stringFirst.toLowerCase()) ||
    str.toLowerCase().includes(stringSecond.toLowerCase())
  );
}
