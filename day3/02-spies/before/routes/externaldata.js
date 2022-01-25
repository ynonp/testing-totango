var express = require('express');
var router = express.Router();
const githubApi = require('../lib/githubapi');

/* GET home page. */
router.get('/:username', async function(req, res, next) {
  const { username } = req.params;
  const followers = await githubApi.getNumberOfFollowers(username);
  res.send(`User ${username} has ${followers} followers`);
});

module.exports = router;


