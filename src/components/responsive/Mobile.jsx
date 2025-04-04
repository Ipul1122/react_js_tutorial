    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { Menu, X } from "lucide-react";

    const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg p-4 md:hidden">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">
            <Link to="/">MISOPU</Link>
            </h1>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
        </div>

        {isOpen && (
            <ul className="bg-yellow-500 space-y-2 p-4 mt-2 rounded-md">
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
                    className="block text-white text-lg hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                >
                    {item.label}
                </Link>
                </li>
            ))}
            </ul>
        )}
        </nav>
    );
    };

    export default Mobile;
