import { Flex } from "@components/Flex";
import { Calendar } from "@components/Icon/Calendar";
import { Select } from "@components/Select";
import { FILTER_DATA } from "@configuration/constants";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

/**
 * @component
 * @name FilterSection
 * @description Show all elements for the filter section.
 * @namespace screens screens/Home/components/Filter
 *
 */
export const FilterSection = ({ handleChange }) => {
  return (
    <Flex right>
      <Calendar width="32px" height="32px" color="#000" />
      <Select data={FILTER_DATA} handleChange={handleChange} />
    </Flex>
  );
};
FilterSection.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
