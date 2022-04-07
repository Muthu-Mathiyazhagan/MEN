function log(req, res, next) {
  console.log("Req URL: ", req.url);
  // res.send("test").status(200);

  next();
}

module.exports = log;
