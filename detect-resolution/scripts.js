$(document).ready(function() {

	const heightInfoControl = $("#heightInfo");
	const widthInfoControl = $("#widthInfo");
	const messageControl = $("#message");

	setTimeout(function() {
		const width = window.screen.width; 
		const height = window.screen.height; 

		heightInfoControl.text(`${height}px`);
		widthInfoControl.text(`${width}px`);
		messageControl.hide();
	}, 500);

});
