
export const fetchData = async ( category ) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=32fS6728iWJtjLmvRmqZd1RGAHjy0yaA&limit=10&q=${ category }`)

  const {data} = await response.json()

  const gifs = data.map( ele =>( {
    'id': ele.id,
    'url': ele.images.downsized.url,
    'title': ele.title})
  )

  return gifs
}

