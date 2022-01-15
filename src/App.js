import "./App.css";
import { About, Projects, Hero, Contact, Footer, Navbar } from "./components";
import React, { useRef } from "react";

// Navbar,

function App() {
	//Refs for scrolling to component on Navbar Link
	const contactRef = useRef();
	const projectRef = useRef();
	const aboutRef = useRef();

	function handleClick(e) {
		switch (e) {
			case "About":
				aboutRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "Project":
				projectRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "Contact":
				contactRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			default:
				console.log("Didn't scroll");
				break;
		}
	}
	return (
		<div className="App ">
			<Navbar handleClick={handleClick} />

			<div className="container ">
				<Hero handleClick={handleClick} />
				<div ref={aboutRef}>
					<About />
				</div>
				<div ref={projectRef}>
					<Projects />
				</div>
				<div ref={contactRef}>
					<Contact />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
