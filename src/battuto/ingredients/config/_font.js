//importing settings object object
var Settings = require('../../battuto.config.js');

// selecting head element
var head = document.getElementsByTagName('head')[0];

//crating primary font link adn applying user choice
var primaryFontLink = document.createElement('link');
primaryFontLink.href = Settings.font.primary.link;

//crating secondary font link adn applying user choice
var secondaryFontLink = document.createElement('link');
secondaryFontLink.href = Settings.font.primary.link;


//setting up the fonts
function fontSetup() {
	//appending font as child
	head.appendChild(primaryFontLink);
	head.appendChild(secondaryFontLink);
}

fontSetup();
