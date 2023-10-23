import "./ModalButton.css";

const ModalButton = ({ className, type, text, onClick }) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
};
export default ModalButton;
