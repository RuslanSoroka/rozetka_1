import DivButton from "../../components/DivButton/DivButton";
import Table from "../../components/Table/Table";
import "./Table_products.css";
import Header from "../../components/Header/Header";
import { BsPlusLg, BsPerson } from "react-icons/bs";

const Table_products = () => {
    const products = [
        {
            id: 1,
            category: "PC",
            name: "Lenovo Y50-70",
            quantiti: 5,
            price: "25.000.00",
        },
        {
            id: 2,
            category: "Sport",
            name: "Ball",
            quantiti: 10,
            price: "100.00",
        },
        {
            id: 3,
            category: "Tourism",
            name: "Boots",
            quantiti: 20,
            price: "1.000.00",
        },
    ];
    return (
        <div className="bg-page-table">
            <Header />
            <div className="main">
                <div className="container">
                    <div className="admin-panel">
                        <DivButton
                            text="Preview"
                            icon={<BsPerson className="icon" />}
                        />
                        <DivButton
                            text="Add product"
                            icon={<BsPlusLg className="icon" />}
                        />
                    </div>
                    <section className="products-table">
                        <h2 className="product-table__title">Products</h2>
                        <Table
                            data={products}
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

export default Table_products;
