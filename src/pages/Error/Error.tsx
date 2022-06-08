import * as S from "./style";
import errorImg from "../../assets/images/404-Error-pana.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <S.Container>
        <h1>Oh oh... Parece que você se perdeu!</h1>
        <p><Link to='/'>Clique aqui</Link> para voltar a tela inicial.</p>
      <img src={errorImg} alt="" />
    </S.Container>
  );
};

export default Error;
