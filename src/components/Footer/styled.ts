import styled from "styled-components";
import { light } from "../../style/theme";

export const Footer = styled.footer`
  width: 100%;
  height: 7.5rem;
  background-color: ${light.tertiary};
  color: ${light.text};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  padding-inline: 2rem;

  > img {
    width: 15rem;
  }
`;
