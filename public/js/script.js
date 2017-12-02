function playSong(audioSrc, song, artist) {
	const player = $('#player');
	const songLabel = $('.nowplaying #song');
	const artistLabel = $('.nowplaying #artist');
	player.attr('src',audioSrc);
	document.getElementById('player').play();
	songLabel.text(song);
	artistLabel.text(artist);

	player.show();
	songLabel.show();
	artistLabel.show();
	console.log(audioSrc);
}

function setOverlayDisplay(show) {
    document.getElementById('overlay').style.display = show ? "block" : "none";
}

// songs is a list of song objects, each object has a title and an audioSrc
function loadTable(songs) {
	console.log(typeof(songs));
	console.log(songs);
	const table = $('tbody');
	let content = '';
	for(let i = 0; i < songs.length; i++) {
		content +='<tr><td>';
		content += songs[i].title;
		content += '</td><td>';
		content += '<audio type="audio/mpeg" src=' + songs[i].audioSrc + ' preload="auto" controls></audio>';
		content += '</td></tr>';
	}
	table.html(content);
}

$('document').ready(function() {
	const player = $('#player');
	const songLabel = $('.nowplaying #song');
	const artistLabel = $('.nowplaying #artist');
	player.hide();
	songLabel.hide();
	artistLabel.hide();
});