import React from "react";
import HomeScreen from "@screens/Home";
import { fetchData } from "@services/fetch";

const Index = ({ chartData }) => {
  return <HomeScreen chartData={chartData} />;
};

export default Index;
