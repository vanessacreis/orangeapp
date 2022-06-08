import styled from "styled-components";
import { light } from "../../style/theme";

export const Header = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.5rem;
  /* position: absolute;
  z-index: 2; */

  a {
    cursor: pointer;
  }

  img {
    max-width: 15rem;
  }
`;

export const Nav = styled.nav`
  width: 10%;

  .nav_link {
    color: ${light.text};
    text-decoration: none;
    text-transform: uppercase;

    &.active {
      color: ${light.primary};
    }

    &:hover {
      color: ${light.primary};
    }
  }
`;
