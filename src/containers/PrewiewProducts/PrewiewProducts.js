import "./PrewiewProducts.css";
import Header from "../../components/Header/Header";
import CardProduct from "../../components/CardProduct/CardProduct";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { useState, useEffect } from "react";

const PreviewProducts = () => {
    const [previewProductsData, setPreviewProductsData] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const PRODUCTS_API =
        "https://6526885b917d673fd76c791f.mockapi.io/productsPreview";

    const getProducts = async () => {
        const respond = await fetch(PRODUCTS_API);
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
