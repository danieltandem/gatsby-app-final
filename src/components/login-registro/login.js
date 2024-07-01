import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FalloContraseña from "../modals/fallocontraseña";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost/bd-appqr/v1/user/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.message === 'Conectado correctamente') {
        console.log(data.user);
        setMessage('Conectado correctamente');
      } else {
        setMessage('El usuario o la contraseña son incorrectos');
      }
    } catch (error) {
      console.error('Error en el login', error);
      setMessage('Error. Por favor, vuelva a intentarlo o contacte con el administrador');
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="form-container-grandBlue">
      <h1>Iniciar sesión</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
      >
        <Form>
          <label htmlFor="email">Correo electrónico</label>
          <div className="email-input-container">
            <Field name="email" type="email" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <ErrorMessage name="email" />
          </div>

          <label htmlFor="password">Contraseña</label>
          <div className="password-input-container">
            <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Contraseña" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" id="franky" className="toggle-password-button" onClick={toggleShowPassword}>
              {showPassword ? '👁️​' : '👁️‍🗨️'}
            </button>
          </div>
          <ErrorMessage name="password" />

          <br />

            <button type="submit" id="pimpam" onClick={handleLogin} className='buform'>Entrar</button>
            <p>{message}</p>
      
          <br />
          <br />
          <FalloContraseña />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;