import { Link, Outlet } from "react-router-dom";

export default function Product() {

    return (
        <>
            <Link to='featured'>Featured Product</Link>
            <Link to='new'>New Product</Link>
            <Outlet />
        </>
    )
}