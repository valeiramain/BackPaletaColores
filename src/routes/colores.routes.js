import { Router } from "express";
import {
  crearColor,
  listarColores,
  obtenerColorPorId,
  eliminarColorPorId,
  actualizarColorPorId,
} from "../controllers/colores.controllers.js";
import validacionColor from "../middlewares/validacionColor.js";

const router = Router();

// rutas para trabajar con los colores

router.route("/").post([validacionColor],crearColor).get(listarColores);

router
  .route("/:id")
  .get(obtenerColorPorId)
  .delete(eliminarColorPorId)
  .put([validacionColor],actualizarColorPorId);

export default router;
