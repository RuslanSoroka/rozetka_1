import "./Product.css";
import Header from "../../components/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PRODUCTS_API } from "../../constants";
import IdProduct from "../../components/IdProduct/IdProduct";
import { BsPatchCheck, BsPatchMinus, BsArrowLeft } from "react-icons/bs";

const Product = () => {
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await fetch(`${PRODUCTS_API}/product/${productId}`);
        const data = await response.json();

        setSelectedProduct(data);
    };

    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <IdProduct
                        className="product"
                        data={selectedProduct}
                        done={<BsPatchCheck className="bs-path-check" />}
                        undone={<BsPatchMinus className="bs-path-minus" />}
                        backButton={
                            <BsArrowLeft
                                className="bs-arrow-left"
                                onClick={() => navigate(-1)}
                            />
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Product;
