import { Router } from "express";
import { crearColor,listarColores,obtenerColorPorId,eliminarColorPorId } from "../controllers/colores.controllers.js";

const router = Router();

// rutas para trabajar con los colores

router.route("/").post(crearColor).get(listarColores);

router.route("/:id").get(obtenerColorPorId).delete(eliminarColorPorId);

export default router;
