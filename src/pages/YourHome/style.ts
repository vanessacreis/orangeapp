import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.main`
  background-color: ${light.background};
  height: calc(100vh - 7.5rem);
  display: flex;
`;

export const Today = styled.section`
  padding-top: 2.5rem;
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
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .box {
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    > h2 {
      color: ${light.primary};
      font-size: 2.5rem;
      font-family: ${light.fontTitle};
      font-weight: 300;
    }
  }

  .search {
    width: 50rem;
    border: none;
    background-color: ${light.modal};
    border-radius: 0.5rem;
    padding: 1rem;

    &:focus {
      outline: 1.5px solid ${light.primary};
    }
  }
`;

export const CardList = styled.div`
  height: 80%;
  width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${light.secundary};
    border-radius: 5px;
  }

  .empty {
    text-align: center;

    > p {
      width: 28rem;
      font-size: 2rem;
    }

    > img {
      margin-top: 3rem;
      width: 10rem;
      height: 10rem;
    }
  }
`;
