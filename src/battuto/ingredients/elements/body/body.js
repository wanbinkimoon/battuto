//importing settings object object
var Settings = require('../../../battuto.config.js');

//selecting the body
var body = document.body;
console.log(body.style);

// proprerties
body.style.margin = Settings.body.prop.margin;
body.style.padding = Settings.body.prop.padding;
body.style.minHeight = "100vh";

// font
body.style.fontFamily = Settings.body.font.family;

// colors
body.style.backgroundColor = Settings.body.color.background;
body.style.color = Settings.body.color.text;
