import React from 'react';
import PropTypes from 'prop-types';

const Box = props => {
  const style = {
    width: '200px',
    height: '200px',
    background: props.color,
  }
  return <div className="box" style={style} />
};

Box.propTypes = {
  color: PropTypes.string.isRequired,
}

Box.defaultProps = {
  color: 'red',
}

export default Box;
