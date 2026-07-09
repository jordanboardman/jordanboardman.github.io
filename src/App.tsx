import { useEffect, useRef, useState } from "react";
import type React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

type RevealSectionProps = {
	children: React.ReactNode;
	className?: string;
};

const RevealSection: React.FC<RevealSectionProps> = ({
	children,
	className = "",
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.12 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
		>
			{children}
		</div>
	);
};

const App: React.FC = () => {
	return (
		<div className="is-preload">
			<RevealSection>
				<Header />
			</RevealSection>
			<RevealSection>
				<About />
			</RevealSection>
			<RevealSection>
				<Projects />
			</RevealSection>
			<RevealSection>
				<Contact />
			</RevealSection>
			<RevealSection>
				<Footer />
			</RevealSection>
		</div>
	);
};

export default App;
