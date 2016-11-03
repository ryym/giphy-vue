export default function getGIFs (query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
}

