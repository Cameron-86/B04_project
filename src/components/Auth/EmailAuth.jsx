import { useEffect, useState } from "react";
import { validateCredentials } from "../../utils/validation";
import useAuth from "../../hooks/useAuth";
import { EMAIL_SIGN_IN, EMAIL_SIGN_UP } from "../../constants/constants";
import styled from "styled-components";

const initialState = { email: "", password: "", nickname: "" };
const EmailAuth = ({ isLoginPage }) => {
  const [credentials, setCredentials] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(initialState);
  const actionType = isLoginPage ? EMAIL_SIGN_IN : EMAIL_SIGN_UP;
  const { handleAuth } = useAuth(actionType);
  console.log(errorMessage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateCredentials(credentials, isLoginPage, setErrorMessage);
    if (!isValid) {
      console.log("hi");
      return;
    }
    await handleAuth(credentials);
    setCredentials(initialState);
  };

  useEffect(() => {
    setCredentials(initialState);
    setErrorMessage(initialState);
  }, [isLoginPage]);

  return (
    <StForm onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="이메일을 입력해주세요."
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <span>{errorMessage.email}</span>
      </div>
      <div>
        {" "}
        <input
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <span>{errorMessage.password}</span>
      </div>

      {!isLoginPage && (
        <div>
          <input
            placeholder="닉네임을 입력해주세요."
            name="nickname"
            type="text"
            value={credentials.nickname}
            onChange={handleInputChange}
          />
          <span>{errorMessage.nickname}</span>
        </div>
      )}
      <button type="submit">{isLoginPage ? "로그인" : "회원가입"}</button>
      {/* {errorMessage && <span>{errorMessage}</span>} */}
    </StForm>
  );
};

export default EmailAuth;

export const StForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 15px;

  div {
    position: relative;
    width: 100%;
  }

  input {
    font-size: 1.8rem;
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--color-black-50);

    border-bottom: 1px solid var(--white);
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    transition: all 250ms ease-in;
    &:focus {
      border-color: var(--secondary-color);
    }
  }

  button {
    font-size: 1.8rem;
    font-weight: 500;
    width: 80%;
    height: 4.5rem;
    border-radius: 1rem;
    border: none;
    margin-top: 1rem;
  }

  span {
    color: var(--color-red-40);
    font-weight: 500;
    font-size: 1.2rem;
    position: absolute;
    bottom: -20px;
    left: 0px;
  }
`;
