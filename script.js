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
	const copyBtn = e.target.closest(".copy-number");
	if (copyBtn) {
		const allreadyCopied = getElementValue("copied-number");
		const newCopied = Number(allreadyCopied) + 1;
		setElementValue("copied-number", newCopied);
	}

	// copy to clipboard
	const card = copyBtn.closest(".single-card");
	const number = card.querySelector("h3").innerText.trim();
	navigator.clipboard.writeText(number).then(() => {
		copyBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Copied`;
		setTimeout(() => {
			copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
		}, 1500);
	});
});
