function showSalary(users, age) {
  let nameBalanceArray = users
    .filter((item) => item.age <= age)
    .map((item) => item.name + ", " + item.balance)
    .join("\n");
  return nameBalanceArray;
}
