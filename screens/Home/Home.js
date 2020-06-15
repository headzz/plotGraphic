import Layout from "@components/Layout";
import HomeContainer from "@screens/Home/components/HomeContainer";
import React from "react";

/**
 * @component
 * @name Home
 * @description Home page wrapper.
 * @namespace components screens/Home
 *
 */

export const HomeScreen = () => (
  <Layout.Wrapper>
    <HomeContainer />
  </Layout.Wrapper>
);
