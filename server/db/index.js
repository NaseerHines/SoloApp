const mysql = require("mysql");
const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASS = "";
const DB_NAME = "siege";

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
});

const query = util.promisify(connection.query).bind(connection);

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
});

const getUserSavedList = (id) => {
    const mysqlQuery = 'SELECT * FROM SavedList WHERE Account = ?;';
    return query(mysqlQuery, [id]);
};

const addToUserSavedList = ({user}) => {
  const mysqlQuery = 'INSERT INTO SavedList VALUES(null, ?, ?, ?);';
  return query(mysqlQuery, [user.id, user.gamertag, user.platform]);
};

const removeFromUserSavedList = (id) => {
    const mysqlQuery = 'DELETE FROM SavedList WHERE id = ?;';
    return query(mysqlQuery, [id]);
};

module.exports = {
    getUserSavedList,
    addToUserSavedList,
    removeFromUserSavedList,
};