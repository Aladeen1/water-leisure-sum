import "@fortawesome/fontawesome-free/js/all";
import flatpickr from "flatpickr";
import { Korean } from "flatpickr/dist/l10n/ko.js";
import "flatpickr/dist/flatpickr.css";

console.log(document.getElementById('calendar-target'))
let userdate = document.getElementById('calendar-target').flatpickr({
	locale: Korean,
	inline: true, 
	altInput: true,
	altFormat: 'd/m/Y',
	dateFormat: 'Y/m/d',
	onChange: function (selectedDates, dateStr, instance) {
		document.getElementById("date-output-target").innerText = `예약날짜 ${dateStr}`;
		document.getElementById("date-input").value = `${dateStr}`;
	}
});

document.querySelector(".form-control").style.display = "none";


