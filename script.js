// let outputElement = document.getElementById('outputElement');
// let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement1 = document.getElementById('contentGrid1');
let contentGridElement2 = document.getElementById('contentGrid2');
let contentGridElement3 = document.getElementById('contentGrid3');
let contentGridElement4 = document.getElementById('contentGrid4');
let contentGridElement5 = document.getElementById('contentGrid5');


let phaseOneDB = [
	{
		"image_url": "https://cdn.marvel.com/content/1x/ironman_lob_crd_01_3.jpg",
		"title": "Iron Man",
		"release_date": "(May 2, 2008)",
		"type": "Movie",
		"main_color": "#860A0C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/theincrediblehulk_lob_crd_03.jpg",
		"title": "The Incredible Hulk",
		"release_date": "(June 13, 2008)",
		"type": "Movie",
		"main_color": "#344133"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/ironman2_lob_crd_01_3.jpg",
		"title": "Iron Man 2",
		"release_date": "(May 7, 2010)",
		"type": "Movie",
		"main_color": "#860A0C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/thor_lob_crd_01.jpg",
		"title": "Thor",
		"release_date": "(May 6, 2011)",
		"type": "Movie",
		"main_color": "#365161"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg",
		"title": "Captain America: The First Avenger",
		"release_date": "(July 22, 2011)",
		"type": "Movie",
		"main_color": "#02204D"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg",
		"title": "The Avengers",
		"release_date": "(May 4, 2012)",
		"type": "Movie",
		"main_color": "#5B2627"
	}
];


let phaseTwoDB = [
	{
		"image_url": "https://cdn.marvel.com/content/1x/ironman3_lob_crd_01_10.jpg",
		"title": "Iron Man 3",
		"release_date": "(May 3, 2013)",
		"type": "Movie",
		"main_color": "#860A0C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/thorthedarkworld_lob_crd_02_1.jpg",
		"title": "Thor: The Dark World",
		"release_date": "(November 8, 2013)",
		"type": "Movie",
		"main_color": "#365161"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/captainamericathewintersoldier_lob_crd_01_1.jpg",
		"title": "Captain America: The Winter Soldier",
		"release_date": "(April 4, 2014)",
		"type": "Movie",
		"main_color": "#02204D"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/guardiansofthegalaxy_lob_crd_03.jpg",
		"title": "Guardians of the Galaxy",
		"release_date": "(August 1, 2014)",
		"type": "Movie",
		"main_color": "#3C1562"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/avengersageofultron_lob_crd_03.jpg",
		"title": "Avengers: Age of Ultron",
		"release_date": "(May 1, 2015)",
		"type": "Movie",
		"main_color": "#5B2627"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/ant-man_lob_crd_01_8.jpg",
		"title": "Ant-Man",
		"release_date": "(July 17, 2015)",
		"type": "Movie",
		"main_color": "#91504C"
	}
];


let phaseThreeDB = [
	{
		"image_url": "https://cdn.marvel.com/content/1x/captainamericacivilwar_lob_crd_01_9.jpg",
		"title": "Captain America: Civil War",
		"release_date": "(May 6, 2016)",
		"type": "Movie",
		"main_color": "#02204D"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/doctorstrange_lob_crd_01_6.jpg",
		"title": "Doctor Strange",
		"release_date": "(November 4, 2016)",
		"type": "Movie",
		"main_color": "#37689C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
		"title": "Guardians of the Galaxy Vol. 2",
		"release_date": "(May 5, 2017)",
		"type": "Movie",
		"main_color": "#3C1562"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/spider-manhomecoming_lob_crd_02.jpg",
		"title": "Spider-Man: Homecoming",
		"release_date": "(July 7, 2017)",
		"type": "Movie",
		"main_color": "#A31933"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg",
		"title": "Thor: Ragnarok",
		"release_date": "(November 3, 2017)",
		"type": "Movie",
		"main_color": "#365161"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg",
		"title": "Black Panther",
		"release_date": "(February 16, 2018)",
		"type": "Movie",
		"main_color": "#AA843F"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg",
		"title": "Avengers: Infinity War",
		"release_date": "(April 27, 2018)",
		"type": "Movie",
		"main_color": "#5B2627"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/ant-manthewasp_lob_crd_01.jpg",
		"title": "Ant-Man and the Wasp",
		"release_date": "(July 6, 2018)",
		"type": "Movie",
		"main_color": "#91504C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg",
		"title": "Captain Marvel",
		"release_date": "(March 8, 2019)",
		"type": "Movie",
		"main_color": "#342D73"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg",
		"title": "Avengers: Endgame",
		"release_date": "(April 26, 2019)",
		"type": "Movie",
		"main_color": "#5B2627"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
		"title": "Spider-Man: Far From Home",
		"release_date": "(July 2, 2019)",
		"type": "Movie",
		"main_color": "#A31933"
	}
];


let phaseFourDB = [
	{
		"image_url": "https://cdn.marvel.com/content/1x/wandavision_lob_crd_06.jpg",
		"title": "WandaVision",
		"release_date": "(Jan 15, 2021)",
		"type": "Series",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/falcws_lob_crd_03.jpg",
		"title": "The Falcon and the Winter Soldier",
		"release_date": "(Mar 19, 2021)",
		"type": "Series",
		"main_color": "#02204D"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/loki_lob_crd_04.jpg",
		"title": "Loki",
		"release_date": "(Jun 9, 2021)",
		"type": "Series",
		"main_color": "#1D521C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg",
		"title": "Black Widow",
		"release_date": "(July 9, 2021)",
		"type": "Movie",
		"main_color": "#360505"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/whatif_lob_crd_01.jpg",
		"title": "What If…?",
		"release_date": "(Aug 11, 2021)",
		"type": "Series",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg",
		"title": "Shang-Chi and the Legend of the Ten Rings",
		"release_date": "(September 3, 2021)",
		"type": "Movie",
		"main_color": "#A62D0D"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg",
		"title": "Eternals",
		"release_date": "(November 5, 2021)",
		"type": "Movie",
		"main_color": "#60320A"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg",
		"title": "Spider-Man: No Way Home",
		"release_date": "(December 17, 2021)",
		"type": "Movie",
		"main_color": "#A31933"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/hawkeye_lob_crd_04.jpg",
		"title": "Hawkeye ",
		"release_date": "(Nov 24, 2021)",
		"type": "Series",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/moonknight_lob_crd_05.jpg",
		"title": "Moon Knight",
		"release_date": "(Mar 30, 2022)",
		"type": "Series",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/msmarvel_lob_crd_04.jpg",
		"title": "Ms. Marvel",
		"release_date": "(Jun 8, 2022)",
		"type": "Series",
		"main_color": "#342D73"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
		"title": "Doctor Strange in the Multiverse of Madness",
		"release_date": "(May 6, 2022)",
		"type": "Movie",
		"main_color": "#37689C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
		"title": "Thor: Love and Thunder ",
		"release_date": "(July 8, 2022)",
		"type": "Movie",
		"main_color": "#365161"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/iamgroot_lob_crd_04.jpg",
		"title": "I am Groot",
		"release_date": "(August 10, 2022)",
		"type": "Series",
		"main_color": "#3C1562"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/shehulk_lob_crd_04.jpg",
		"title": "She-Hulk: Attorney at Law",
		"release_date": "(August 18, 2022)",
		"type": "Series",
		"main_color": "#344133"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg",
		"title": "Black Panther: Wakanda Forever",
		"release_date": "(November 11, 2022)",
		"type": "Movie",
		"main_color": "#AA843F"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg",
		"title": "The Guardians of the Galaxy Holiday Special",
		"release_date": "(November 25, 2022)",
		"type": "Series",
		"main_color": "#3C1562"
	}
];


let phaseFiveDB = [
	{
		"image_url": "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg",
		"title": "Ant-Man and the Wasp: Quantumania",
		"release_date": "(February 17, 2023)",
		"type": "Movie",
		"main_color": "#91504C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg",
		"title": "Guardians of the Galaxy Vol. 3",
		"release_date": "(May 5, 2023)",
		"type": "Movie",
		"main_color": "#3C1562"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/secretinvasion_lob_crd_04.jpg",
		"title": "Secret Invasion",
		"release_date": "(June 21, 2023)",
		"type": "Series",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/iamgroots2_lob_crd_01.jpg",
		"title": "I Am Groot\nSeason 2",
		"release_date": "(September 6, 2023)",
		"type": "Series",
		"main_color": "#3C1562"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/lokis2_lob_crd_04.jpg",
		"title": "Loki\nSeason 2",
		"release_date": "(October 5, 2023)",
		"type": "Series",
		"main_color": "#1D521C"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg",
		"title": "The Marvels",
		"release_date": "(November 10, 2023)",
		"type": "Movie",
		"main_color": "#342D73"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/whatifs2_lob_crd_02.jpg",
		"title": "What If…?\nSeason 2",
		"release_date": "(December 22, 2023)",
		"type": "Series",
		"main_color": "#000000"
	},
	{
		"image_url": "https://cdn.marvel.com/content/1x/echo_lob_crd_02.jpg",
		"title": "Echo",
		"release_date": "(January 9, 2024)",
		"type": "Series",
		"main_color": "#000000"
	}
];

// create phase one
for (var i = 0; i < phaseOneDB.length; i++) {
  newFilmItem = createNewElement(phaseOneDB[i]);
  // add the item to the page (to the grid)
  contentGridElement1.appendChild(newFilmItem);
}

// create phase two
for (var i = 0; i < phaseTwoDB.length; i++) {
  newFilmItem = createNewElement(phaseTwoDB[i]);
  // add the item to the page (to the grid)
  contentGridElement2.appendChild(newFilmItem);
}

// create phase three
for (var i = 0; i < phaseThreeDB.length; i++) {
  newFilmItem = createNewElement(phaseThreeDB[i]);
  // add the item to the page (to the grid)
  contentGridElement3.appendChild(newFilmItem);
}

// create phase four
for (var i = 0; i < phaseFourDB.length; i++) {
  newFilmItem = createNewElement(phaseFourDB[i]);
  // add the item to the page (to the grid)
  contentGridElement4.appendChild(newFilmItem);
}

// create phase five
for (var i = 0; i < phaseFiveDB.length; i++) {
  newFilmItem = createNewElement(phaseFiveDB[i]);
  // add the item to the page (to the grid)
  contentGridElement5.appendChild(newFilmItem);
}




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

	// // add the item to the page (to the grid)
	// contentGridElement1.appendChild(newFilmItem)

	return newFilmItem;
}

