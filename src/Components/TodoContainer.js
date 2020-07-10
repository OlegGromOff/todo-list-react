import React, { Component } from "react";
import TodoComponent from "./TodoComponent";
class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [{ id: Date.now(), todo: "First Todo" }], // задали id 
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,  // значение которое вводим в поле
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    let obj = {  // создали новый объект
      id: Date.now(), // задали ему id
      todo: this.state.inputValue,  // todo объекта будет равен содержимому инпута
    };
    this.setState({
      arrTodo: [...this.state.arrTodo, obj], // к содержимому массива добавили новый объект
      inputValue: "", // очистили инпут
    });
  };

  deleteTodo = (id) => { // передали в аргументы id
    this.setState({
      arrTodo: this.state.arrTodo.filter((obj) => obj.id !== id), // возвращаем те элементы массива id которых не равен текущему id из аргументов функции
    });
  };

  render() {
    return (
      <div>
        <TodoComponent
          arrTodo={this.state.arrTodo} // передаем массив
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo} // передаем функцию в пропсы
        />
      </div>
    );
  }
}
export default TodoContainer;