import "./Table.css";
import { BsFillArchiveFill, BsFillPencilFill } from "react-icons/bs";

const Table = ({ id, category, name, quantiti, price, data }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>{id}</th>
                    <th>{category}</th>
                    <th>{name}</th>
                    <th>{quantiti}</th>
                    <th>{price}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((products) => {
                    return (
                        <tr key={products.id}>
                            <td>{products.id}</td>
                            <td>{products.category}</td>
                            <td>{products.name}</td>
                            <td>{products.quantiti}</td>
                            <td>{products.price}</td>
                            <td>
                                <BsFillPencilFill className="icon-in-table mr-8" />
                                <BsFillArchiveFill className="icon-in-table" />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            {/* <tr className="table-tr-body"> */}

            {/* </tr> */}
        </table>
    );
};

export default Table;
