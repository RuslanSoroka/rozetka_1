import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Card.css";
import logo from "../../assets/login-logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Card = () => {
    return (
        <section className="login-card">
            <div className="login-card-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <form className="login-form">
                <Input
                    placeholder="User Name"
                    type="text"
                    name="userName"
                    className="login-input"
                />
                <div className="position-for-eye">
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="login-input input-eye"
                    />
                    <FaEye className="open-eye" />
                </div>
                <Button
                    className="button login-card-button"
                    value="Login"
                    type="submit"
                />
            </form>
        </section>
    );
};

export default Card;
