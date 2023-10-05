import "./Table.css";
import { BsFillArchiveFill, BsFillPencilFill } from "react-icons/bs";

const Table = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>{props.id}</th>
                    <th>{props.category}</th>
                    <th>{props.name}</th>
                    <th>{props.quantiti}</th>
                    <th>{props.price}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((products) => {
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
