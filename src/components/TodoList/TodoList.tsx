import { observer } from "mobx-react-lite";
import { todos } from "../../shareds/todos";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = observer(() => {
  if (todos.size === 0) return null;

  return (
    <ul className="TodoList">
      {todos.todos.map((item, i) => <TodoItem item={item} key={i} />)}
    </ul>
  )
});