export default function (error, req, res, next) {
  if (error) {
    const status = error.status || 500;
    const message = error.message;
    const path = req.method + " " + req.url;

    return res.status(status).json({ status, message, path });
  }
  next()
}