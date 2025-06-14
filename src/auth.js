const express = require('express');
const router = express.Router();

// esempio di route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from auth route!' });
});

module.exports = router;

