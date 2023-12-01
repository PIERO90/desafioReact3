import React, { useState } from "react";

export const Form = ({ setProductos, productos }) => {
  const [eleForm, setEleForm] = useState({ nombre: "", precio: 0 });

  function handlerChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setEleForm({ ...eleForm, [name]: value });
  }
  function handlerSubmit(e) {
    e.preventDefault();
    setProductos([...productos, eleForm]);
    setEleForm({ nombre: "", precio: 0 });
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="Nombre" name="nombre" onChange={handlerChange} value={eleForm.nombre} />
        <input type="number" placeholder="Precio" name="precio" onChange={handlerChange} value={eleForm.precio} />
        <input type="submit" value="Creado" />
      </form>
    </div>
  );
};
