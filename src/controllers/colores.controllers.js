import Color from "../models/Color.js";


//CREAR COLOR - POST
export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body); // crear instancia del modelo Color con los datos del cuerpo de la solicitud
    await nuevoColor.save(); // guardar en la base de datos
    res.status(201).json({mensaje:'Color creado correctamente.'}); // responder con el color guardado y estado 201 (creado)
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:'Ocurrió un error al intentar crear el color'});
  } 
}

//LISTAR COLORES - GET
export const listarColores = async (req, res) => {
  try { 
    const colores = await Color.find();
    res.status(200).json(colores)
  }catch(error){
    console.error(error)
    res.status(500).json({mensaje:'Ocurrió un error al intentar listar los colores'});
  }
}