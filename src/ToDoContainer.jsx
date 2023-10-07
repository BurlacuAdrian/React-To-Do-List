// import React from 'react';

import ListItem from "./ListItem"

export default function ToDoContainer({items, setItems,toggleToDo,deleteToDo}) {
  return <div className="to-do-container">
    <h2 className="to-do-heading">To do :</h2>
    <ul className="items-list">
      {/* <li className="item">item1</li> */}
      {
      items.map(item => {
        return <ListItem key={item.id} id={item.id} name={item.name} completed={item.completed} toggleToDo={toggleToDo} deleteToDo={deleteToDo}></ListItem>
    })
    } </ul>
  </div>
}
