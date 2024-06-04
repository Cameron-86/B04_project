import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StDialog = styled.dialog`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 40rem;
  background-color: white;
  padding: 4rem;
  border-radius: 1.6rem;
`;

export const Container = styled.div`
  width: 80%;
`;
