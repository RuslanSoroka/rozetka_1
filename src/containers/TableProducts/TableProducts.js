import ProductsButton from "../../components/ProductsButton/ProductsButton";
import Table from "../../components/Table/Table";
import "./TableProducts.css";
import Header from "../../components/Header/Header";
import { PRODUCTS_API } from "../../constants";
import { BsPlusLg, BsPerson } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

const TableProducts = () => {
    const [infoProductsTable, setInfoProductsTable] = useState([]);
    const [isProductsLoaded, setIsProductsLoaded] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [productId, setProductID] = useState("");

    useEffect(() => {
        if (!isProductsLoaded) {
            getProducts();
        }
    }, [isProductsLoaded]);

    const getProducts = async () => {
        const respond = await fetch(`${PRODUCTS_API}/productsTable`);
        const data = await respond.json();
        setInfoProductsTable(data);
        setIsProductsLoaded(true);
    };

    const navigate = useNavigate();
    const showPreviewPage = () => navigate("/preview");

    const toggleTrigerModal = (id) => {
        setProductID(id);
        setModalDelete(!modalDelete);
    };

    const deleteProduct = async () => {
        await fetch(`${PRODUCTS_API}/productsTable/${productId}`, {
            method: "DELETE",
        });
        toggleTrigerModal();
        setIsProductsLoaded(false);
    };

    return (
        <>
            <div className="bg-page">
                <Header />
                <div className="main">
                    <div className="container">
                        <div className="admin-panel">
                            <ProductsButton
                                text="Preview"
                                icon={<BsPerson className="icon" />}
                                onClick={showPreviewPage}
                            />
                            <ProductsButton
                                text="Add product"
                                icon={<BsPlusLg className="icon" />}
                            />
                        </div>
                        <section className="products-table">
                            <h2 className="product-table__title">Products</h2>
                            <Table
                                data={infoProductsTable}
                                id="Id"
                                category="Category"
                                name="Name"
                                quantiti="Quantiti"
                                price="Price($)"
                                onModalDelete={toggleTrigerModal}
                            />
                        </section>
                    </div>
                </div>
            </div>
            {modalDelete && (
                <ModalDelete
                    className="modal-delete"
                    onCancel={toggleTrigerModal}
                    onDelete={deleteProduct}
                />
            )}
        </>
    );
};

export default TableProducts;
