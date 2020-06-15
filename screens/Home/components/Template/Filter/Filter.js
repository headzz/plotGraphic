import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./styled";

/**
 * @component
 * @name Filter
 * @description Generates a template area where it will be placed the filter.
 * @namespace screens screens/Home/components/Filter
 * @param {element} children The Filter that will appear inside the component
 *
 */
const Filter = ({ children }) => <FilterStyled>{children}</FilterStyled>;

export default Filter;

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
