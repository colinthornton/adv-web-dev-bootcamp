import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todos: [],
    };

    this.submitTodoForm = this.submitTodoForm.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
  }

  submitTodoForm(e) {
    e.preventDefault();
    if (this.state.inputText !== ''){
      const todos = [...this.state.todos, this.state.inputText]
      this.setState({
        inputText: '',
        todos
      });
    }
  }

  updateInputText(e) {
    this.setState({ inputText: e.target.value })
  }

  render() {
    const { inputText, todos } = this.state;

    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <TodoInput
          inputText={inputText}
          submitTodoForm={this.submitTodoForm}
          updateInputText={this.updateInputText}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
