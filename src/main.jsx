import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./contexts/ProductContext.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
	<AuthContextProvider>
	<ProductProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ProductProvider>
	</AuthContextProvider>
		

	</React.StrictMode>
);
