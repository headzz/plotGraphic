import { fetchData } from "@services/fetch";
import { useCallback } from "react";

const useEdit = () => {
  /**
   * @function
   * @name fillData
   * @description Filters data based on which option was select.
   * @namespace configuration configuration/functions
   * @param {number} filterId filterId has the value of which filter option was selected.
   * @param {object} plotData Contains information about the state at the component.
   * @param {Function} setValue Function responsible for setting the data for the hook at the parent component.
   *
   */
  const fillData = useCallback(async (setConstantState, setState) => {
    const response = await fetchData();
    setConstantState(response);
    setState(response.data);
    console.log("entrei");
  }, []);
  return {
    fillData,
  };
};

export default useEdit;
