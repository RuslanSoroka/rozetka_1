import "./IdProduct.css";

const IdProduct = ({ className, data, done, undone, backButton }) => {
    return (
        <section className={`${className}-info`}>
            {data.map(({ id, name, price, quantiti, img, description }) => {
                return (
                    <div key={id} className={`${className}-shop`}>
                        <div className="position-back-button-box">
                            <p className={`${className}-title`}>{name}</p>
                            {backButton}
                        </div>
                        <article key={id} className={`${className}-shop-info`}>
                            <div className={`${className}-box-img`}>
                                <img
                                    className={`${className}-img`}
                                    src={img}
                                    alt={name}
                                ></img>
                            </div>
                            <div className={`${className}-box-info`}>
                                <div
                                    className={`${className}-position-state position-state-preview`}
                                >
                                    {quantiti > 0 && (
                                        <>
                                            <p
                                                className={`${className}-state state-preview-card`}
                                            >
                                                goods ready
                                            </p>
                                            {done}
                                        </>
                                    )}
                                    {quantiti <= 0 && (
                                        <>
                                            <p
                                                className={`${className}-state state-preview-card error-delivery`}
                                            >
                                                goods unavailable
                                            </p>
                                            {undone}
                                        </>
                                    )}
                                </div>
                                <p
                                    className={`${className}-price price-preview-card`}
                                >
                                    {price}$
                                </p>
                                <p
                                    className={`${className}-quantiti quantiti-preview-card`}
                                >
                                    Quantiti: {quantiti}
                                </p>
                            </div>
                        </article>
                        <div className={`${className}-full-description`}>
                            <p className="title-descriptions">Description</p>
                            <p className="description1">
                                {description.description1}
                            </p>
                            <p className="description2">
                                {description.description2}
                            </p>
                            <p className="description3">
                                {description.description3}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default IdProduct;
