const connection = require("../../db.js");
async function fetchAllUser() {
  const sql = "SELECT * FROM user";

  return connection
    .promise()
    .query(sql)
    .then(async ([rows]) => {
      return { status: 200, message: rows };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}
async function createUser(data) {
  const sql = "INSERT INTO user (nom,prenom) VALUES (?, ?)";
  let body = { ...data };
  return connection
    .promise()
    .query(sql, Object.values(data))
    .then(async ([rows]) => {
      body.id = rows.insertId;
      return { status: 200, message: body };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}
async function updateUser(data) {
  let body = { ...data };
  console.log(body);
  const sql = `UPDATE user SET nom = ?,prenom= ? WHERE id =${body.id}`;

  return connection
    .promise()
    .query(sql, Object.values(data))
    .then(async ([rows]) => {
      body.id = rows.insertId;
      return { status: 200, message: body };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function deleteUser(id) {
  console.log("id est : " + id);
  const sql = `DELETE FROM user WHERE  id =${id}`;

  return connection
    .promise()
    .query(sql)
    .then(async (res) => {
      if (res[0].affectedRows !== 0) {
        return { status: 200, message: "user " + id + " delete" };
      } else {
        return { status: 404, message: "user " + id + " not found" };
      }
    })
    .catch((error) => {
      console.log(error);
      return { status: 500, message: error };
    });
}
module.exports = { fetchAllUser, createUser, updateUser, deleteUser };
