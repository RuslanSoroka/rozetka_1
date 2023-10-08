import "./Input.css";

const Input = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            className={props.className}
            onChange={props.onChange}
            value={props.value}
        ></input>
    );
};

export default Input;
