const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('API Server');
});

router.get('/hello', (req, res) => {
  res.send({
    name: 'World'
  });
});

module.exports = router;
