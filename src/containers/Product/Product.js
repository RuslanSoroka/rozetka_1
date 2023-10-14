import "./Product.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

const Product = () => {
    const { productId } = useParams();
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <p style={{ color: "red", fontSize: "30px" }}>
                        {productId}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Product;
