import { useState } from "react"

export const AddCategory = ( { onCategoryAdded } ) => {

  const [inptValue, setInptValue ] = useState('')

  const onInptChange = ( { target } ) => {
    setInptValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inptValue.trim().length <= 0 ) return 
    onCategoryAdded(inptValue)
    setInptValue('')
  }

  return(
    <form onSubmit={ onSubmit }>
      <input 
        type='text'
        placeholder="erpepe"
        value= { inptValue }
        onChange= { onInptChange }
      />
      <button type="submit">Buscar loco</button>
    </form>
  )
}