import "./PrewiewProducts.css";
import Header from "../../components/Header/Header";
import CardProduct from "../../components/CardProduct/CardProduct";
import { PRODUCTS_API } from "../../constants";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { useState, useEffect } from "react";

const PreviewProducts = () => {
    const [previewProductsData, setPreviewProductsData] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const respond = await fetch(`${PRODUCTS_API}/productsPreview`);
        const data = await respond.json();
        setPreviewProductsData(data);
    };

    return (
        <div className="bg-page">
            <Header />
            <div className="main">
                <div className="container">
                    <section className="preview-products">
                        <div className="flex-box-preview-cards">
                            <CardProduct
                                data={previewProductsData}
                                className="preview-card"
                                done={
                                    <BsCartCheck className="bs-cart-check-icon" />
                                }
                                undone={<BsCartX className="bs-cart-x-icon" />}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PreviewProducts;
