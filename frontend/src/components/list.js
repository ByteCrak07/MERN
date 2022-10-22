import { useState } from "react";
import ListItem from "./list-item";
import "./List.css";

function List() {
  const [data, setData] = useState([
    {
      checked: true,
      value: "Hi",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  function changeChecked(id) {
    let newData = [...data];
    data[id].checked = !data[id].checked;

    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newTodoObj = { checked: false, value: newTodo };
    setData([...data, newTodoObj]);
    setNewTodo("");
    console.log(newTodo);
  }

  function deleteTodo(id) {
    let newData = [...data];
    newData.splice(id, 1);
    setData(newData);
  }

  function editTodo(id, newValue) {
    let newData = [...data];
    newData[id].value = newValue;
    setData(newData);
  }

  return (
    <div className="List">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />

        <button type="submit">Add</button>
      </form>
      {data.map((val, i) => (
        <ListItem
          value={val.value}
          checked={val.checked}
          key={i}
          id={i}
          changeChecked={changeChecked}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default List;
