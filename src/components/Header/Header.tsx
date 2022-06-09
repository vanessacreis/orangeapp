import * as S from "./style";
import logoImg from "../../assets/images/orange-2.png";
import { NavLink } from "react-router-dom";
import { isAuth } from "../../routes/auth";
import { useAppointments } from "../../hooks/useAppointments";

const Header = () => {
  const auth = isAuth();
  const context = useAppointments();

  return (
    <S.Header
      style={
        !auth ? { backgroundColor: "#fcfcfc" } : { backgroundColor: "#F2A922" }
      }
    >
      <img src={logoImg} alt="Logo Orange App" />

      {!auth ? (
        <S.Nav>
          <NavLink
            to="/"
            className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
          >
            Cadastre-se
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
          >
            Login
          </NavLink>
        </S.Nav>
      ) : (
        <S.User>
          <div className="user">
            <h3>{context.states?.user.name}</h3>
            <img src={context.states?.user.avatar} alt="Foto do usuário" />
          </div>
          <button className="logout" onClick={context.actions?.handleLogout}>
            Sair
          </button>
        </S.User>
      )}
    </S.Header>
  );
};

export default Header;
