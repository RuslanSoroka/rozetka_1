import "./Button.css";

const Button = (props) => {
    return (
        <button type={props.button.type} className={props.button.className}>
            {props.button.value}
        </button>
    );
};

export default Button;
