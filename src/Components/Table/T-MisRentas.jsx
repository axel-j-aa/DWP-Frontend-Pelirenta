import React from "react";
import { Table, Button } from "antd";
import { EyeOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./T-MisRentas.css";

const TMisRentas = ({ data }) => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Fecha de Renta",
      dataIndex: "fechaRenta",
      key: "fechaRenta",
    },
    {
      title: "Fecha de Finalización",
      dataIndex: "fechaFinalizacion",
      key: "fechaFinalizacion",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (_, record) => (
        <div className="acciones">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            className="btn-ver-mas"
            onClick={() => console.log("Ver más", record)}
          />
          <Button
            type="primary"
            danger
            icon={<CloseCircleOutlined />}
            className="btn-cancelar"
            onClick={() => console.log("Cancelar renta", record)}
          />
        </div>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default TMisRentas;
