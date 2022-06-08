import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.main`
  background: transparent;
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

export const SignUp = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 3.8rem;
    font-family: ${light.fontTitle};
    margin-bottom: 1rem;
  }

  > p {
    width: 40rem;
    text-align: center;
    text-transform: uppercase;
    font-family: ${light.fontTitle};
    color: ${light.text};
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  .entre,
  a {
    font-family: ${light.font};
    font-size: 1.4rem;
    text-transform: none;
    margin-top: 2rem;
  }

  a {
    font-weight: bolder;
    color: ${light.primary};
  }
`;
