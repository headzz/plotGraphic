import PropTypes from "prop-types";
import React from "react";
import { WrapperStyled } from "./styled";

/**
 * @component
 * @name Wrapper
 * @description Defines the container for the layout.
 * @namespace components components/Wrapper
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */
const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
