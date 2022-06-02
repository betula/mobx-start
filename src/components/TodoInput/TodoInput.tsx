import React, { useMemo } from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { todos } from '../../shareds/todos';
import "./TodoInput.css"

class TodoInputLogic {
  text = '';

  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.text = event.target.value;
  }

  inputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      todos.add(this.text);
      this.reset();
    }
  }

  private reset() {
    this.text = '';
  }

  constructor() {
    makeAutoObservable(this, {
      text: observable.ref
    });
  }
}

export const TodoInput = observer(() => {
  const logic = useMemo(() => new TodoInputLogic(), []);

  return (
    <input 
      className="TodoInput"
      type="text" 
      value={logic.text} 
      onChange={logic.inputChange} 
      onKeyDown={logic.inputKeyDown} 
    />
  )
});