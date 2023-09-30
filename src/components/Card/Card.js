import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Card.css";
import logo from "../../assets/login-logo.svg";

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
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="login-input input-eye"
                />
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
