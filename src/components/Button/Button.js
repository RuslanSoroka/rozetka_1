import "./Button.css";

const Button = (props) => {
    return (
        <button type={props.type} className={props.className}>
            {props.value}
        </button>
    );
};

export default Button;
