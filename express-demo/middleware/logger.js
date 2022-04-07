function log(req, res, next) {
  console.log("Req URL: ", req.url);
  next();
}

module.exports = log;
