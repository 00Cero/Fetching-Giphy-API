import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData"

export const useGifFetch = ( category )=> {
  const [gifs, setGifs ] = useState([])
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      fetchData(category)
      .then(imgs => setGifs(imgs))
      setIsLoading( false )
    }
    return () => {
      ignore = true
    }
  },[])


  return {
    gifs,
    isLoading
  }
}
