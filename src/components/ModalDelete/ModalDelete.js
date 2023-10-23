import ModalButton from "../ModalButton/ModalButton";
import "./ModalDelete.css";

const ModalDelete = ({ className, onCancel, onDelete }) => (
    <div className={className}>
        <div className={`${className}-insert`}>
            <h2 className={`${className}-title`}>Delete Product</h2>
            <p className={`${className}-text`}>
                Are u sure you want to delete this product?
            </p>
            <div className={`modal-buttons-box`}>
                <ModalButton
                    className="modal-button cancel"
                    type="button"
                    text="Cancel"
                    onClick={onCancel}
                />
                <ModalButton
                    className="modal-button delete"
                    type="button"
                    text="Delete"
                    onClick={onDelete}
                />
            </div>
        </div>
    </div>
);

export default ModalDelete;
