import styled from "styled-components";

export const StyledLikeButton = styled.a`
  font-family: "Inconsolata", monospace;
  font-size: 1.13em;
  font-weight: bold;

  @mixin transition-all {
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
  }
  
  $slate-color: rgb(16,24,50);
  $blue-color: #00bcdd;
  $pink-color: #ff00ff;

  color: $slate-color;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 0.075em;
  padding: .8em 1em;
  margin: auto 2em;
  position: relative;
  align-self: center;
  text-transform: uppercase;
  border: 3px $blue-color solid;
  border-image: linear-gradient(45deg, $blue-color 0%, $pink-color 100%);
  border-image-slice: 1 1 0 0;
  z-index: 1;
  box-shadow: -0.5em .5em transparentize($slate-color,1);
  transform-origin: left bottom;
  @include transition-all;
  
  &:before,
  &:after {
    border: 3px $blue-color solid;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
  }
  
  &:before {
    border-image: linear-gradient(45deg, $blue-color 0%, adjust-hue($blue-color,10%) 100%);
    border-image-slice: 1 1 0 1;
    left: -0.59em; top: .15em;
    width: .31em;
    height: 100%;
    transform: skewY(-45deg);
  }
  

  &:after {
    border-image: linear-gradient(45deg, $blue-color 0%, $pink-color 100%);
    border-image-slice: 1 1 1 0;
    bottom: -0.61em; right: 0.16em;
    width: 100%;
    height: .31em;
    transform: skewX(-45deg);
  }
  

  &:hover {
    //border-image-slice: 1;
    background-color: white;
    background-size: 90%;
    transform: translate(0.5em,-0.5em);
    box-shadow: -1em 1em .15em transparentize($slate-color,.9);
    // box-shadow: -1em 1em 1em transparentize($blue-color,.9), -1em 1.9em 1.9em transparentize($slate-color,.9), 0em .38em .38em transparentize($slate-color,.9), 0em .76em .76em transparentize($slate-color,.9), 0em 1.52em 1.52em transparentize($slate-color,.9);
    
    
    &:before {
      @include background-image(linear-gradient(45deg, $blue-color 0%, adjust-hue($blue-color,10%) 100%));
      height: calc(100% - .13em);
      border-image-slice: 1;
    }
    
    &:after {
      @include background-image(linear-gradient(45deg, $blue-color 0%, $pink-color 100%));
      width: calc(100% - .13em);
      border-image-slice: 1;
    }
  
    background-color: $blue-color;
    @include background-image(linear-gradient(45deg, $blue-color 0%, $pink-color 100%));
    border-image: linear-gradient(45deg, lighten($blue-color,20%) 0%, lighten($pink-color,20%) 100%);
    border-image-slice: 1;
    color: white;
    
    &:before {
      border-image-slice: 1;
      @include background-image(linear-gradient(45deg, $blue-color 0%, adjust-hue($blue-color,10%) 100%));
      left: -0.75em;
      top: .15em;
    }
    
    &:after {
      border-image-slice: 1;
      @include background-image(linear-gradient(45deg, $blue-color 0%, $pink-color 100%));
      bottom: -0.75em;
      right: .15em;
    }
    
    &:hover {
      background: white;
      border-image: linear-gradient(45deg, $blue-color 0%, $pink-color 100%);
      border-image-slice: 1;
      color: $slate-color;
      
      &:before {
        height: 100%;
      }
      &:after {
        width: 100%;
      }
    }
`;
