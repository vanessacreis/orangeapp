import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.main`
  background: ${light.background};
  height: calc(100vh - 7.5rem);
  display: flex;
  align-items: center;

  > aside {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      max-width: 55rem;
    }
  }
`;

export const Login = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 4.2rem;
    font-family: ${light.fontTitle};
    margin-bottom: 5rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
