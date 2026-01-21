import { Router } from "express";
import {
  crearColor,
  listarColores,
  obtenerColorPorId,
  eliminarColorPorId,
  editarColorPorId,
} from "../controllers/colores.controllers.js";
import validacionColor from "../middlewares/validacionColor.js";
import validacionIdColor from "../middlewares/validacionIdColor.js";

//defino el router
const router = Router();

// rutas para trabajar con los colores

router.route("/").post([validacionColor],crearColor).get(listarColores);

router
  .route("/:id")
  .get([validacionIdColor],obtenerColorPorId)
  .delete([validacionIdColor],eliminarColorPorId)
  .put([validacionIdColor,validacionColor],editarColorPorId);

export default router;
