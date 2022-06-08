import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.main`
  height: calc(100vh - 7.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 3.8rem;
    font-family: ${light.fontTitle};
    margin-bottom: 1rem;
  }

  > p {
    font-size: 2rem;

    > a {
      font-size: 2rem;
      color: ${light.primary};
    }
  }

  > img {
    max-width: 70rem;
    filter: drop-shadow(2px 2px 5px ${light.black});
  }
`;
