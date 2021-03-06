import { useId, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useAppointments } from "../../hooks/useAppointments";
import { TUser } from "../../types/types";
import * as S from "./style";
import routineImg from "../../assets/images/routine-amico.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "animate.css/animate.min.css";

const SignUp = () => {
  const uuid = useId();
  const context = useAppointments();
  const [dataUser, setDataUser] = useState<TUser>({
    uuid: uuid,
    id: "",
    password: "",
    email: "",
    name: "",
    avatar: "",
  });

  return (
    <S.Container>
      <aside>
        <img
          src={routineImg}
          alt=""
          className="animate__animated animate__fadeInLeft"
        />
      </aside>
      <S.SignUp className="animate__animated animate__fadeInRight">
        <ToastContainer />
        <h1>Cadastre-se agora</h1>
        <p>E faça as pazes com sua rotina</p>
        <form>
          <Input
            width={35}
            textLabel="Nome"
            placeholder="Digite seu nome"
            id="nome"
            required
            value={dataUser.name}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                name: target.value,
              }));
            }}
          />
          <Input
            width={35}
            textLabel="Email"
            placeholder="Insira seu email principal"
            id="email"
            required
            value={dataUser.email}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                email: target.value,
              }));
            }}
          />
          <Input
            width={35}
            textLabel="Nome de usuário"
            placeholder="Digite o nome de usuário desejado"
            id="user"
            required
            value={dataUser.id}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                id: target.value,
              }));
            }}
          />
          <Input
            width={35}
            textLabel="Senha"
            placeholder="Insira uma senha"
            id="senha"
            required
            value={dataUser.password}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                password: target.value,
              }));
            }}
          />
          <Button
            className="large"
            onClick={(e) => {
              e.preventDefault();
              context.actions?.handleCreateNewUser(dataUser);
            }}
          >
            Cadastrar
          </Button>
        </form>
        <p className="entre">
          Já é cadastrado? <Link to="/login">Faça login</Link>.
        </p>
      </S.SignUp>
    </S.Container>
  );
};

export default SignUp;
