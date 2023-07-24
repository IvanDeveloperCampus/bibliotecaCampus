import { Router } from "express";
import getConnection from "../db/database.js";

const editorialRouter = Router();

editorialRouter.get("/getEditoriales", async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT nombre, direccion FROM editorial");
    if (result.length === 0) {
      return res.status(204).send(`No hay editoriales`);
    }
    res.status(200).send(result);
  } catch (error) {}
});

export default editorialRouter;
