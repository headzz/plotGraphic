import { MAP_TIME, FILTER_DATA } from "@configuration/constants";

/**
 * @function
 * @name dateFilter
 * @description Filters data based on which option was select.
 * @namespace configuration configuration/functions
 * @param {number} filterId filterId has the value of which filter option was selected.
 * @param {object} plotData Contains information about the state at the component.
 * @param {Function} setValue Function responsible for setting the data for the hook at the parent component.
 *
 */
export const dateFilter = (filterId, plotData, setValue) => {
  if (filterId > 0) {
    const filteredData = plotData.data.filter((item) => {
      const today = new Date();
      let filtered = today;
      MAP_TIME;
      filtered.setMonth(today.getMonth() - MAP_TIME[filterId]);
      return item.date >= filtered;
    });
    setValue(filteredData);
  }
  if (filterId === 0) {
    setValue(plotData.data);
  }
};

/**
 * @name formatData
 * @description Treats data to format that can be shown in the x axis.
 * @param {object} chartData Contains every information to plot the graphic
 * @param {function} setValue It will set a value for the state.
 */
export const formatData = (chartData, setValue) => {
  const formattedData = chartData.map((item) => {
    const dateFormat = `${item.date.getDate()}/${
      item.date.getMonth() + 1
    }/${item.date.getFullYear()}`;
    return { date: dateFormat, value: item.value };
  });

  setValue(formattedData);
};

/**
 * @function
 * @name showText
 * @description Responsible for changing the text message while selecting different filters.
 * @namespace configuration configuration/functions
 * @param {number} filterType Value of filter selected that will be used to show the name of the option selected.
 */
export const showText = (filterType) => {
  if (filterType > 0) {
    return `de ${FILTER_DATA[filterType].name.toLowerCase()} atrás.`;
  }
  return "todo";
};
