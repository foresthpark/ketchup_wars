import styled from "styled-components";

export const StyledDislikeButton = styled.a`
  font-family: "Inconsolata", monospace;
  font-size: 1.13em;
  font-weight: bold;
  transition: all 200ms ease-in-out;

  color: rgb(16, 24, 50);
  cursor: pointer;
  display: inline-block;
  letter-spacing: 0.075em;
  padding: 0.8em 1em;
  margin: auto 2em;
  position: relative;
  align-self: center;
  text-transform: uppercase;
  border: 3px #00bcdd solid;
  border-image: linear-gradient(45deg, #00bcdd 0%, #ff00ff; 100%);
  border-image-slice: 1 1 0 0;
  z-index: 1;
  box-shadow: -0.5em 0.5em transparentize(rgb(16, 24, 50), 1);
  transform-origin: left bottom;

  &:before,
  &:after {
    border: 3px #00bcdd solid;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
  }

  &:before {
    border-image: linear-gradient(
      45deg,
      #00bcdd 0%,
      adjust-hue(#00bcdd, 10%) 100%
    );
    border-image-slice: 1 1 0 1;
    left: -0.59em;
    top: 0.15em;
    width: 0.31em;
    height: 100%;
    transform: skewY(-45deg);
  }

  &:after {
    border-image: linear-gradient(45deg, #00bcdd 0%, #ff00ff; 100%);
    border-image-slice: 1 1 1 0;
    bottom: -0.61em;
    right: 0.16em;
    width: 100%;
    height: 0.31em;
    transform: skewX(-45deg);
  }

  &:hover {
    background-color: white;
    background-size: 90%;
    transform: translate(0.5em, -0.5em);
    box-shadow: -1em 1em 0.15em transparentize(rgb(16, 24, 50), 0.9);

    &:before {
     background-image(
        linear-gradient(45deg, #00bcdd 0%, adjust-hue(#00bcdd, 10%) 100%)
      );
      height: calc(100% - 0.13em);
      border-image-slice: 1;
    }

    &:after {
      background-image(
        linear-gradient(45deg, #00bcdd 0%, #ff00ff; 100%)
      );
      width: calc(100% - 0.13em);
      border-image-slice: 1;
    }
  }
`;
