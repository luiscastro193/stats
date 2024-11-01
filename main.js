"use strict";
const status = document.querySelector('p');

function setStatus() {
	status.textContent = localStorage.cookie ? "Disabled" : "Enabled";
}

document.querySelector('button').onclick = () => {
	if (localStorage.cookie)
		localStorage.removeItem("cookie");
	else
		localStorage.cookie = true;
	
	setStatus();
};

setStatus();
