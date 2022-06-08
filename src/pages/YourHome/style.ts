import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.main`
  background-color: ${light.background};
  min-height: calc(100vh - 7.5rem);
  display: flex;
`;

export const Today = styled.section`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    color: ${light.primary};
    font-family: ${light.fontTitle};
    font-size: 3.8rem;
    font-weight: 300;
  }
`;

export const Schedules = styled.section`
  flex: 1;
  /* background-color: blue; */

  > h2 {
    color: ${light.primary};
    font-size: 2.5rem;
    font-family: ${light.fontTitle};
    font-weight: 300;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
`;
