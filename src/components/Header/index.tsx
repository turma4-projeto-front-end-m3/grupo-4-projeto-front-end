import { HeaderContainer, ProfileImg } from "./styles";

import Logo from "../../assets/Logo.svg";
import { FiLogOut } from "react-icons/fi"
import ProfileImage from "../../assets/img_perfil_default.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/")
    }
    
    return(
        <HeaderContainer>
            <nav>
                <div className="logo_container">
                    <img src={Logo} />
                    <h1>MyRecipes</h1>
                </div>

                <div className="profile_container">
                    <ProfileImg src={ProfileImage} alt="Foto de perfil"/>
                    <FiLogOut className="logoutImg" onClick={logout} />
                </div>
            </nav>
        </HeaderContainer>
    )
}