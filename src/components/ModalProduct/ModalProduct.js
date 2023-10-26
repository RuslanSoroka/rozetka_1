import "./ModalProduct.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ModalButton from "../ModalButton/ModalButton";

const SignupSchema = Yup.object().shape({
    category: Yup.string().min(2, "Too Short!").required("Required"),
    name: Yup.string().min(2, "Too Short!").required("Required"),
    quantiti: Yup.string().min(1, "Too Short!").required("Required"),
    price: Yup.string().min(1, "Too Short!").required("Required"),
});

const ModalProduct = ({ className, title, editData, onCancel, onSubmit }) => {
    const setInitialValues = () => {
        if (editData !== null && editData !== undefined) {
            const initialValues = {
                category: editData.category,
                name: editData.name,
                quantiti: editData.quantiti,
                price: editData.price,
                description: "",
            };
            return initialValues;
        } else {
            const initialValues = {
                category: "",
                name: "",
                quantiti: "",
                price: "",
                description: "",
            };
            return initialValues;
        }
    };
    return (
        <div className="modal">
            <div className={`${className}-insert`}>
                <div className={`${className}-header`}>
                    <h2 className={`${className}-title`}>{title}</h2>
                </div>
                <div className={`${className}-body`}>
                    <Formik
                        initialValues={setInitialValues()}
                        validationSchema={SignupSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className={`${className}-form`}>
                                <label className={`${className}-form-label`}>
                                    Category
                                    <Field name="category">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <input
                                                    className={`${className}-form-field`}
                                                    type="text"
                                                    placeholder="Category"
                                                    {...field}
                                                />
                                                {touched.category &&
                                                    errors.category && (
                                                        <div className="error-table">
                                                            {errors.category}
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                                <label className={`${className}-form-label`}>
                                    Name
                                    <Field name="name">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <input
                                                    className={`${className}-form-field`}
                                                    type="text"
                                                    placeholder="Name"
                                                    {...field}
                                                />
                                                {touched.name &&
                                                    errors.name && (
                                                        <div className="error-table">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                                <label className={`${className}-form-label`}>
                                    Quantiti
                                    <Field name="quantiti">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <input
                                                    className={`${className}-form-field`}
                                                    type="text"
                                                    placeholder="Qiantiti"
                                                    {...field}
                                                />
                                                {touched.quantiti &&
                                                    errors.quantiti && (
                                                        <div className="error-table">
                                                            {errors.quantiti}
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                                <label className={`${className}-form-label`}>
                                    Price
                                    <Field name="price">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <input
                                                    className={`${className}-form-field`}
                                                    type="text"
                                                    placeholder="Price"
                                                    {...field}
                                                />
                                                {touched.price &&
                                                    errors.price && (
                                                        <div className="error-table">
                                                            {errors.price}
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                                <label className={`${className}-form-label`}>
                                    Description
                                    <Field name="description">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <textarea
                                                    className={`${className}-form-field`}
                                                    placeholder="Description"
                                                    {...field}
                                                />
                                                {touched.descriptioni &&
                                                    errors.description && (
                                                        <div className="error-table">
                                                            {errors.description}
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                                    </Field>
                                </label>
                                <div className="modal-products-buttons-box">
                                    <ModalButton
                                        className="modal-button cancel"
                                        type="button"
                                        text="Cancel"
                                        onClick={onCancel}
                                    />
                                    <ModalButton
                                        className="modal-button submit"
                                        type="submit"
                                        text="Submit"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ModalProduct;
