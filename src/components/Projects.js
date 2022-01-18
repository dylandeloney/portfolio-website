import React, { useState, useEffect } from "react";
import sanityClient from "../client";

function Projects() {
	const [projects, setProjects] = useState(null);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "projects"]{
      projectTitle,
	  projectDesc,
	  techStack,
	  projectLink,
	  "imageUrl": projectImage.asset->url

    }`
			)
			.then((data) => setProjects(data))
			.catch(console.error);
	}, [projects]);

	if (projects === null) {
		return <h1> Dumb developer has a bug</h1>;
	}

	return (
		<div className="mt-80" id="projects">
			<h1
				className="text-red-400 text-3xl border-b-2 border-red-400  pb-2 mb-8"
				id="projectHeader">
				Projects I've Created
			</h1>
			<ul>
				{projects.map((project, index) => (
					<li className="mb-24 inline-flex h-96 w-full" key={index}>
						<div className="h-full flex flex-col">
							<h1 className="text-2xl my-4 text-red-300 grow">
								{index + 1 + ". " + project.projectTitle}
							</h1>

							<div className="  absolute w-1/5 mt-16 bg-gray-700/90 z-20 rounded-lg">
								<p className="p-1">{project.projectDesc}</p>
							</div>
							<div className="mb-4 ">
								<h3 className="mb-4">Tech used in this project: </h3>
								<ul className="columns-2 techList">
									{project.techStack.map((tech, index) => (
										<li key={index}>{tech}</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-2/3 ml-auto">
							<div
								className={hoveredIndex === index ? "" : "overlay"}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}>
								<a href={project.projectLink} target="_blank" rel="noreferrer">
									<img src={project.imageUrl} alt="" />
								</a>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Projects;
