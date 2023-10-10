import "./Input.css";

const Input = ({ type, placeholder, name, className, onChange, value }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={className}
            onChange={onChange}
            value={value}
        ></input>
    );
};

export default Input;
