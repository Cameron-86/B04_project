import styled from "styled-components";

export const Modal = styled.div`
  background-color: var(--color-black-50);
  color: var(--secondary-color);
  width: 300px;
  height: 190px;
  border: 1px solid var(--black);
  border-radius: 17px;
  position: fixed;
  top: 0;
  bottom: 4rem;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem;
  padding-top: 4rem;
  p {
    font-size: 25px;
  }
`;

export const StForm = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;
    input {
      width: 240px;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid var(--white);
      color: var(--white);
      background-color: transparent;
      padding: 0.6rem;
      border-radius: 3px;
      &:focus {
        outline: none;
        border-bottom: 1px solid var(--secondary-color);
      }
    }
  }
`;

export const CloseBtn = styled.button`
  color: var(--white);
  position: absolute;
  right: 3rem;
  top: 3rem;
  border: none;
  background-color: transparent;
  font-size: 22px;
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  left: 150px;
  button {
    background-color: var(--secondary-color);
    color: var(--white);
    font-size: 18px;
    font-weight: 900;
    border-radius: 8px;
    width: 80px;
    height: 40px;
    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;