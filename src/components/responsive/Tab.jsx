        import React from "react";
        import { Link } from "react-router-dom";

        const Tab = () => {
        return (
            <nav className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg p-4 sm:block md:block lg:hidden">
            <h1 className="text-2xl font-bold text-white">
                <Link to="/">MISOPU</Link>
            </h1>
            <ul className="flex space-x-4">
                {[
                { path: "/", label: "Home" },
                { path: "/fetch", label: "Fetch API" },
                { path: "/axios", label: "Axios API" },
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

        export default Tab;
