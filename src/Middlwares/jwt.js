import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_PRIMARY_KEY, { expiresIn: "1h" });
}

export function verifyToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ message: "No tiene permiso para acceder al recurso." });
  }
  jwt.verify(token, process.env.JWT_PRIMARY_KEY, (error, data) => {
    if (error) {
      return res.status(498).json({ message: "Token inválido o caducado." });
    }
    req.user = data;
    next();
  });
}
