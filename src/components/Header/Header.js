import "./Header.css";
import headerLogo from "../../assets/header-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container container--header-with">
                <div className="header-logo">
                    <Link to={"/table"}>
                        <img src={headerLogo} alt="logo"></img>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
