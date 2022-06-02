import './App.css';
import { TodoInput } from '../TodoInput/TodoInput';
import { TodoList } from '../TodoList/TodoList';

export const App = () => {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

