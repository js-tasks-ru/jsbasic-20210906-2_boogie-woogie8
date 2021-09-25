let makeFriendsList = function (friends) {
  let friendsList = document.createElement("ul");
  for (let i = 0; i < friends.length; i++) {
    let friend = document.createElement("li");
    friend.textContent = friends[i].firstName + " " + friends[i].lastName;
    friendsList.appendChild(friend);
  }
  return friendsList;
};
