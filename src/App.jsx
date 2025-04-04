        import React from "react";
        import { Routes, Route } from "react-router-dom";
        import "./App.css";

        // Import Navbar Responsive
        import Desktop from "./components/responsive/Desktop";
        import Tab from "./components/responsive/Tab";
        import Mobile from "./components/responsive/Mobile";

        // Import halaman lain
        import { Greeting, Umur } from "./components/Greeting";
        import ButtonKlik from "./components/ButtonKlik";
        import UserStatus from "./components/userStatus";
        import NameList from "./components/NameList";
        import UseStateUseEffect from "./components/UseStateUseEffect";
        import Fetch from "./fetchApi/Fetch";
        import UserListAxios from "./fetchApi/Axios";
        import ChangeBgColour from "./praktek/ChangeBgColour";
        import OnlineStatus from "./praktek/OnlineStatus";
        import ProductList from "./praktek/ProductList";
        import PokemonApi from "./praktek/PokemonApi";
        import ToDoList from "./praktek/ToDoList";

        function App() {
        return (
            <div>
            {/* Navbar berdasarkan ukuran layar */}
            <div className="sm:hidden">
            {/* Mobile Mode */}
            <Mobile />
            </div>
            <div className="hidden sm:block md:hidden">
            {/* Tablet Mode */}
            <Tab />
            </div>
            <div className="hidden md:block">
            {/* Desktop Mode */}
            <Desktop />
            </div>



            {/* Routing */}
            <Routes>
                <Route
                path="/"
                element={
                    <div>
                    <h2>Halaman Uji Coba</h2>
                    <Greeting name="Ipul" />
                    <Umur umur={20} />
                    <ButtonKlik />
                    <UserStatus />
                    <NameList />
                    <UseStateUseEffect />
                    </div>
                }
                />
                <Route path="/fetch" element={<Fetch />} />
                <Route path="/axios" element={<UserListAxios />} />
                <Route path="/praktek/change-bg" element={<ChangeBgColour />} />
                <Route path="/praktek/online-status" element={<OnlineStatus />} />
                <Route path="/praktek/product-list" element={<ProductList />} />
                <Route path="/praktek/pokemon" element={<PokemonApi />} />
                <Route path="/praktek/todo" element={<ToDoList />} />
            </Routes>
            </div>
        );
        }

        export default App;
