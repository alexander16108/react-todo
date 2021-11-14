import React from "react"
import TodoItems from "./TodoItems"

const TodoLists = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItems
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}
export default TodoLists