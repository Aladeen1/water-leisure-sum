import flatpickr from "flatpickr";
require("flatpickr/dist/flatpickr.css");


let userdate = document.getElementById('calendar-target').flatpickr({
	inline: true,
	altInput: true,
	altFormat: 'd/m/Y',
	dateFormat: 'd/m/Y',
	onChange: function (selectedDates, dateStr, instance) {
		document.getElementById("date-output-target").innerText = `Ticket for ${dateStr}`;
	}
});

document.querySelector(".form-control").style.display = "none";

