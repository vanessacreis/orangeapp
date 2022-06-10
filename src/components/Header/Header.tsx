import { NavLink } from "react-router-dom";
import { isAuth } from "../../routes/auth";
import { useAppointments } from "../../hooks/useAppointments";
import * as S from "./style";
import logoImg from "../../assets/images/orange-2.png";
import userImg from "../../assets/images/user.png";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

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
          <Menu
            menuStyle={{
              width: 180,
              backgroundColor: "#F2A922",
              margin: 10,
            }}
            align={"center"}
            arrow={true}
            menuButton={
              <MenuButton className="btn-primary">
                {context.states?.user.name} &nabla;
                <img
                  src={
                    context.states?.user.avatar === ""
                      ? userImg
                      : context.states?.user.avatar
                  }
                  alt="Foto do usuário"
                />
              </MenuButton>
            }
            transition
          >
            <MenuItem onClick={context.actions?.handleLogout}>Logout</MenuItem>
          </Menu>
        </S.User>
      )}
    </S.Header>
  );
};

export default Header;
