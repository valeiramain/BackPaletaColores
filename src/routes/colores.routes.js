import { Router } from "express";

const router = Router();

// rutas para trabajar con los colores

router.route("/colores").post(crearColor).get(listarColores);
