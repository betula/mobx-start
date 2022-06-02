import { observer } from "mobx-react-lite";
import { todos } from "../../shareds/todos"
import "./TodoClear.css"

export const TodoClear = observer(() => {
  if (todos.size === 0) return null;

  return (
    <div className="TodoClear">
      <button onClick={todos.clear}>clear</button>
    </div>
  )
});