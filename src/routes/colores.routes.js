import { Router } from "express";
import {
  crearColor,
  listarColores,
  obtenerColorPorId,
  eliminarColorPorId,
  actualizarColorPorId,
} from "../controllers/colores.controllers.js";

const router = Router();

// rutas para trabajar con los colores

router.route("/").post(crearColor).get(listarColores);

router
  .route("/:id")
  .get(obtenerColorPorId)
  .delete(eliminarColorPorId)
  .put(actualizarColorPorId);

export default router;
