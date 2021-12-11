const mysql = require("mysql");

const status = {
  SUCESS: 1,
  ERROR: 0,
  FAILURE: -1,
};
Object.freeze(status);

function query(dbhost, dbUserName, dbPassword, dbName, queryString) {
  const connectionObj = {
    host: dbhost,
    user: dbUserName,
    password: dbPassword,
    database: dbName,
  };
  const con = mysql.createConnection(connectionObj);
  con.connect((err) => {
    if (err) throw err;
    console.log("connect to db!");
    con.query(queryString, (err, result) => {
      if (err) throw err;
      console.log("the result:" + result[0]);
    });
    con.end();
  });
}

module.exports = query;
