payload = {
     "orientation": "vertical",
     "url": "https://en.wikipedia.org/wiki/PDF"
}
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer 4a9d3c4c83eb6998747d94ff96885957f7dd7bbc61"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
