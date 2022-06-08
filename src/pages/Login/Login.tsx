import * as S from "./style";
import eventsImg from "../../assets/images/events.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppointments } from "../../hooks/useAppointments";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const context = useAppointments();

  async function handleLogin(e: any) {
    e.preventDefault();
    context?.actions?.handleLogin(user, password);
  }

  return (
    <S.Container>
      <aside>
        <img src={eventsImg} alt="" />
      </aside>
      <S.Login>
        <h1>Login</h1>
        <form>
          <Input
            width={35}
            textLabel="Usuário"
            type="text"
            placeholder="Digite seu nome de usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Input
            width={35}
            textLabel="Senha"
            type="password"
            placeholder="Digite sua senha"
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
