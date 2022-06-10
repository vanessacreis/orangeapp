import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.main`
  min-height: calc(100vh - 7.5rem);
  font-family: ${light.font};
  background: transparent;

  .orange {
    color: ${light.primary};
  }
`;

export const Home = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > aside {
    flex: 1;

    > img {
      height: 55rem;
    }
  }

  > div {
    flex: 1;
  }

  .info {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-block: auto;
    text-align: center;

    > h1 {
      font-size: 4.2rem;
      font-family: ${light.fontTitle};
      color: ${light.text};
      margin-block: 2rem;

      .orange {
        font-size: 4.2rem;
      }
    }

    > p {
      color: ${light.text};
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
  }
`;

export const Sobre = styled.section`
  height: 70%;
  margin-block: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .infoImg {
    width: 35rem;
    filter: drop-shadow(2px 2px 5px ${light.gray}80);
  }

  .infoText {
    width: 35rem;
    font-family: ${light.text};
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
  }
`;
