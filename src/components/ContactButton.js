import React from "react";

function ContactButton() {
	return (
		<div className="mt-6">
			<a href="mailto:dylandeloney@live.com">
				<span className="border-2 rounded-md border-red-400 px-10 py-2 text-red-400 text-xl hover:text-red-300 hover:border-red-300">
					Contact Me!
				</span>{" "}
			</a>
		</div>
	);
}

export default ContactButton;
