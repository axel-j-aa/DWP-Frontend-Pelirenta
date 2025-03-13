import React from "react";
import TMisRentas from "../../Components/Table/T-MisRentas";
import "./MisRentas.css";

const datosEjemplo = [
  {
    id: 1,
    nombre: "Titanic",
    fechaRenta: "2024-03-10",
    fechaFinalizacion: "2024-04-10",
  },
  {
    id: 2,
    nombre: "Attack on Titan",
    fechaRenta: "2024-02-15",
    fechaFinalizacion: "2024-03-15",
  },
  
  
];

const MisRentas = () => {
  return (
    <div className="mis-rentas-container">
      <h2 className="titulo">Mis Rentas</h2>
      <TMisRentas data={datosEjemplo} />
    </div>
  );
};

export default MisRentas;
