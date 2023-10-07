export default function ListItem({ id, name, completed, toggleToDo, deleteToDo }) {
  return (
    <li>
      <label className="ListItem">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
          className="check"
        />
        <span id="task-name" className={completed ? 'completed' : ''}>{name}</span>
      </label>
      <button onClick={() => deleteToDo(id)} className="redButton">Delete</button>
    </li>
  );
}
