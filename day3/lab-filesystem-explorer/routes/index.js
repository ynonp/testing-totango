var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = require('path');

router.delete('/', function(req, res, next) {
  const start = req.query.start ? decodeURIComponent(req.query.start) : './start';
  console.log(`Deleting ${start}`);
  res.sendStatus(201);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const start = req.query.start ? decodeURIComponent(req.query.start) : './start';
  const files = fs.readdirSync(start, { withFileTypes: true }); 
  const entries = [
    { name: '[Home]', type: 'D', link: '/' },
    ...files.map(dirent => ({ name: dirent.name, type: dirent.isDirectory() ? 'D' : 'F', link: `/?start=${encodeURIComponent(path.join(start, dirent.name))}` }))
  ]

  res.render('index', { title: 'Express', entries });
});

module.exports = router;
