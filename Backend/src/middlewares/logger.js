const logger = (req, res, next) => {
  console.log(` ${req.method} ${req.url} @ ${new Date().toLocaleTimeString()}`);
  next(); // pass to the next handler
};

module.exports = logger;
