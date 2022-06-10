import styled from "styled-components";
import { light } from "../../style/theme";

export const Header = styled.header`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.5rem;

  a {
    cursor: pointer;
  }

  img {
    max-width: 15rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  padding-inline: 3rem;

  .nav_link {
    color: ${light.text};
    text-decoration: none;
    text-transform: uppercase;

    &.active {
      font-weight: bold;
      color: ${light.primary};
    }

    &:hover {
      color: ${light.primary};
    }
  }

  .nav_link::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: ${light.primary};
    display: block;
    position: relative;
    bottom: -1rem;
    left: -0.5rem;
    transition: width 0.2s;
  }

  .nav_link:hover::after,
  .nav_link.active::after {
    width: 100%;
    padding-inline: 0.8rem;
  }
`;

export const User = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-primary {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 18rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > h3 {
      font-family: ${light.fontTitle};
      font-size: 1.8rem;
      font-weight: 300;
      margin-right: 1rem;
    }

    > img {
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 100rem;
    }
  }
`;
