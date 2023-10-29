import "./IdProduct.css";

const IdProduct = ({ className, data, done, undone, backButton }) => {
    const { id, name, fullName, price, quantiti, img, description } = data;

    return (
        <section className={`${className}-info`}>
            <div key={id} className={`${className}-shop`}>
                <div className="position-back-button-box">
                    <p className={`${className}-title`}>{fullName}</p>
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
                        <p className={`${className}-price price-preview-card`}>
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
                    <p className="description">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default IdProduct;
