export const notImplemented = (req, res, next) => {
  res.status(501).json({
    error: 'Ruta no implementada',
    method: req.method,
    path: req.originalUrl
  });
};