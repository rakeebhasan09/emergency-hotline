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

		// copy to clipboard
		const card = copyBtn.closest(".single-card");
		const number = card.querySelector("h3").innerText.trim();
		navigator.clipboard.writeText(number).then(() => {
			alert(`${number} This number has been copied✅`);
			copyBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Copied`;
			setTimeout(() => {
				copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
			}, 1500);
		});
	}
});

// Call Button Functionality
document.getElementById("cards-row").addEventListener("click", function (e) {
	const callBtn = e.target.closest(".give-call");
	if (callBtn) {
		const card = callBtn.closest(".single-card");
		const cardTitle = card.querySelector("h2").innerText;
		const cardSlogan = card.querySelector("p").innerText;
		const contactNumber = card.querySelector("h3").innerText;
		const availableCoins = Number(getElementValue("available-coins"));
		const historyContainer = document.getElementById("history-container");

		if (availableCoins < 20) {
			alert("❌ Not enough coins to make a call. Please recharge.");
			return;
		} else {
			alert(`✅ Calling to ${cardSlogan} ${contactNumber}`);
			const newAvailableCoint = availableCoins - 20;
			setElementValue("available-coins", newAvailableCoint);
			const now = new Date();
			const time = now.toLocaleTimeString();

			// Create New Div
			const newDiv = document.createElement("div");
			newDiv.innerHTML = `
				<div
					class="single-history p-4 bg-[#FAFAFA] rounded-lg flex flex-col md:flex-row md:items-center justify-between"
				>
					<!-- Title And Number Card -->
					<div class="w-[calc(100%-100px)">
						<h3
							class="text-[18px] text-[#111] font-semibold font-inter"
						>
							${cardTitle}
						</h3>
						<p
							class="text-[#5C5C5C] text-[18px] font-hindMadurai"
						>
							${contactNumber}
						</p>
					</div>
					<!-- Call Time Card -->
					<div class="w-[100px]">
						<p
							class="text-[#111] text-[18px] font-hindMadurai"
						>
							${time}
						</p>
					</div>
				</div>
			`;

			historyContainer.appendChild(newDiv);
		}
	}
});

// Clear Call History
document.getElementById("clear-history").addEventListener("click", function () {
	document.getElementById("history-container").innerHTML = "";
});
