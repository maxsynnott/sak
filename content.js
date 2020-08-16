console.log("Running SAK")

const titleDivs = document.querySelectorAll(".item-title");

const upload = (event) => {
	console.log(event.target);
};

Array.from(titleDivs).forEach((titleDiv) => {
	const button = document.createElement("button");
	const buttonText = document.createTextNode("Github");
	button.classList.add("github-upload-button");
	button.onclick = upload;

	button.appendChild(buttonText);

	titleDiv.insertAdjacentElement("beforeend", button);
});
