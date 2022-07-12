$(document).ready(function() {

	const heightInfoControl = $("#heightInfo");
	const widthInfoControl = $("#widthInfo");
	const messageControl = $("#message");

	setTimeout(function() {
		const width = window.screen.width * window.devicePixelRatio;
		const height = window.screen.height * window.devicePixelRatio;

		heightInfoControl.text(`${height}px`);
		widthInfoControl.text(`${width}px`);
		messageControl.hide();
	}, 500);

});
