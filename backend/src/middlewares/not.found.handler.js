export default function (req, res) {
  return res.status(404).json({
    status: 404,
    messsage: "Endpoint not found",
    from: req.method + ': ' + req.url
  })
}