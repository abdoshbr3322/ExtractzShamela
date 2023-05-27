const fetch = require('node-fetch');

const url = 'https://api.pdfendpoint.com/v1/convert';

const options = {
  method: "POST",
  headers: {
	"Content-Type": "application/json",
	"Authorization": "Bearer 4a9d3c4c83eb6998747d94ff96885957f7dd7bbc61"
  },
  body: JSON.stringify({
	"url": "https://en.wikipedia.org/wiki/PDF",
	"orientation": "vertical",
	"page_size": "A4",
	"css": ".vector-menu-content{\n  display:none !important;\n}\n\n.vector-toc-pinned-container{\n  display:none !important;\n  height:0px;\n  overflow:hidden;\n}\n\n.mw-table-of-contents-container{\n  display:none !important;\n\n}\n\n",
	"http_headers": "{\n\t\"cache-control\": \"max-age=0\"\n}",
	"viewport ": "970x1400",
	"use_print_media ": true,
	"wait_for_network": true,
	"margin_top": "1cm",
	"margin_bottom": "1cm",
	"margin_right": "1cm",
	"margin_left": "1cm",
	"no_backgrounds": true
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
