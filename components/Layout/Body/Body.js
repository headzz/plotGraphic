import PropTypes from "prop-types";
import React from "react";
import { BodyStyled } from "./styled";

/**
 * @component
 * @name Body
 * @description Defines the body for the layout.
 * @namespace components components/Body
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */
const Body = ({ children }) => {
  return <BodyStyled>{children}</BodyStyled>;
};

export default Body;

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
