import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Color from "../models/color.js";

const validacionColor = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre del color es un dato obligatorio.")
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre del color debe tener entre 3 y 30 caracteres.")
    .isString()
    .withMessage("El nombre del color debe ser un texto.")
    .custom(async (valor,{req}) => {
      const colorExistente = await Color.findOne({ nombre: valor });      
      if (!colorExistente) {        
        return true; // el color no existe, la validación es exitosa
      } 
      if (req.params?.id && colorExistente._id.toString() === req.params.id) {
        return true; // el color existe pero es el mismo que estamos actualizando
      } 
    throw new Error("El nombre del color ya está registrado en la base de datos.");
    }),
     
    (req, res, next) => resultadoValidacion(req, res, next)
]

export default validacionColor;