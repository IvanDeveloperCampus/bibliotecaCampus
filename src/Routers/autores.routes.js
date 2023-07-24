import { Router } from "express";
import getConnection from "../db/database.js";

const autorRouter = Router();

autorRouter.get("/getAutores", async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT * FROM autor");
    if (result.length === 0) {
      return res.status(204).send(`No hay autores`);
    }
    res.status(200).send(result);
  } catch (error) {}
});

export default autorRouter;
