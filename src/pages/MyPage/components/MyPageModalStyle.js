import styled from "styled-components";

export const Modal = styled.div`
  background-color: var(--white);
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
  justify-content: center;
  align-items: center;
  padding: 5rem;
  button {
    padding: 0.3rem 0.8rem;
  }
`;

export const StForm = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;
    p {
      margin-right: 1rem;
      font-size: 1.6rem;
    }
    input {
      padding: 0.6rem;
      border-radius: 3px;
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 3rem;
  top: 3rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 11.8rem;
  & button {
    margin-right: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
