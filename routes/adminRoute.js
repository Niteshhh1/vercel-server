const express = require('express');
const router = express.Router();

const admin = {
  name: "Nitesh Patidar",
  email: "example@gmail.com",
  contact: 9999999999,
  password: "admin@123"
};
    
router.post('/admin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  if (email === admin.email && password === admin.password) {
    return res.status(200).json({ user: admin, message: "Login Successfully" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
