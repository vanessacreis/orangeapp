import * as S from "./styled";
import orangeLogo from "../../assets/images/orange-2.png";

const Footer = () => {
  return (
    <S.Footer>
      <img src={orangeLogo} alt="Orange Logo" />
      <p>Developed with 🧡 Vanessa Reis. &copy; All Rights Reserved.</p>
    </S.Footer>
  );
};

export default Footer;
