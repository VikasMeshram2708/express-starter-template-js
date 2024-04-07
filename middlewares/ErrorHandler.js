function ErrorHandler(err, req, res, next) {
  const statusCode = req.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err?.message,
    stack:
      process.env.NODE_ENV === "production"
        ? "Something went wrong"
        : err?.stack,
  });
}

module.exports = ErrorHandler;
