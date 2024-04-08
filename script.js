// let outputElement = document.getElementById('outputElement');
// let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement1 = document.getElementById('contentGrid1');
let contentGridElement2 = document.getElementById('contentGrid2');
let contentGridElement3 = document.getElementById('contentGrid3');
let contentGridElement4 = document.getElementById('contentGrid4');



let phaseOneDB = [
	{
		"image_url": "https://cdn.marvel.com/content/1x/ironman_lob_crd_01_3.jpg",
		"title": "Iron Man",
		"release_date": "(May 2, 2008)",
		"type": "Movie",
		"main_color": "#002453"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/theincrediblehulk_lob_crd_03.jpg",
		"title": "The Incredible Hulk",
		"release_date": "(June 13, 2008)",
		"type": "Movie",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/ironman2_lob_crd_01_3.jpg",
		"title": "Iron Man 2",
		"release_date": "(May 7, 2010)",
		"type": "Movie",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/thor_lob_crd_01.jpg",
		"title": "Thor",
		"release_date": "(May 6, 2011)",
		"type": "Movie",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg",
		"title": "Captain America: The First Avenger",
		"release_date": "(July 22, 2011)",
		"type": "Movie",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg",
		"title": "The Avengers",
		"release_date": "(May 4, 2012)",
		"type": "Movie",
		"main_color": "#000000"
	}
];

// let jsonDatabase = [
//   {
//     "title" : "Effie J. Rieper",
//     "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
//     "favorite_color" : "#ff0072",
//     "pets" : ["cat", "bees", "robot vacuum"]
//   },
//   {
//     "title" : "Drake",
//     "picture_url" : "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Screen_Shot_2016-04-29_at_11.46.25_AM_jkfdax/drake-dog-diamond-pet-views.jpg",
//     "favorite_color" : "#405f7c",
//     "pets" : ["husky", "hotline bling", "Degrassi"]
//   },
//   {
//     "title" : "Billie Elish",
//     "picture_url" : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/10/13/asset/buzzfeed-prod-web-06/anigif_sub-buzz-15799-1554917302-1.gif?downsize=700:*&output-format=auto&output-quality=auto",
//     "favorite_color" : "#c1a411",
//     "pets" : ["puppy", "instagram", "hairdye"]
//   },
//   {
//     "title" : "Tom Nook",
//     "picture_url" : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/10/13/asset/buzzfeed-prod-web-06/anigif_sub-buzz-15799-1554917302-1.gif?downsize=700:*&output-format=auto&output-quality=auto",
//     "favorite_color" : "#0000ff",
//     "pets" : ["bells", "rent", "bugs"]
//   }
// ];

// createElementMessy(myJSON);


// loop through, apply function
for (var i = 0; i < phaseOneDB.length; i++) {
  createNewElement(phaseOneDB[i]);
}



// {
// 	"image_url": "url",
// 	"title": "Iron Man",
// 	"release_date": "May 2, 2008",
// 	"type": "Movie",
// 	"main_color": "#000000"
// }
function createNewElement(incomingJSON) {
	// make div for a new element (an item... a film) in content grid
	let newFilmItem = document.createElement("DIV");
	newFilmItem.style.backgroundColor = incomingJSON['main_color']; // color
	newFilmItem.classList.add('filmItem');	// div class = filmItem

	// image
	let newImage = document.createElement("IMG");
	newImage.classList.add('filmImage');		// img class = filmImage
	newImage.src = incomingJSON['image_url'];	// set url for img
	newFilmItem.appendChild(newImage);			// add to item

	// h3 title
	let newFilmTitle = document.createElement("H3");
	newFilmTitle.classList.add('filmTitle'); 			// h3 class = filmTitle
	newFilmTitle.innerText = incomingJSON['title'];	// set text for header
	newFilmItem.appendChild(newFilmTitle);				// add to item

	// h4 release date
	let newFilmDate = document.createElement("P");
	newFilmDate.classList.add('filmDate');
	newFilmDate.innerText = incomingJSON['release_date'];
	newFilmItem.appendChild(newFilmDate);

	// p type
	let newFilmType = document.createElement("P");
	newFilmType.classList.add('filmType');
	newFilmType.innerText = incomingJSON['type'];
	newFilmItem.appendChild(newFilmType);

	// add the item to the page (to the grid)
	contentGridElement1.appendChild(newFilmItem)

}




// sample layout in html would be like

// div contentGrid
// 	 div newElement
// 		h3 elem header 
// 		h4 pets header
// 		ul pets list
// 		img image
// 	  ...


// function createElementProper(incomingJSON) {

//   /// Create whole content item div and set class
//   let newContentElement = document.createElement("DIV");
//   newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
//   newContentElement.style.fontFamily = incomingJSON['favorite_font'];
//   newContentElement.classList.add('contentItem');

//   /// Create HEADLINE h3, set class, set content
//   let newContentHeading = document.createElement("H3");
//   newContentHeading.classList.add('contentTitle');
//   newContentHeading.innerText = incomingJSON['title'];
//   /// Add the HEADLINE to the item
//   newContentElement.appendChild(newContentHeading);

//   /// Create & add LIST HEADLINE to the item
//   let newContentSubhead = document.createElement("H4");
//   newContentSubhead.innerText = "My Pets:";
//   newContentElement.appendChild(newContentSubhead);



//   /// Create & add PET LIST to the item
//   let newContentPetList = document.createElement("UL");
//   newContentElement.appendChild(newContentPetList);

//   /// Create & add all the pet LIST ITEMS to the PET LIST
//   for (var i = 0; i < incomingJSON['pets'].length; i++) {
//     var currentPetString = incomingJSON['pets'][i];
//     var newPetItem = document.createElement("LI");
//     newPetItem.innerText = currentPetString;
//     newContentPetList.appendChild(newPetItem);
//   }

//   /// Create & add footer image
//   let newImage = document.createElement("IMG");
//   newImage.classList.add("footerImage");
//   newImage.src = incomingJSON['picture_url'];
//   newContentElement.appendChild(newImage);

//   /// Add the item to the page
//   contentGridElement.appendChild(newContentElement);

// }