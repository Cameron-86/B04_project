import styled from "styled-components";
import { OAUTH, OAUTH_PROVIDERS } from "../../constants/constants";
import googleLogo from "../../assets/images/social-icons/logo_google.svg";
import githubLogo from "../../assets/images/social-icons/logo_github2.svg";
import useAuth from "../../hooks/useAuth";

const SignInWithOAuth = () => {
  const { handleAuth } = useAuth(OAUTH);
  return (
    <Container>
      <StBtn onClick={() => handleAuth(null, OAUTH_PROVIDERS.GOOGLE)}>
        <SocialIcon src={googleLogo} alt="" />
      </StBtn>
      <StBtn onClick={() => handleAuth(null, OAUTH_PROVIDERS.GITHUB)}>
        <SocialIcon src={githubLogo} alt="" />
      </StBtn>
    </Container>
  );
};

export default SignInWithOAuth;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const StBtn = styled.button`
  background-color: transparent;
  border: none;
`;

const SocialIcon = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;
