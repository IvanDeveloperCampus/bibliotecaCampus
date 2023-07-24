import { Router } from "express";
import getConnection from "../db/database.js";
import { verifyToken } from "../Middlwares/jwt.js";

const reservaRouter = Router();


reservaRouter.get("/getReservas", verifyToken, async (req, res) => {
  try {
    const con = await getConnection();
    const [result] = await con.execute("SELECT fecha_reserva, estado direccion FROM reserva");
    if (result.length === 0) {
      return res.status(204).send(`No hay reservas`);
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
  }
});

export default reservaRouter;
