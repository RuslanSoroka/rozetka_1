import Login from "./containers/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import { Suspense, lazy } from "react";
import { BeatLoader } from "react-spinners";

const LazyTableProducts = lazy(() =>
    import("./containers/TableProducts/TableProducts")
);

const LazyPreviewProducts = lazy(() =>
    import("./containers/PrewiewProducts/PrewiewProducts")
);

const LazyProduct = lazy(() => import("./containers/Product/Product"));

const AppRouter = () => (
    <BrowserRouter>
        <Suspense
            fallback={
                <div className="loader">
                    <BeatLoader color="#44b26f" />
                </div>
            }
        >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/table" element={<LazyTableProducts />} />
                    <Route path="/preview" element={<LazyPreviewProducts />} />
                    <Route
                        path="/preview/:productId"
                        element={<LazyProduct />}
                    />
                </Route>
                <Route path="*" element={<div>404. Page is not found!</div>} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default AppRouter;
