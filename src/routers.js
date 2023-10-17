import Login from "./containers/Login/Login";
import TableProducts from "./containers/TableProducts/TableProducts";
import PreviewProducts from "./containers/PrewiewProducts/PrewiewProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./containers/Product/Product";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/table" element={<TableProducts />} />
                <Route path="/preview" element={<PreviewProducts />} />
                <Route path="/preview/:productId" element={<Product />} />
            </Route>
            <Route path="*" element={<div>404. Page is not found!</div>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
