import "./Button.css";

const Button = ({ type, className, value }) => (
    <button type={type} className={className}>
        {value}
    </button>
);

export default Button;
