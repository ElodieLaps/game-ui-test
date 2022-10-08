export type TypeStatistic =
  | "HEALTH"
  | "MANA"
  | "EXPERIENCE"
  | "ATTACK_DAMAGES"
  | "MAGIC_DAMAGES"
  | "ARMOR"
  | "PROTECTION"
  | "BLESSING"
  | "SPEED"
  | "DODGE";

export const isTypeGauge = (type: string) => {
 return type === 'HEALTH' || type === "MANA" || type === "EXPERIENCE"
}

export type StatisticType = {
  type: TypeStatistic;
  label: string;
  maxValue: number;
  currentValue: number;
};

export type StatisticsType = StatisticType[];
