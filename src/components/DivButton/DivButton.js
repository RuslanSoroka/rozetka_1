import "./DivButton.css";

const DivButton = (props) => {
    return (
        <div className="div-buttons">
            {props.icon}
            {props.text}
        </div>
    );
};

export default DivButton;
