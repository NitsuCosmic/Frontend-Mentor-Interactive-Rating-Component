const formLabels = document.querySelectorAll(".form__label");
const form = document.getElementById("star-rating-form");
const starRatingWrapper = document.getElementById("star-rating-wrapper");
const thankYouWrapper = document.getElementById("thank-you-wrapper");
const selectedStarsSpan = document.getElementById("selected-stars")
let selectedValue = undefined;

formLabels.forEach((label) => {
	label.addEventListener("click", () => {
		selectedValue = label.nextElementSibling.value;

		// Remove "selected" class from all labels before adding to clicked one
		formLabels.forEach((otherLabel) => otherLabel.classList.remove("selected"));
		label.classList.add("selected");
	});
});

form.addEventListener("submit", (e) => {
  if (!selectedValue) {
		e.preventDefault();
		return
	} else {
		selectedStarsSpan.innerText = `You selected ${selectedValue} out of 5`
		starRatingWrapper.classList.add("hidden");
		thankYouWrapper.style.display = "block";
		e.preventDefault();
	}
});