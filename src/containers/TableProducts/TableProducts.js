import ProductsButton from "../../components/ProductsButton/ProductsButton";
import Table from "../../components/Table/Table";
import "./TableProducts.css";
import Header from "../../components/Header/Header";
import { PRODUCTS_API } from "../../constants";
import { BsPlusLg, BsPerson } from "react-icons/bs";
import { useState, useEffect } from "react";

const TableProducts = () => {
    const [infoProductsTable, setInfoProductsTable] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const respond = await fetch(`${PRODUCTS_API}/productsTable`);
        const data = await respond.json();
        setInfoProductsTable(data);
    };

    return (
        <div className="bg-page">
            <Header />
            <div className="main">
                <div className="container">
                    <div className="admin-panel">
                        <ProductsButton
                            text="Preview"
                            icon={<BsPerson className="icon" />}
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
                        />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TableProducts;
