const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $2";
const addUsers = "INSERT INTO users (name,email,password) VALUES ($1, $2, $3)";
const checkEmailExists = "SELECT * FROM users WHERE email= $1";


module.exports = {
    getUsers,
    checkEmailExists,
    addUsers,
    getUsersById,
};