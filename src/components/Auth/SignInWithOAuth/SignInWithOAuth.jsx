import { OAUTH, OAUTH_PROVIDERS } from "../../../constants/constants";
import useAuth from "../../../hooks/useAuth";
import { StDiv } from "./SignInWithOAuth.styled";

const SignInWithOAuth = () => {
  const { handleAuth } = useAuth(OAUTH);
  return (
    <StDiv>
      <button onClick={() => handleAuth(null, OAUTH_PROVIDERS.GOOGLE)}>구글</button>
      <button onClick={() => handleAuth(null, OAUTH_PROVIDERS.GITHUB)}>깃헙</button>
    </StDiv>
  );
};

export default SignInWithOAuth;
