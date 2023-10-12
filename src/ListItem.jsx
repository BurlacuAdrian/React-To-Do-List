export default function ListItem({ id, name, completed, toggleToDo, deleteToDo }) {
  return (
    <li className="flex">
      <label className="ListItem ml-10">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
          className="check"
        />
        <span id="task-name" className={completed ? 'completed' : ''}>{name}</span>
      </label>
      <button onClick={() => deleteToDo(id)} className="bg-red-500 rounded-md inline-block ml-auto mr-20">Delete</button>
    </li>
  );
}
