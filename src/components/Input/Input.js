import "./Input.css";

const Input = (props) => {
    const attribute = props.attributes;
    const placeholder = props.attributes.placeholder;
    return (
        <input
            type={attribute.type}
            placeholder={attribute.placeholder}
            name={attribute.name}
            className={attribute.className}
        ></input>
    );
};

export default Input;
