// import React from 'react';

import ListItem from "./ListItem"

export default function ToDoContainer({items, setItems,toggleToDo,deleteToDo}) {
  return <div className="to-do-container bg-blue-800 app-box"
  
  
  >
    <h2 className="to-do-heading text-3xl text-center">To do :</h2>
    <ul className="items-list text-3xl mt-20">
      {/* <li className="item">item1</li> */}
      {
      items.map(item => {
        return <ListItem key={item.id} id={item.id} name={item.name} completed={item.completed} toggleToDo={toggleToDo} deleteToDo={deleteToDo}></ListItem>
    })
    } </ul>
  </div>
}
