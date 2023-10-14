import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Card.css";
import logo from "../../assets/login-logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { SERVER_URL } from "../../constants/index";

const Card = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [requireName, setRequireName] = useState("");
    const [requirePassword, setRequirePassword] = useState("");
    const [invalidData, setInvalidData] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(true);

    function handleChange(event) {
        if (event.target.name === "userName") {
            setUserName(event.target.value);
        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setRequireName("Name is require!");
        setRequirePassword("Password is require!");
        if (userName.length >= 3 && password.length >= 3) {
            if (userName && password) {
                const item = {
                    registration: {
                        name: userName,
                        password: password,
                    },
                };
                fetch(SERVER_URL, {
                    method: "POST",
                    body: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => {
                        if (response.status > 400) {
                            setInvalidData("Name or password invalid!");
                            throw Error("Name or password invalid!");
                        } else {
                            setInvalidData("");
                            return response.json();
                        }
                    })
                    .then((data) =>
                        localStorage.setItem("token", JSON.stringify(data.key))
                    )
                    .catch((error) => console.log(error));
            }
        }
    }

    const handleClick = () => setIsShowPassword(!isShowPassword);
    return (
        <section className="login-card">
            <div className="login-card-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="box-form-valid">
                    <Input
                        placeholder="User Name"
                        type="text"
                        name="userName"
                        className="login-input"
                        onChange={handleChange}
                    />
                    {userName.length < 3 && (
                        <span className="error-required">{requireName}</span>
                    )}
                </div>
                <div className="box-form-valid position-for-eye">
                    <Input
                        placeholder="Password"
                        type={isShowPassword ? "password" : "text"}
                        name="password"
                        className="login-input input-eye"
                        onChange={handleChange}
                    />
                    {password.length < 3 && (
                        <span className="error-required">
                            {requirePassword}
                        </span>
                    )}
                    {isShowPassword ? (
                        <FaEye className="eye" onClick={handleClick} />
                    ) : (
                        <FaEyeSlash className="eye" onClick={handleClick} />
                    )}
                </div>
                <Button
                    className="button login-card-button"
                    value="Login"
                    type="submit"
                />
                <span className="error-invalid">{invalidData}</span>
            </form>
        </section>
    );
};

export default Card;
