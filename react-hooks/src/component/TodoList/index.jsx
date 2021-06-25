import React from "react";
import PropTypes from "prop-types";

//Nhận props từ cha truyền xuống
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
//Nếu cha k truyền props xuống thì lấy mặc định
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo){
      if(onTodoClick){
          onTodoClick(todo)
      }
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}
                onClick={()=>handleClick(todo)}
        >{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
