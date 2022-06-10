import * as S from "./style";
import eventsImg from "../../assets/images/events.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppointments } from "../../hooks/useAppointments";
import { ToastContainer } from "react-toastify";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const context = useAppointments();

  async function handleLogin(e: any) {
    e.preventDefault();
    const checkUser = user.trim();
    const checkPassword = password.trim();
    if (checkUser.length > 0 && checkPassword.length > 0) {
      context?.actions?.handleLogin(user, password);
    } else {
      toast.error("Opa! 😥 Parece que os campos estão vazios.", {
        className: "toast",
        draggable: false,
        transition: Zoom,
        autoClose: 4000,
      });
    }
  }

  return (
    <S.Container>
      <aside>
        <img
          className="animate__animated animate__fadeInLeft"
          src={eventsImg}
          alt=""
        />
      </aside>
      <S.Login className="animate__animated animate__fadeInRight">
        <ToastContainer />
        <h1>Login</h1>
        <form>
          <Input
            width={35}
            textLabel="Usuário"
            type="text"
            placeholder="Digite seu nome de usuário"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Input
            width={35}
            textLabel="Senha"
            type="password"
            placeholder="Digite sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="large" onClick={handleLogin}>
            Entrar
          </Button>
        </form>
        <p>
          Novo por aqui? <Link to="/signup">Cadastre-se</Link> aqui.
        </p>
      </S.Login>
    </S.Container>
  );
};

export default Login;
