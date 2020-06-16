import PropTypes from "prop-types";
import React, { useState } from "react";
import { SelectStyled } from "./styled";

/**
 * @component
 * @name Select
 * @description Component that creates a select.
 * @namespace components components/Select
 * @param {object[]} data Data that will create options for the select
 *
 */
const Select = ({ data, handleChange }) => {
  const onChange = (event) => {
    event.preventDefault();
    handleChange(event.target.value);
    window.localStorage.setItem("filterType", event.target.value);
  };

  return (
    <SelectStyled onChange={onChange} data-testid="select">
      {data.map((item) => {
        return (
          <option
            disabled={item.disabled}
            key={item.id}
            defaultValue="0"
            tabIndex={item.id}
            value={item.id}
          >
            {item.name}
          </option>
        );
      })}
    </SelectStyled>
  );
};

export default Select;

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
