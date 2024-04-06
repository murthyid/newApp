const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "display list of users" });
});
router.post("/", (req, res) => {
  const { username, password } = req.body;
  return res
    .status(200)
    .json({ message: `username ${username} and password ${password}` });
});

module.exports = router;
