import "./Header.css";
import headerLogo from "../../assets/header-logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container container--header-with">
                <div className="header-logo">
                    <a href="#">
                        <img src={headerLogo} alt="logo"></img>
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Header;
