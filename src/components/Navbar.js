import React, { useState, useEffect, useRef } from "react";
import samplePDF from "../media/pdf/resumeSample.pdf";

const Navbar = (props) => {
	const prevScrollY = useRef(0);

	const [displayNav, setDisplayNav] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (prevScrollY.current < currentScrollY && displayNav) {
				setDisplayNav(false);
			} else if (currentScrollY < 100) {
				setDisplayNav(false);
			}

			if (prevScrollY.current > currentScrollY && currentScrollY > 100) {
				setDisplayNav(true);
			}

			prevScrollY.current = currentScrollY;

			console.log(displayNav, currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [displayNav]);
	return (
		<div className=" h-16">
			<div className="w-full mb-0"></div>
			<header className={displayNav ? " fixed  " : " "}>
				<nav className="flex ml-6">
					<li
						onClick={() => props.handleClick("About")}
						className="inline-flex items-center py-3 px-3 my-3 rounded text-blue-100 hover:text-blue-300 cursor-pointer">
						About me
					</li>
					<li
						onClick={() => props.handleClick("Project")}
						className="inline-flex items-center py-3 px-3 my-3 rounded  hover:text-blue-300 cursor-pointer">
						Projects
					</li>

					<li
						onClick={() => props.handleClick("Contact")}
						className="inline-flex items-center py-3 px-3 my-3 rounded hover:text-blue-300 cursor-pointer">
						Contact
					</li>
					<li className="inline-flex items-center py-3 px-3 my-3 rounded  hover:text-blue-300 cursor-pointer">
						<a href={samplePDF} target="_blank">
							Resume
						</a>
					</li>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
