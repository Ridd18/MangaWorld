// import express
import express from "express";


import {
  showUsers,
  createUser,
  deleteUser,
  loginUser,
  showUserById,
  userCount,
  updateUser,
} from "../controllers/Users.js";

import {upload} from "../multer/multer.js"

import { download, getListFiles } from "../models/fileModel.js"

import {fileCount} from "../controllers/Files.js"

// init express router
const router = express.Router();

//USERS

//get all users
router.get("/user", showUsers);


//get user count
router.get("/user/count", userCount);

// get single user
router.get("/user/:id",showUserById);

//register new user
router.post("/user", createUser);

//login
router.post("/user/login", loginUser);

//delete user
router.delete("/user/:id", deleteUser);

//update
router.put("/user/:id",updateUser);



//FILES

//get all files
router.get("/files",getListFiles);

//download
router.get("/files/:name",download)


//get file count
router.get("/file/count", fileCount);

// //download
// router.get("/files/download",download)

//upload
router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});


// export default router
export default router;
