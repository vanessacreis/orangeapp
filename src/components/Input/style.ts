import styled from "styled-components";
import { light } from "../../style/theme";

export const Box = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  color: ${light.text};

  > label {
    font-weight: 500;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  height: 4.2rem;
  background-color: ${light.tertiary};

  font-family: ${light.font};
  font-size: 1.6rem;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 0.5rem;

  &:focus {
    outline: 2px solid ${light.primary};
  }
`;
