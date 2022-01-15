import React from "react";
import aboutSample from "../media/images/AboutSample.jpg";

function About() {
	return (
		<div id="aboutMe">
			<h1 className="text-red-400 text-3xl ">About Me</h1>

			<div className="inline-flex ">
				<div className="w-3/5 border-t-2 border-red-400">
					<p className="leading-7 mt-4">
						Hello! My name is Dylan, and I enjoy creating software to problem
						solve. I first became interested in developing software in 2017 when
						I, a broke highschool student, couldn't afford a return on
						investment calculator software I enjoyed using. Turns out, building
						the ugliest calculator possible made me fall in love with building
						tools with software!
					</p>
					<br />
					<p className="leading-7">
						Fast forwarding to today, I have had the privilege of completing a
						<span className="text-red-300">
							{" "}
							Bachelor's degree in Applied Computer Science{" "}
						</span>
						from Troy University. Recently, my main focus has been building
						projects to build my résumé and to learn new skills.
					</p>
					<br />
					<h3>Here are a few of the technologies that I've worked with:</h3>
					<ul className="columns-2 w-3/4 mt-4 techList">
						<li>Javascript</li>
						<li>React</li>
						<li>React-Redux</li>
						<li>MongoDB</li>
						<li>Express</li>
						<li>Node.js</li>
					</ul>
				</div>
				<div className="w-1/3 ml-auto ">
					<img src={aboutSample} alt="sample" />
				</div>
			</div>
		</div>
	);
}

export default About;
