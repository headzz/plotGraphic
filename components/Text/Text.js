import PropTypes from "prop-types";
import React from "react";
import { TextStyled } from "./styled";
import { BLACK } from "@configuration/constants";

/**
 * @component
 * @name Text
 * @description Responsible for showing styled texts at the screen.
 * @namespace components components/Text
 * @param {string} children The text that will appear inside the component
 * @param {boolean} bold Returns a text with weight bold.
 * @param {string}  color Sets custom color for the text.
 * @param {boolean} large Returns a large size text.
 *
 */
export const Text = ({ bold, children, color, large }) => {
  return (
    <TextStyled bold={bold} color={color} large={large}>
      {children}
    </TextStyled>
  );
};

Text.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  large: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  color: BLACK,
  large: false,
};
