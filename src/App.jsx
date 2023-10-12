import NewItemForm from "./NewItemForm";
import ToDoContainer from "./ToDoContainer";
import React, { useEffect, useState } from 'react';

export default function App() {

  const [items, setItems] = useState( () => {

    const myItems = localStorage.getItem("Items")
    if(myItems.length==null)
      return []

    return JSON.parse(myItems)
  }
  )

  function addItem(name){
    setItems( currentItems =>{
      return [...currentItems,{id:crypto.randomUUID(),name,completed:false}]
    } )
    
  }

  function toggleToDo(id, completed){
    setItems( currentItems => {
      return currentItems.map( item =>{
        if(item.id==id)
          return {...item, completed}
        return item
      })
    })
  }

  function deleteToDo(id){
    console.log(id)
    setItems(currentItems=>{
      return currentItems.filter(item => item.id!=id)
    })
  }

  useEffect( () => {
    localStorage.setItem("Items",JSON.stringify(items))
    console.log(JSON.parse(localStorage.getItem("Items")))
  },[items])

  return (<div className=
    "bg-green-400 w-screen h-screen mx-auto my-auto flex justify-around"
  >
    <ToDoContainer items={items} setItems={setItems} toggleToDo={toggleToDo} deleteToDo={deleteToDo}
    
    />
    
    <NewItemForm addItem={addItem}
    
    />
    </div>)

}
