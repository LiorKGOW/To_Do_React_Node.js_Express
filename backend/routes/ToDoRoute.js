const { Router } = require("express");

const router = Router();

// GET: '/' - returns an hello world message
router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

module.exports = router;
