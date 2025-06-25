const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/secret", verifyToken, isAdmin, (req, res) => {
  res.json({ message: `Hello Admin ${req.user.email}. You can see this.` });
});

module.exports = router;
