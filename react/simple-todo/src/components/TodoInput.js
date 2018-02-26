import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = props => (
  <form
    onSubmit={props.submitTodoForm}>
    <input
      type="text"
      name="newTodo"
      value={props.inputText}
      onChange={props.updateInputText}
    />
    <button
      type="submit"
    >SAVE</button>
  </form>
);

TodoInput.propTypes = {
  inputText: PropTypes.string.isRequired,
  submitTodoForm: PropTypes.func.isRequired,
  updateInputText: PropTypes.func.isRequired,
};

TodoInput.defaultProps = {
  inputText: '',
};

export default TodoInput;
