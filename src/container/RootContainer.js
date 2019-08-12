import React from 'react';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import 'style/index.scss';

const RootContainer = props => {
  return <div>{props.children}</div>;
};
RootContainer.propTypes = {
  children: PropTypes.node
};
export default RootContainer;
