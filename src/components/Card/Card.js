import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Card.css";
import logo from "../../assets/login-logo.svg";

const Card = () => {
    return (
        <section className="login-card">
            <div className="login-card-logo">
                <img src={logo}></img>
            </div>
            <form className="login-form">
                <Input
                    attributes={{
                        placeholder: "User Name",
                        type: "text",
                        name: "usreName",
                        className: "login-input",
                    }}
                />
                <Input
                    attributes={{
                        placeholder: "Password",
                        type: "password",
                        name: "password",
                        className: "login-input input-eye",
                    }}
                />
                <Button
                    button={{
                        className: "button login-card-button",
                        value: "Login",
                        type: "submit",
                    }}
                />
            </form>
        </section>
    );
};

export default Card;
