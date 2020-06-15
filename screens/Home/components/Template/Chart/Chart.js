import React from "react";
import PropTypes from "prop-types";
import { ChartStyled } from "./styled";

/**
 * @component
 * @name Chart
 * @description Generates a template area where it will plot a graphic.
 * @namespace screens screens/Home/components/Chart
 * @param {element} children The Chart that will appear inside the component
 *
 */
const Chart = ({ children }) => <ChartStyled>{children}</ChartStyled>;

export default Chart;

Chart.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
