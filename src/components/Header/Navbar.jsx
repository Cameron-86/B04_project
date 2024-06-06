import { FaRegUser } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { SIGN_OUT } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import useAuthState from "../../hooks/useAuthState";
import { openModal } from "../../store/slices/authSlice";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const { handleAuth } = useAuth(SIGN_OUT);
  const dispatch = useDispatch();
  const { isLoggedin, setIsLoggedin } = useAuthState();
  const handleSignOut = async () => {
    await handleAuth();
    setIsLoggedin(false);
  };

  return (
    <Container>
      <div>
        {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
        {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
        {isLoggedin && <button onClick={() => navigate("/write")}>새 글 작성</button>}
      </div>
      {user && (
        <Link to={`/mypage/${user.id}`}>
          <Icon />
        </Link>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  button {
    width: 103px;
    height: 32px;
    font-weight: 500;
    background-color: transparent;
    border-radius: 16px;
    transition: all 100ms ease-out;
    &:hover {
      background-color: var(--secondary-color);
      color: var(--white);
      border: none;
      font-weight: 600;
    }
  }

  div {
    display: flex;
    gap: 5px;
  }

  a {
    color: var(--black);
  }
`;

const Icon = styled(FaRegUser)`
  width: 24px;
  height: 24px;
`;
