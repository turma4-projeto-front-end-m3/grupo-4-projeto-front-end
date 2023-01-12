import { HeaderContainer, ProfileImg } from "./styles";

import Logo from "../../assets/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import ProfileImage from "../../assets/img_perfil_default.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  console.log(user?.imgUrl);

  return (
    <HeaderContainer>
      <nav>
        <div className="logo_container">
          <Link to="/home">
            <img src={Logo} />
          </Link>
          <h1>MyRecipes</h1>
        </div>

        <div className="profile_container">
          <Link to="/profile">
            <ProfileImg src={user?.imgUrl} alt="" />
          </Link>
          <FiLogOut className="logoutImg" onClick={logout} />
        </div>
      </nav>
    </HeaderContainer>
  );
};
