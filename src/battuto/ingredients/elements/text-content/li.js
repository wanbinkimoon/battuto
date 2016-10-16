var Settings = require('../../../battuto.config.js');

//selecting all li
var li = document.querySelectorAll('li');

for (var i = 0; i < li.length; i++) {
	li[i].style.color = "red";
}
