import "./CardProduct.css";

const CardProduct = ({ data, className, done, undone, onRefer }) => {
    return (
        <>
            {data.map(({ id, name, quantiti, price, img, description }) => {
                return (
                    <article
                        key={id}
                        className={className}
                        onClick={() => onRefer(id)}
                    >
                        <img
                            className="img-preview-card"
                            src={img}
                            alt="products"
                        ></img>
                        <p className="kind-product-preview-card">
                            {name}
                            <span>{description}</span>
                        </p>

                        <div className="box-info--preview-card">
                            <p className="price-product-preview-card">
                                {price}$
                            </p>
                            <p className="quantiti-product-preview-card">
                                Quantiti: {quantiti}
                            </p>
                        </div>
                        <div className="position-state-product">
                            {quantiti > 0 && (
                                <>
                                    <p className="state-product-preview-card">
                                        goods ready for dispatch
                                    </p>
                                    {done}
                                </>
                            )}
                            {quantiti <= 0 && (
                                <>
                                    <p className="state-product-preview-card error-delivery">
                                        goods not ready
                                    </p>
                                    {undone}
                                </>
                            )}
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default CardProduct;
