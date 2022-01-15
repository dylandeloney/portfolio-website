import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import ContactButton from "./ContactButton";

const Hero = (props) => {
	return (
		<div className="h-screen w-full pt-16 mt-8">
			<div className="text-md w-full  ml-8">
				<h2 className="">Hello there, my name is</h2>
				<h1 className="text-red-400 text-7xl mt-1 mb-1">Dylan Deloney.</h1>
				<h1 className="text-red-300 text-5xl mt-1 mb-4">Software Engineer</h1>
				<p className="leading-7">
					I am a recent graduate with a Bachelor's degree in Applied Computer
					Science <br /> currently looking for oppurtunities to learn and grow
					as a Software Engineer. <br /> Currently I'm focused on building
					projects to add to my résumé and increase my skills.
				</p>
				<ContactButton />
				<br />
			</div>
			<div className="left-0 right-0 text-center absolute bottom-10">
				<button
					className="mt-4 border-2 rounded-full border-blue-200 px-10 py-2 text-blue-200 hover:text-blue-400 hover:border-blue-400"
					onClick={() => props.handleClick("About")}>
					<span>
						<IoIosArrowDown />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Hero;
