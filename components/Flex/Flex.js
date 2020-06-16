import { FlexStyled } from "./styled";
import PropTypes from "prop-types";
import React from "react";

/**
 * @component
 * @name Flex
 * @description Gives flex display for components.
 * @namespace components components/Body
 * @param {boolean} center Justify content for center.
 * @param {element} children Component(s) that may appear inside the layout.
 * @param {boolean} right Justify content for flex-end.
 * @param {boolean} spaceBetween Justify content for space-between.
 *
 */

export const Flex = ({ center, children, right, spaceBetween }) => {
  return (
    <FlexStyled
      data-testid="flex"
      center={center}
      right={right}
      spaceBetween={spaceBetween}
    >
      {children}
    </FlexStyled>
  );
};

Flex.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  right: PropTypes.bool,
  spaceBetween: PropTypes.bool,
};

Flex.defaultProps = {
  center: false,
  right: false,
  spaceBetween: false,
};
