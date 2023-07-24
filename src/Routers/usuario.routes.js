import { Router } from "express";
import getConnection from "../db/database.js";

const usuarioRouter = Router();

usuarioRouter.get("/getUsuarios", async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT nombre, email FROM usuario");
    if (result.length === 0) {
      return res.status(204).send(`No hay usuarios`);
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
});

export default usuarioRouter;