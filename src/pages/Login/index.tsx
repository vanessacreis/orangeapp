import * as S from "./style";
import eventsImg from "../../assets/images/events.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
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
          />
          <Input
            width={35}
            textLabel="Senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <Button className="large">Entrar</Button>
        </form>
      </S.Login>
    </S.Container>
  );
};

export default Login;
