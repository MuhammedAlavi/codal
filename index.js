const { db_host, db_name, db_password, db_user } = require("./constants");
const query = require("./db/query");
const queryString =
  "INSERT INTO `balance`(`operational_income`, `operational_cost`, `company_name`, `ISIC`) VALUES ('999','999','999','999')";
query(db_host, db_user, db_password, db_name, queryString);
