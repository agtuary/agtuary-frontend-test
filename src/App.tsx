import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Calculator } from "./pages/calculator";

function App() {
	return (
		<div className="App" style={{ width: "100%", height: "100%" }}>
			<Calculator />
		</div>
	);
}

export default App;
