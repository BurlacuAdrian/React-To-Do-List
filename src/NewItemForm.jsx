import { useState } from "react"


// {newItem,setNewItem}
export default function NewItemForm({addItem}){

  const [newItem, setNewItem] = useState("")

  function formSubmit(e){
    e.preventDefault()

    if(newItem==="")
      return

    addItem(newItem)
    setNewItem("")

  }

  return (
    <form className="new-item-form" onSubmit={e=>formSubmit(e)}>
      <label htmlFor="newItemInput">Add a task:</label>
      <input value={newItem} onChange={ e => setNewItem(e.target.value)} type="text" id="newItemInput"></input>
      <button type="submit">Add</button>
    </form>
  )
}