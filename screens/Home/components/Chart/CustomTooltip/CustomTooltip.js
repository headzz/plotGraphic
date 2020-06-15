import { Text } from "@components/Text";
import PropTypes from "prop-types";
import React from "react";
import { TooltipStyled } from "./styled";

/**
 * @component
 * @name CustomTooltip
 * @description Style for a tooltip that shows desired data at the chart.
 * @param {boolean} active Responsible for knowing when the user is hovering data.
 * @param {object} payload An object that shows every
 *
 */
export const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div>
        <TooltipStyled>
          <Text>{`Data : ${payload[0].payload.date}`}</Text>
          <Text>{`Valor : R$ ${payload[0].value}`}</Text>
        </TooltipStyled>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};
