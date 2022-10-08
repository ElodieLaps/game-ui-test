import { useEffect, useState } from "react";
import { StatisticsType } from "./type";
import View from "./view";

export type StatisticsPropsType = {
  statistics: StatisticsType;
};

const Statistics = ({ statistics = [] }: StatisticsPropsType) => {

  const  [statisticsState, setStatisticsState] = useState<StatisticsType>([]);

  useEffect(() => {
    setStatisticsState(statistics);
  }, [statistics])

  return (
    <View
      statistics={statisticsState}
    />
  );
};

export default Statistics;
