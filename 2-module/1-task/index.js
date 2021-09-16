function sumSalary(salaries) {
  let result = 0;

  for (let key in salaries) {
    if (typeof salaries[key] == "number" && isFinite(salaries[key])) {
      result += salaries[key];
    }
  }
  return result;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

sumSalary(menu);
console.log(sumSalary(menu));
