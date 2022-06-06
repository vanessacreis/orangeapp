import Button from "../../components/Button";
import * as S from "./style";

import imgPhone from "../../assets/images/phone.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
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
    </S.Container>
  );
};

export default Home;
