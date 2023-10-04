import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Login from "./containers/Login/Login";
import Table_products from "./containers/Table_products/Table_products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <Login /> */}
        <Table_products />
    </React.StrictMode>
);
