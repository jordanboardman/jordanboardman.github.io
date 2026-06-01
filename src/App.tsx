import type React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
	return (
		<div className="is-preload">
			<Header />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
