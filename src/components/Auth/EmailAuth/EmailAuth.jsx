import { useEffect, useState } from "react";
import { validateCredentials } from "../../../utils/validation";
import useAuth from "../../../hooks/useAuth";
import { EMAIL_SIGN_IN, EMAIL_SIGN_UP } from "../../../constants/constants";
import { StForm, Title } from "./EmailAuth.styled";

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
  }, [isLoginPage]);

  return (
    <StForm onSubmit={handleSubmit}>
      <Title>{isLoginPage ? "로그인" : "회원가입"}</Title>
      <input name="email" type="email" value={credentials.email} onChange={handleInputChange} />
      <input name="password" type="password" value={credentials.password} onChange={handleInputChange} />
      {!isLoginPage && <input name="nickname" type="text" value={credentials.nickname} onChange={handleInputChange} />}
      <button type="submit">{isLoginPage ? "로그인" : "회원가입"}</button>
      {errorMessage && <span>{errorMessage}</span>}
    </StForm>
  );
};

export default EmailAuth;
