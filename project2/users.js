const users = {};

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function getUsers() {
    return users;
}

function addUser(username) {
    if (isValid(username)) {
        users[username] = true;
    }
    return users;
}

function deleteUser(username) {
    if (users[username]) {
        delete users[username];
    }
    return users;
}

module.exports = {
    isValid,
    getUsers,
    addUser,
    deleteUser,
    users,
};