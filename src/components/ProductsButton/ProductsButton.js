import "./ProductsButton.css";

const DivButton = ({ icon, text, onClick }) => (
    <div className="div-buttons" onClick={onClick}>
        {icon}
        {text}
    </div>
);

export default DivButton;
