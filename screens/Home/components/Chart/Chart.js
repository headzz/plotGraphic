import { Flex } from "@components/Flex";
import { Text } from "@components/Text";
import { formatData } from "@configuration/functions";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";
import React, { useEffect, useState, memo } from "react";
import { CustomTooltip } from "./CustomTooltip";

/**
 * @component
 * @name ChartSection
 * @description Plot data from data that was fetched.
 * @namespace screens screens/Home/components/Chart
 *
 */
export const ChartSection = memo(({ chartData }) => {
  const [plotValues, setPlotValues] = useState(chartData);
  const formatXAxis = (tickItem) => {
    return tickItem.toString();
  };

  useEffect(() => {
    formatData(chartData, setPlotValues);
  }, [chartData]);

  return (
    <Flex center>
      {chartData.length > 0 && (
        <AreaChart
          width={600}
          height={400}
          data={plotValues}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickCount={2}
            tickFormatter={formatXAxis}
            interval="preserveStartEnd"
          />
          <YAxis orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Area dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      )}
      {chartData.length === 0 && (
        <Text large>Não há dados disponíveis para este fitro</Text>
      )}
    </Flex>
  );
});

ChartSection.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
