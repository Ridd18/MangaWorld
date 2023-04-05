import db from "../config/database.js";

// get all users
export const getUsers = (result) => {
  db.query("select * from user", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getUserCount = (result) => {
  db.query("select count(*) as count from user", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single user
export const getUserById = (id, result) => {
  db.query("SELECT * FROM user WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//login
export const login = (email, password, result) => {
  if (email === "admin@gmail.com") {
    db.query(
      "select * from admin where email = ? and password = ?",
      [email, password],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  }
  else
  {
    db.query(
      "select * from user where email = ? and password = ?",
      [email, password],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  }


};

//register
export const insertUser = (data, result) => {
  db.query("INSERT INTO user SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Delete user
export const deleteUserById = (id, result) => {
  db.query("DELETE FROM user WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update User to Database
export const updateUserById = (data, id, result) => {
  db.query(
    "UPDATE user SET name = ?, username = ? , email = ?, age = ? , phone = ?  WHERE user_id = ?",
    [data.name, data.username, data.email, data.age, data.phone, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
