function playSong(audioSrc, song, artist) {
	const player = $('#player');
	const songLabel = $('.nowplaying #song');
	const artistLabel = $('.nowplaying #artist');
	player.attr('src',audioSrc);
	document.getElementById('player').play();
	songLabel.text(song);
	artistLabel.text(artist);
	console.log(audioSrc);
}

function setOverlayDisplay(show) {
    document.getElementById('overlay').style.display = show ? "block" : "none";
}

/*
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	console.log(images);
	const info = $('.info-pane');
	const preview = $('.preview-image');

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		info.fadeIn(200);
		preview.css('background-image', target.css('background-image'));
	}
}

$('document').ready(function() {
	attachEventHandlers();
});
*/