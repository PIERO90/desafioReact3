import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    charge: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Campo requerido";
    }
    if (!formData.email) {
      newErrors.email = "Campo requerido";
    }
    if (!formData.password) {
      newErrors.password = "Campo requerido";
    }
    if (!formData.age) {
      newErrors.age = "Campo requerido";
    }
    if (!formData.charge) {
      newErrors.charge = "Campo requerido";
    }
    if (formData.phone !== formData.confirmPassword) {
      newErrors.phone = "La data no coincide";
    }

    setErrors(newErrors);

    // Si no hay errores, realizar la lógica de registro aquí
    if (Object.keys(newErrors).length === 0) {
      // Realizar la lógica de registro aquí (puede ser una llamada a una API, etc.)
      console.log("Formulario válido. Realizar la lógica de registro.");
    }
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <table class="table table-striped">
          <h2>Lista Colaboradores</h2>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Juan Soto</td>
              <td>juans@colaborador.com</td>
              <td>23</td>
              <td>Desarrollador FrontEnd</td>
              <td>99887766</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lucas Pailamilla</td>
              <td>lucasp@colaborador.com</td>
              <td>31</td>
              <td>Desarrollador Backend</td>
              <td>88779955</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Diego Riquelme</td>
              <td>diegor@colaborador.com</td>
              <td>28</td>
              <td>Ingeniero Dev</td>
              <td>99226644</td>

              <h2>Formulario Colaboradores</h2>
              <div className="input-group">
                <label>Nombre de Colaborador</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <span className="error">{errors.username}</span>}
              </div>
              <div className="input-group">
                <label>Correo Electrónico</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="input-group">
                <label>Edad</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                {errors.age && <span className="error">{errors.age}</span>}
              </div>
              <div className="input-group">
                <label>Cargo</label>
                <input type="text" name="charge" value={formData.charge} onChange={handleChange} />
                {errors.charge && <span className="error">{errors.charge}</span>}
                <div className="input-group">
                  <label>Telefono</label>
                  <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <button type="submit">Agregar Nuevo Colaborador</button>
              </div>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
