import { FaRegUser } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { SIGN_OUT } from "../../constants/constants";
import { useDispatch } from "react-redux";
import useAuthState from "../../hooks/useAuthState";
import { openModal } from "../../store/slices/authSlice";
const Navbar = () => {
  const { handleAuth } = useAuth(SIGN_OUT);
  const dispatch = useDispatch();
  const { isLoggedin, setIsLoggedin } = useAuthState();
  const handleSignOut = async () => {
    await handleAuth();
    setIsLoggedin(false);
  };

  return (
    <>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {<FaRegUser />}
    </>
  );
};

export default Navbar;
