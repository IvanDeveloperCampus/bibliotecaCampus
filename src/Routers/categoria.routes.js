import { Router } from "express";
import getConnection from "../db/database.js";
import { verifyToken } from "../Middlwares/jwt.js";

const categoriaRouter = Router();

categoriaRouter.get("/getCategorias", verifyToken, async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT * FROM categoria");
    if (result.length === 0) {
      return res.status(204).send(`No hay categorias`);
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default categoriaRouter;
