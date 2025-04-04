import React from "react";
import { Link } from "react-router-dom";

const Desktop = () => {
return (
<nav className="hidden md:flex justify-between items-center bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg p-4">
    <h1 className="text-3xl font-bold text-white">
    <Link to="/">REACTJS</Link>
    </h1>
    <ul className="flex space-x-6">
    {[
        { path: "/", label: "Home" },
        { path: "/fetch", label: "Fetch API" },
        { path: "/axios", label: "Axios API" },
        { path: "/praktek/change-bg", label: "Change Background" },
        { path: "/praktek/online-status", label: "Online Status" },
        { path: "/praktek/product-list", label: "Product List" },
        { path: "/praktek/pokemon", label: "Pokemon API" },
        { path: "/praktek/todo", label: "To-Do List" },
    ].map((item) => (
        <li key={item.path}>
            <Link
                to={item.path}
                className="text-white text-lg hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md transition"
            >
            {item.label}
        </Link>
        </li>
    ))}
    </ul>
</nav>
);
};

export default Desktop;
