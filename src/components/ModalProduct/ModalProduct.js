import "./ModalProduct.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ModalButton from "../ModalButton/ModalButton";

const SignupSchema = Yup.object().shape({
    category: Yup.string().min(2, "Too Short!").required("Required"),
    name: Yup.string().min(2, "Too Short!").required("Required"),
    fullName: Yup.string().min(2, "Too Short!").required("Required"),
    quantiti: Yup.number().required("Required"),
    price: Yup.number().min(1, "Too Short!").required("Required"),
    img: Yup.string().min(1, "Too Short!").required("Required"),
    description: Yup.string().min(1, "Too Short!").required("Required"),
});

const ModalProduct = ({ className, title, editData, onCancel, onSubmit }) => {
    const setInitialValues = () => {
        if (!editData) {
            const initialValues = {
                category: "",
                name: "",
                fullName: "",
                quantiti: "",
                price: "",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbPYR14RHnvKBcdKr3rZUyFEclQNuSw-OWQ&usqp=CAU",
                description: "",
            };
            return initialValues;
        }

        const initialValues = {
            category: editData.category,
            name: editData.name,
            fullName: editData.fullName,
            quantiti: editData.quantiti,
            price: editData.price,
            img: editData.img,
            description: editData.description,
        };
        return initialValues;
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
                        onSubmit={(initialValues) => onSubmit(initialValues)}
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
                                                    className={`${className}-form-field ${
                                                        errors.category &&
                                                        touched.category
                                                            ? "field-error"
                                                            : ``
                                                    }`}
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
                                                    className={`${className}-form-field ${
                                                        errors.name &&
                                                        touched.name
                                                            ? "field-error"
                                                            : ``
                                                    }`}
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
                                    Full Name
                                    <Field name="fullName">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <input
                                                    className={`${className}-form-field ${
                                                        errors.fullName &&
                                                        touched.fullName
                                                            ? "field-error"
                                                            : ``
                                                    }`}
                                                    type="text"
                                                    placeholder="Full Name"
                                                    {...field}
                                                />
                                                {touched.fullName &&
                                                    errors.fullName && (
                                                        <div className="error-table">
                                                            {errors.fullName}
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
                                                    className={`${className}-form-field ${
                                                        errors.quantiti &&
                                                        touched.quantiti
                                                            ? "field-error"
                                                            : ``
                                                    }`}
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
                                                    className={`${className}-form-field ${
                                                        errors.price &&
                                                        touched.price
                                                            ? "field-error"
                                                            : ``
                                                    }`}
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
                                    Image
                                    <Field name="img">
                                        {({
                                            field,
                                            form: { touched, errors },
                                        }) => (
                                            <div>
                                                <input
                                                    className={`${className}-form-field ${
                                                        errors.img &&
                                                        touched.img
                                                            ? "field-error"
                                                            : ``
                                                    }`}
                                                    type="text"
                                                    placeholder="Price"
                                                    {...field}
                                                />
                                                {touched.img && errors.img && (
                                                    <div className="error-table">
                                                        {errors.img}
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
                                                    className={`${className}-form-field ${
                                                        errors.description &&
                                                        touched.description
                                                            ? "field-error"
                                                            : ``
                                                    }`}
                                                    placeholder="Description"
                                                    {...field}
                                                />
                                                {touched.description &&
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
