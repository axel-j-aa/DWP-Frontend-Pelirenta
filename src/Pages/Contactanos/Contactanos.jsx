import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, CommentOutlined } from '@ant-design/icons'; 
import './Contactanos.css';

function Contactanos() {
  // Función para manejar el envío del formulario
  const handleFormSubmit = (values) => {
    console.log('Valores enviados:', values);
    // Aquí puedes agregar algún mensaje de éxito o enviar los datos a un backend.
  };

  return (
    <div className="contactanos-container">
      <div className="text-section">
        <h1>Contáctanos</h1>
        <p>Si tienes dudas, comentarios o sugerencias, háznoslas saber</p>
      </div>

      {/* Sección del Formulario */}
      <div className="form-section">
        <h2>Formulario de Contacto</h2>
        <Form
          name="contact-form"
          className="contact-form"
          initialValues={{ remember: true }}
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Ingresa tu nombre" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Ingresa tu correo" />
          </Form.Item>

          <Form.Item
            name="comment"
            rules={[{ required: true, message: 'Por favor ingresa un comentario' }]}
          >
            <Input.TextArea
              prefix={<CommentOutlined />}
              placeholder="Escribe tu comentario"
            />
          </Form.Item>

          <Form.Item>
            <Button className="send-button" type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contactanos;
