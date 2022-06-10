import { useNavigate } from "react-router-dom";
import Background from "../../components/Background/Background";
import Button from "../../components/Button/Button";
import * as S from "./style";
import imgPhone from "../../assets/images/phone.png";
import timeImg from "../../assets/images/time-semi.svg";
import familyImg from "../../assets/images/family-cuatre.svg";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <>
      <Background />
      <S.Container>
        <S.Home>
          <aside>
            <img src={imgPhone} alt="" />
          </aside>
          <div>
            <div className="info">
              <h1>
                Organize e gerencie seus compromissos com
                <span className="orange"> Orange</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sodales erat a ipsum dignissim viverra. Suspendisse ornare
                accumsan bibendum.
              </p>
              <Button onClick={() => handleNavigate()} className="large">
                Comece agora!
              </Button>
            </div>
          </div>
        </S.Home>
        <S.Sobre>
          <img className="infoImg" src={timeImg} alt="" />
          <p className="infoText">
            Faça as pazes com a sua rotina e volte a ter tempo para o que
            realmente importa.
          </p>
          <img className="infoImg" src={familyImg} alt="" />
        </S.Sobre>
      </S.Container>
    </>
  );
};

export default Home;
