import styled from "styled-components";
import { light } from "../../style/theme";

export const Background = styled.ul`
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 110vh;

  li {
    width: 20px;
    height: 20px;
    background: ${light.secundary};
    border-radius: 1rem;
    display: block;
    position: absolute;
    list-style: none;
    animation: animate 20s infinite linear;
    bottom: -40px;
    z-index: -1;
  }

  li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    opacity: 0;
  }

  li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    opacity: 0;
  }

  li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    opacity: 0;
  }

  li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    opacity: 0;
  }

  li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    opacity: 0;
  }

  li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    opacity: 0;
  }

  li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    opacity: 0;
  }

  li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    opacity: 0;
  }

  li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    opacity: 0;
  }

  li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
    opacity: 0;
  }

  li:nth-child(11) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    opacity: 0;
  }

  li:nth-child(12) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    opacity: 0;
  }

  li:nth-child(13) {
    left: 10%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    opacity: 0;
  }

  @keyframes animate {
    from {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      opacity: 0.5;
    }

    to {
      transform: translateY(-500px) rotate(720deg);
    }
  }
`;
