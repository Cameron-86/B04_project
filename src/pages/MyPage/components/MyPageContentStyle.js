import styled from "styled-components";

export const Container = styled.div`
  width: 920px;
  padding: 30px;
  margin: 8rem auto;
`;
export const UserInfoSection = styled.section`
  border: 1px solid var(--black);
  border-radius: 17px;
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  padding-bottom: 3rem;
  button {
    display: flex;
    align-items: end;
    background-color: transparent;
    border: none;
    color: var(--color-black-30);
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const StDiv = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin-left: 2rem;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--black);
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

export const PostsSection = styled.ul`
  font-size: 2rem;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StLi = styled.li`
  width: 80%;
  border: 1px solid var(--black);
  border-radius: 17px;
  margin: 1rem;
  padding: 2rem 2.8rem;
  h4 {
  }
  p {
    margin-top: 1.2rem;
    margin-left: 1.2rem;
    font-size: 1.8rem;
  }
`;

/*
div.line {
    background: var(#e9ecef);
    
  }

 
 */
