import { Router } from "express";
import coloresRoutes from "./colores.routes.js";

// defino objeto router
const router = Router();

// index es el directorio de todas las rutas
//contruir la ruta: http://localhost:3000/api/colores/
router.use('/colores',coloresRoutes)

export default router;