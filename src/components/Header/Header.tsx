import * as S from "./style";
import logoImg from "../../assets/images/orange-2.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <Link to="/">
        <img src={logoImg} alt="Logo Orange App" />
      </Link>
      <S.Nav>
          <NavLink to='/login' className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}>
              Login
          </NavLink>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
