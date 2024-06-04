import { useEffect, useState } from "react";
import { validateCredentials } from "../../../utils/validation";
import useAuth from "../../../hooks/useAuth";
import { EMAIL_SIGN_IN, EMAIL_SIGN_UP } from "../../../constants/constants";
import styled from "styled-components";

const initialCredentials = { email: "", password: "", nickname: "" };

const EmailAuth = ({ isLoginPage }) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorMessage, setErrorMessage] = useState("");
  const actionType = isLoginPage ? EMAIL_SIGN_IN : EMAIL_SIGN_UP;
  const { handleAuth } = useAuth(actionType);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateCredentials(credentials, isLoginPage);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    await handleAuth(credentials);
    setCredentials(initialCredentials);
  };

  useEffect(() => {
    setCredentials(initialCredentials);
    setErrorMessage("");
  }, [isLoginPage]);

  return (
    <StForm onSubmit={handleSubmit}>
      <input
        placeholder="이메일을 입력해주세요."
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleInputChange}
      />
      <input
        placeholder="비밀번호를 입력해주세요."
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      {!isLoginPage && (
        <input
          placeholder="닉네임을 입력해주세요."
          name="nickname"
          type="text"
          value={credentials.nickname}
          onChange={handleInputChange}
        />
      )}
      <button type="submit">{isLoginPage ? "로그인" : "회원가입"}</button>
      {errorMessage && <span>{errorMessage}</span>}
    </StForm>
  );
};

export default EmailAuth;

export const StForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;

  input {
    font-size: 1.8rem;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    transition: all 250ms ease-in;
    &:focus {
      border-color: var(--color-red-30);
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
    font-size: 1.4rem;
    position: absolute;
    bottom: 1rem;
    left: 2rem;
  }
`;
