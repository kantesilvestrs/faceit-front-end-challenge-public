const createTournament = require('./createTournament');

module.exports = (req, _res, next) => {
  if (req.method === 'POST') {
    req.body = createTournament(req.body.name);
  }

  if (req.method === 'GET' && (req.query || {}).name_like === 'error') {
    _res.status(500).jsonp({
      error: 'Something went wrong'
    });
  } else {
    next();
  }
};
