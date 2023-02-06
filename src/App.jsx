import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const App = ()=> {

  const [ categories, setCategories ] = useState(['One Punch'])
  
  const onCategoryAdded = (value) => {
    setCategories((cat) => [value,...cat] )
  }

  return(
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onCategoryAdded= { onCategoryAdded } />
      
      {categories.map((ele) => <GifGrid key= { ele } category = { ele } />)}
      

    </>
  )
} 