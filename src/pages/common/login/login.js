import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../../../imgs/tukan_icon_temp.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  let navigate = useNavigate();

  const onClickLogin = () => {
    if (userName.toLowerCase() == "teacher") {
      navigate("/teacher");
    } else if (userName.toLowerCase() == "parent") {
      navigate("/parent");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={logo} className="tukan-logo" alt="icon" />
        <p>TUKAN</p>
        <Form className="login-form">
          <Form.Group className="mb-1" controlId="formGroupEmail">
            <Form.Control
              className="login-input"
              type="email"
              placeholder="Usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <a className="link" href="">
            Olvidó su contraseña?
          </a>
          <Button type="submit" className="login-button" onClick={onClickLogin}>
            Ingresar
          </Button>
          <a className="link" href="">
            Registrarse
          </a>
        </Form>
      </header>
    </div>
  );
}

export default Login;
