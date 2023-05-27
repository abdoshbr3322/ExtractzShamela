const api_url = 'https://api.pdfendpoint.com/v1/convert';

const book_url = "https://shamela.ws/book/6387";
let ended = false;

let index = 1;
while (!ended) {	
  let page_url = book_url + "/" + index;
	
	
	
}

let html 

const options = {
  method: "POST",
  headers: {
	"Content-Type": "application/json",
	"Authorization": "Bearer 4a9d3c4c83eb6998747d94ff96885957f7dd7bbc61"
  },
  body: JSON.stringify({
	 "html": "";
	"orientation": "vertical",
	"page_size": "A4",
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

fetch(api_url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
