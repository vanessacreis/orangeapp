import styled from "styled-components";
import { light } from "../../style/theme";

export const Button = styled.button`
  background-color: ${light.primary};
  color: ${light.white};
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: ${light.text};
  cursor: pointer;
  box-shadow: 0 2px 10px ${light.gray}80;
  filter: brightness(0.9);
  transition: filter 0.2s;

  &.circle {
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 2.5rem;
  }

  &.large {
    height: 4rem;
    width: 35rem;
    border: none;
    border-radius: 1rem;
  }

  &:hover {
    filter: brightness(1.1);
  }
`;
