// const copyBtns = document.querySelectorAll(".copy-number");
// for (const copyBtn of copyBtns) {
// 	console.log(copyBtn);
// }

// Get Element Functionality
function getElementValue(id) {
	const targetElement = document.getElementById(id).innerText;
	return targetElement;
}

// Set Element Functionality
function setElementValue(id, newValue) {
	document.getElementById(id).innerText = newValue;
}

// Favourite Count Functionality
document.getElementById("cards-row").addEventListener("click", function (e) {
	if (e.target.className.includes("fa-heart")) {
		const allreadyFavourited = getElementValue("heart-icon");
		const newFavourited = Number(allreadyFavourited) + 1;
		setElementValue("heart-icon", newFavourited);
	}
});

// Copy Count Functionality
document.getElementById("cards-row").addEventListener("click", function (e) {
	if (e.target.className.includes("copy-number")) {
		const allreadyCopied = getElementValue("copied-number");
		const newCopied = Number(allreadyCopied) + 1;
		setElementValue("copied-number", newCopied);
	}
});
