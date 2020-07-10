import React from "react";

function TodoComponent({
  inputValue,
  handleChange,
  addTodo,
  arrTodo,
  deleteTodo,
}) {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={handleChange} type="text" value={inputValue}></input>
        <button className="btn_add">Add</button>
      </form>
      <ul style={{ flexDirection: "column" }}>
        {arrTodo.map((objTodo) => { // проходим по массиву
          return (
            <>
              <li key={objTodo.id}>{objTodo.todo} </li>
              {/* {ключ каждого li равен id каждого элемента массива} */}
              {/* {между li вставили содержимое inputa (имеем доступ к todo так как передали через пропсы функцию в которой он задан)} */}
              <button onClick={() => deleteTodo(objTodo.id)}>Delete</button>
              {/* {указываем по id какой именно элемент удалить} */}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoComponent;