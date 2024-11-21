// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión en Dios Pablo</h1>
      <form>
        <div className="input-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default App;
