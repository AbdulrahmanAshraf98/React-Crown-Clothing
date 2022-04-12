import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/HomePage/home-page.jsx";
import ShopPage from "./pages/ShopPage/shop-page.jsx";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</>
	);
}

export default App;
