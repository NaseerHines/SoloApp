const mysql = require("mysql");
const util = require("util");
const Hide = require("../configs");

const connection = mysql.createConnection({
    host: Hide.DB_HOST,
    user: Hide.DB_USER,
    password: Hide.DB_PASS,
    database: Hide.DB_NAME,
    socketPath: '/var/lib/mysqld/mysqld.sock'
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