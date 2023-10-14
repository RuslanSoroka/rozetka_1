import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./containers/Login/Login";
import TableProducts from "./containers/TableProducts/TableProducts";
import PreviewProducts from "./containers/PrewiewProducts/PrewiewProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <Login /> */}
        {/* <TableProducts /> */}
        <PreviewProducts />
    </React.StrictMode>
);
