import "./CardProduct.css";

const CardProduct = ({ data, className, done, undone, onRefer }) => (
    <>
        {data.map(({ id, fullName, quantiti, price, img }) => {
            return (
                <div className="column" key={id}>
                    <article className={className} onClick={() => onRefer(id)}>
                        <img
                            className="img-preview-card"
                            src={img}
                            alt="products"
                        ></img>

                        <p className="kind-preview-card">{fullName}</p>

                        <div className="box-preview-card">
                            <p className="price-preview-card">{price}$</p>
                            <p className="quantiti-preview-card">
                                Quantiti: {quantiti}
                            </p>
                        </div>
                        <div className="position-state-preview">
                            {quantiti > 0 && (
                                <>
                                    <p className="state-preview-card">
                                        goods ready for dispatch
                                    </p>
                                    {done}
                                </>
                            )}
                            {quantiti <= 0 && (
                                <>
                                    <p className="state-preview-card error-delivery">
                                        goods not ready
                                    </p>
                                    {undone}
                                </>
                            )}
                        </div>
                    </article>
                </div>
            );
        })}
    </>
);

export default CardProduct;
