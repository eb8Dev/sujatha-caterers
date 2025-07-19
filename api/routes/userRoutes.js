const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, phone, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    phone,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  res.json({ message: 'Login successful', user });
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'User not found' });
  }
});

// Update user address
router.put('/:id/address', async (req, res) => {
  const { address } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { address },
      { new: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update address' });
  }
});

module.exports = router;
