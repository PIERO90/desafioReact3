import React, { useState } from "react";
import { Form } from "./form";
import { Productos } from "./productos";

export const Contenedor = () => {
  const [productos, setProductos] = useState([]);

  return (
    <div className="contenedor">
      <Form setProductos={setProductos} productos={productos} />
      <Productos productos={productos} />
    </div>
  );
};
