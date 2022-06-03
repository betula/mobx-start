import { makeAutoObservable, observable } from "mobx";

export type Todo = {
  text: string;
  done: boolean;
}

class Todos {

  todos: Todo[] = [
    { text: 'first task', done: true },
    { text: 'second task', done: false }
  ];

  add(text: string) {
    this.todos = this.todos.concat({
      text,
      done: false
    });
  }

  toggle(todo: Todo) {
    this.todos = this.todos.map((item) => {
      if (item === todo) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return item;
    });
  }

  get size() {
    return this.todos.length;
  }

  clear = () => {
    this.todos = [];
  }

  constructor() {
    makeAutoObservable(this, {
      todos: observable.ref
    });
  }
}


export const todos = new Todos();