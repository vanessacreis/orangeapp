import styled from "styled-components";
import { light } from "../../style/theme";

export const CardBox = styled.div`
  width: 50rem;
  background-color: ${light.tertiary};
  transition: height 5s;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 10px ${light.gray}80;

  > .title {
    font-weight: bold;
    font-family: ${light.fontTitle};
  }

  > .date {
    font-size: 1.2rem;
    color: ${light.gray};
  }
`;

export const Details = styled.details`
  > summary {
    font-size: 1.2rem;
    color: ${light.gray};
    text-align: end;
  }

  .description {
    margin-block: 1rem;
  }

  > button {
    border: none;
    background-color: transparent;
    margin-right: 1.5rem;
  }
`;
