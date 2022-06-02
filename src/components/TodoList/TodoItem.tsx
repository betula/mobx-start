import { Todo, todos } from "../../shareds/todos";
import cx from 'classnames';
import './TodoItem.css';

type TodoItemProps = {
  item: Todo;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <li 
      className={cx('TodoItem', item.done && 'done')}
      onClick={() => todos.toggle(item)}
    >{item.text}</li>
  )
}