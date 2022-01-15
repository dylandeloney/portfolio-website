/* Your types here! */
export default {
	title: "Projects",
	name: "projects",
	type: "document",
	fields: [
		{
			title: "Project Title",
			name: "projectTitle",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Project Description",
			name: "projectDesc",
			type: "text",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Project Link",
			name: "projectLink",
			type: "url",
		},
		{
			title: "Project Image",
			name: "projectImage",
			type: "image",
		},
	],
};
