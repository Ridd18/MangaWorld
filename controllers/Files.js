import { getFileCount } from "../models/fileModel.js";


//get user count
   export const fileCount = (req, res) => {
    getFileCount((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };