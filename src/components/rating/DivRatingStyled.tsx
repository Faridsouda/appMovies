import styled from "styled-components";

export const DivRatingStyled = styled.div`
  display: inline-block;
  font-size: 1rem;
  font-family: Times; /* peut être changé */
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 0.5rem;
    color: #d4af37;
  }

  &::after {
    content: "★★★★★";
    letter-spacing: 0.5rem;
    color: #e4e5e9;
  }

  &:before {
    content: "★★★★★";
    letter-spacing: 0.5rem;
    color: #d4af37;
    position: absolute;
    z-index: 1;
    display: block;
    width: calc(${(props) => props.rating} / 5 * 100%);
    overflow: hidden;
  }
`;
