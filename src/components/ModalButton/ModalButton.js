import "./ModalButton.css";

const ModalButton = ({ className, type, text, onClick, disabled }) => (
    <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled ? disabled : false}
    >
        {text}
    </button>
);
export default ModalButton;
