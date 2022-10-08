
import Statistics from "@/components/molecules/statistics";
import { StatisticsType } from "@/components/molecules/statistics/type";
import Actions from "../actions";

type CharacterPropsType = {
  statistics: StatisticsType;
};

const Character = ({ statistics }: CharacterPropsType) => {
  return (
    <div className="Character">
      <Statistics statistics={statistics} />
      {/* <Actions /> */}
    </div>
  );
};

export default Character;
