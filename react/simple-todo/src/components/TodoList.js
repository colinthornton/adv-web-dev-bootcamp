import React from 'react';
import PropTypes from 'prop-types';

const TodoList = props => (
  <ol style={{textAlign: 'left', width: '50%', margin: '0 auto'}}>
    {props.todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))}
  </ol>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
