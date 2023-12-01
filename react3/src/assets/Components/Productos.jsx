import React from "react";

export const Productos = ({ productos }) => {
  return (
    <div>
      {productos.map((p) => (
        <p key={p.nombre}>
          {p.nombre} - {p.precio}
        </p>
      ))}
    </div>
  );
};
