import React, { useEffect, useState, useCallback, memo } from "react";
import { Flex } from "@components/Flex";
import Layout from "@components/Layout";
import { Loading } from "@components/Icon/Loading";
import { GREY_LVL_2 } from "@configuration/constants";
import { dateFilter } from "@configuration/functions";
import { FilterSection } from "@screens/Home/components/Filter";
import { MessageSection } from "@screens/Home/components/Message";
import { ChartSection } from "@screens/Home/components/Chart";
import Template from "@screens/Home/components/Template";
import {
  useStateManagement,
  setFilterType,
} from "@utils/stateManagement/index";
import useHome from "./useHome";

/**
 * @component
 * @name HomeContainer
 * @description Makes api calls.
 * @namespace screens screens/Home/components/HomeContainer
 *
 */

export const HomeContainer = memo(() => {
  const [chartData, setChartData] = useState({ error: false, data: [] });
  const store = useStateManagement();
  const [volatileData, setVolatileData] = useState([]);

  const { fillData } = useHome();

  useEffect(() => {
    fillData(setChartData, setVolatileData);
  }, [fillData]);

  useEffect(() => {
    dateFilter(store.state.filterType, chartData, setVolatileData);
  }, [store.state.filterType]);

  return (
    <Layout.Body>
      {chartData.data.length === 0 ? (
        <Flex center data-testid="loader">
          <Loading width="64px" height="64px" color={GREY_LVL_2} />
        </Flex>
      ) : (
        <>
          <Template.Filter>
            <FilterSection
              handleChange={(value) => store.dispatch(setFilterType(value))}
            />
          </Template.Filter>
          <Template.Message>
            <MessageSection filterType={store.state.filterType} />
          </Template.Message>
          <Template.Chart>
            <ChartSection chartData={volatileData} />
          </Template.Chart>
        </>
      )}
    </Layout.Body>
  );
});
