import { NavBar } from "./styles"
import Logo from "../../assets/Logo.svg"
import Logout from "../../assets/logout.svg"
export const Header = () => {
    return(
        <NavBar>
            <nav>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <img src="" alt="ProfilePicture" />
                    <img src={Logout} alt="Logout" />
                </div>
            </nav>
        </NavBar>
    )
}