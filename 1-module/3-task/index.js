function ucFirst(str) {
  if (str === "") {
    return "";
  } else {
    let newString = str.slice(1);
    str = str[0].toUpperCase() + newString;
  }
  return str;
}
