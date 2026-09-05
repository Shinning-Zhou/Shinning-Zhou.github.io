(function () {
	"use strict";

	var dialog = document.getElementById("wechat-dialog");
	var triggers = document.querySelectorAll(".wechat-trigger");
	var closeButton = dialog ? dialog.querySelector(".wechat-close") : null;
	var activeTrigger = null;

	if (!dialog || !closeButton || !triggers.length) return;

	triggers.forEach(function (trigger) {
		trigger.addEventListener("click", function () {
			activeTrigger = trigger;
			document.body.classList.add("wechat-dialog-open");
			dialog.showModal();
		});
	});

	closeButton.addEventListener("click", function () {
		dialog.close();
	});

	dialog.addEventListener("click", function (event) {
		if (event.target === dialog) dialog.close();
	});

	dialog.addEventListener("close", function () {
		document.body.classList.remove("wechat-dialog-open");
		if (activeTrigger) activeTrigger.focus();
	});
})();
