import styled from "styled-components";
import { light } from "../../style/theme";

export const CardBox = styled.div`
  width: 50rem;
  background-color: ${light.tertiary};
  transition: height 5s;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem;
  margin-top: 0rem;
  box-shadow: 2px 2px 10px ${light.gray}80;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
      font-weight: bold;
      font-family: ${light.fontTitle};
    }

    > .date {
      font-size: 1.4rem;
      color: ${light.text};
    }
  }

  .hour {
    font-size: 1.4rem;
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

  .edit {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .createdAt {
      font-size: 1.2rem;
    }

    .iconBtn {
      align-self: flex-end;
      background-color: transparent;
      border: none;
      outline: none;
      margin-right: 1.5rem;
      cursor: pointer;

      > img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
