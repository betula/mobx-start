import { computed, makeAutoObservable, observable } from "mobx";

export type Todo = {
  text: string;
  done: boolean;
}

class Todos {

  todos: Todo[] = [];

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

  constructor() {
    makeAutoObservable(this, {
      todos: observable.ref,
      size: computed
    });
  }
}


export const todos = new Todos();