import Color from "../models/color.js";

//CREAR COLOR - POST
export const crearColor = async (req, res) => {
  try {
    console.log(req.body);
    const nuevoColor = new Color(req.body); // crear instancia del modelo Color con los datos del cuerpo de la solicitud
    await nuevoColor.save(); // guardar en la base de datos
    res.status(201).json({ mensaje: "Color creado correctamente." }); // responder con el color guardado y estado 201 (creado)
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al intentar crear el color" });
  }
};

//LISTAR COLORES - GET
export const listarColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al intentar listar los colores" });
  }
};

// GET color por ID
export const obtenerColorPorId = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    if (!colorBuscado) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }
    res.status(200).json(colorBuscado);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        mensaje: "Ocurrió un error al intentar obtener el color por ID",
      });
  }
};

// DELETE color por ID
export const eliminarColorPorId = async (req, res) => {
  try {
    const colorEliminado = await Color.findByIdAndDelete(req.params.id);
    if (!colorEliminado) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }
    res.status(200).json({ mensaje: "Color eliminado correctamente." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        mensaje: "Ocurrió un error al intentar eliminar el color por ID",
      });
  }
};


//PUT editar color por ID (opcional)
export const editarColorPorId = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    console.log(colorBuscado);
    if (!colorBuscado) {
      return res.status(404).json({ mensaje: "Color no encontrado con el ID enviado." });
    }

    // si el color existe, actualizamos sus campos
    await Color.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ mensaje: "Color actualizado correctamente." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        mensaje: "Ocurrió un error al intentar actualizar el color con el ID enviado",
      });
  }
};