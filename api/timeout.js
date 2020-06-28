module.exports = (_req, _res, next) => {
  setTimeout(next, 2000);
};
