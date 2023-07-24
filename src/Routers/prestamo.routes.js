import { Router } from "express";
import getConnection from "../db/database.js";

const prestamoRouter = Router();


prestamoRouter.get("/getPrestamos", async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT fecha_prestamo,fecha_devolucion, estado direccion FROM prestamo");
    if (result.length === 0) {
      return res.status(204).send(`No hay prestamo`);
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
});

export default prestamoRouter;
