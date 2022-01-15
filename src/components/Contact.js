import React from "react";
import ContactButton from "./ContactButton";

function Contact() {
	return (
		<div className="text-center  mt-80" id="contact">
			<h1 className="text-red-400 text-7xl mt-1 mb-4">Get In Touch</h1>
			<p className="leading-7 text-xl">
				{" "}
				I'm currently looking for employment as a software engineer. <br /> My
				inbox is always open, so feel free to reach out, and I'll do
				<br /> my best to get back to you!
			</p>
			<ContactButton />
		</div>
	);
}

export default Contact;
