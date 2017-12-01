var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var currentSong = initialSongs();

app.set('view engine', 'hbs');
app.use(express.static('public'));

// POST form data is "url-encoded", so decode that into JSON for us
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, (request, response) => {
	console.log("Server is listening on port 3000. Go to http://localhost:3000/");
});

app.get("/", (request, response) => {
	response.render("home", {
		title: "Bruin Play",
		content: "Hello, World!",
		songs: currentSong
	})
});

// 6) TODO: Add book input by the form to our list of books on the server.
/**
 * Define the route to add a book to the library. We are posted the title, author, isbn,
 * and number of copies.
 * If the inputs are valid, create a new book objects and push it into the array.
 * Redirect to the library (to re-render the page)
 * If the inputs are not valid, render the error page.
 */
app.post('/songs/add', function(request, response) {
	let title = request.body.title;
	let artistName = request.body.artistName;
	let albumName = request.body.albumName;
	let audioSrc = "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/space.mp3";
	let albumCoverSrc = "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/alien.jpg";
	let audioImageSrc = null;
	
	if (title.length > 0 && artistName.length > 0 && albumName.length > 0) {
		currentSong.splice(0, 0, {audioSrc, audioImageSrc, title, artistName, albumName, albumCoverSrc});
		response.redirect('/');
	} else {
		console.log("You tried to add an invalid song into the elibrary.");
		response.redirect('/error');
	}
});

app.get('/error', function (request, response) {
	response.send('The song is invalid.');
});

// 7) TODO: Delete book specified by the client.
/**
 * Delete a book by its ISBN. We defined a variable in our route, and express puts its
 * into request.params.isbn, since we named the variable `isbn` in the route path.
 * We loop through the list of books to find the index of the one with an ISBN of the
 * give one, and once we do, we remove it (see Array.splice, MDN), and stop checking, 
 * to immediately refresh the library.
 */
 /*
app.get('/books/delete/:isbn', function(request, response) {
	var isbn = request.params.isbn;
	for (var i = 0; i < books.length; i++) {
		if (books[i].isbn === isbn) {
			books.splice(i, 1);
			break;
		}
	}

	response.redirect('/library');
});
*/

// TODO: Get music resources:
// Example resources: https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/resources.json

// whenever you start a new web app, think about the data that you need
function initialSongs() {
	return [{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/space.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/alien.jpg",
		"title" : "Alien",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/heaven.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/heaven.jpg",
		"title" : "Heaven",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/hell.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/hell.jpg",
		"title" : "Hell",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/sky.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/sky.jpg",
		"title" : "Sky",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/space.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/space.jpg",
		"title" : "Space",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/total_nonsense.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/total_nonsense.jpg",
		"title" : "Total Nonsense",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/transcend.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/transcend.jpg",
		"title" : "Transcend",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/nkansal-mix/urbana.mp3",
		"audioImageSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/nkansal-mix/urbana.jpg",
		"title" : "Urbana",
		"artistName" : "Nikhil Kansal",
		"albumName" : null,
		"albumCoverSrc" : null
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/24K%20Magic.mp3",
		"audioImageSrc" : null,
		"title" : "24K Magic",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Bruno%20Mars%20-%20Chunky%20%5BOfficial%20Audio%5D.mp3",
		"audioImageSrc" : null,
		"title" : "Chunky",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Bruno%20Mars%20-%20Finesse%20%5BOfficial%20Audio%5D.mp3",
		"audioImageSrc" : null,
		"title" : "Finesse",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Bruno%20Mars%20-%20Perm%20%5BOfficial%20Audio%5D.mp3",
		"audioImageSrc" : null,
		"title" : "Perm",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Calling%20All%20My%20Lovelies.mp3",
		"audioImageSrc" : null,
		"title" : "Calling All My Lovelies",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Straight%20Up%20%20Down.mp3",
		"audioImageSrc" : null,
		"title" : "Straight Up & Down",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Thats%20What%20I%20Like.mp3",
		"audioImageSrc" : null,
		"title" : "That's What I Like",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Too%20Good%20To%20Say%20Goodbye.mp3",
		"audioImageSrc" : null,
		"title" : "Too Good to Say Goodbye",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Uptown%20Funk.mp3",
		"audioImageSrc" : null,
		"title" : "Uptown Funk",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	},
	{
		"audioSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/audio/bruno-mars-24k-magic/Versace%20On%20The%20Floor.mp3",
		"audioImageSrc" : null,
		"title" : "Versace on the Floor",
		"artistName" : "Bruno Mars",
		"albumName" : "24K Magic",
		"albumCoverSrc" : "https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"
	}]
}