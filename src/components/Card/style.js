import styled from "styled-components";

export const PokeCardContainer = styled.div`
  gap: 10px;
  margin: 2%;
  width: 20vw;
  height: 20vh;
  background-color: red;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImg = styled.img`
  height: 60%;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white-space;
  a {
    text-decoration: none;
  }
  button {
    align-items: center;
    background-color: #fee6e3;
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
    cursor: pointer;
    display: flex;
    font-family: Inter, sans-serif;
    font-size: 12px;
    height: 38px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:after {
      background-color: #111;
      border-radius: 8px;
      content: "";
      display: block;
      height: 38px;
      left: 0;
      width: 90%;
      position: absolute;
      top: -2px;
      transform: translate(2px, 2px);
      transition: transform 0.2s ease-out;
      z-index: -1;
    }

    &:hover:after {
      transform: translate(0, 0);
    }

    &:active {
      background-color: #ffdeda;
      outline: 0;
    }

    &:hover {
      outline: 0;
    }
  }
`;
