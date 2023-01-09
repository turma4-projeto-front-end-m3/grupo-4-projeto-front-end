import { HeaderContainer, LogoutImg, ProfileImg } from "./styles";

import Logo from "../../assets/Logo.svg";
import Logout from "../../assets/logout.svg";
import ProfileImage from "../../assets/img_perfil_default.png"

export const Header = () => {
    return(
        <HeaderContainer>
            <nav>
                <img src={Logo} />
                <div>
                    <ProfileImg src={ProfileImage} alt="Foto de perfil"/>
                    <LogoutImg src={Logout} alt="Logout" />
                </div>
            </nav>
        </HeaderContainer>
    )
}