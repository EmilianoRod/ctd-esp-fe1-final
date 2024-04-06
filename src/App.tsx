import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio";
import PaginaFavoritos from "./paginas/Favoritos";
import PaginaDetalle from "./paginas/Detalle";
import Encabezado from "./componentes/layout/encabezado.componente";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;
