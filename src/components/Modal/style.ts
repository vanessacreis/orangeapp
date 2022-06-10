import styled from "styled-components";
import { light } from "../../style/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: ${light.black}80;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 65rem;
  height: 38rem;
  background-color: ${light.modal};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .close {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    align-self: flex-end;
    margin-right: 1.2rem;
    cursor: pointer;

    &:before,
    &:after {
      content: " ";
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: ${light.primary};
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export const Content = styled.div`
  margin: 1rem 3rem;

  > h3 {
    color: ${light.text};
    font-family: ${light.fontTitle};
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1rem;
  }

  .time {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
