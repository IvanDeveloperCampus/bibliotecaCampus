import { Router } from "express";
import getConnection from "../db/database.js";
import { generateAccessToken, verifyToken } from "../Middlwares/jwt.js";

const usuarioRouter = Router();

usuarioRouter.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const con = await getConnection();

    const [rows] = await con.execute("SELECT * FROM usuario WHERE email=?", [
      email,
    ]);
    if (rows.length >= 1) {
      const user = rows[0];
      const accessToken = generateAccessToken(user);
      res.cookie("token", accessToken, { httpOnly: true });
      res.status(200).send("Ha ingresado Correctamente.");
    } else {
      res.status(400).send("Email Incorrecto, revisa la informacion");
    }
  } catch (error) {
    res.status(500).send("Error en el servidor." + error.message);
  }
});

usuarioRouter.get('/lagout', (req, res)=>{
  res.clearCookie('token');
  res.send('Sesion Cerrada');
});

usuarioRouter.get("/getUsuarios", verifyToken, async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT nombre, email FROM usuario");
    if (result.length === 0) {
      return res.status(204).send(`No hay usuarios`);
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default usuarioRouter;
