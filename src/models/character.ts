import { RACES_STATISTICS } from "@/mock/races";
import { StatisticsType } from "../components/molecules/statistics/type";

export const setDefaultStatistics = (statistics: StatisticsType) => {
  statistics.map((statistic) => {
    if (statistic.type !== "EXPERIENCE") {
      statistic.currentValue = statistic.maxValue;
    }
  });
  return statistics;
};
class Character {
  id: string;
  name: string;
  gender: string;
  level: number;
  race: string;
  role: string;
  statistics: StatisticsType;

  constructor(
    name?: string,
    gender: string = "F",
    level: number = 1,
    race: string = "HUMAN",
    role: string = "WARRIOR"
  ) {
    this.id = `_${Math.random().toString(36)}`;
    this.name = name || (gender === "F" ? "Caroline" : "David");
    this.gender = gender;
    this.level = level;
    this.race = race;
    this.role = role;
    this.statistics = this.setStatisticsFromRace();
  }

  setStatisticsFromRace = () => {
    switch (this.race) {
      case "ELF":
        return setDefaultStatistics(RACES_STATISTICS.ELF);
      case "DWARF":
        return setDefaultStatistics(RACES_STATISTICS.DWARF);
      case "ENT":
        return setDefaultStatistics(RACES_STATISTICS.ENT);
      default:
        return setDefaultStatistics(RACES_STATISTICS.HUMAN);
    }
  };

  setStatistics = () => {
    return (this.statistics = this.setStatisticsFromRace());
  };

  getRace = () => {
    switch (this.race) {
      case "ELF":
        return this.gender === "F" ? "elfe" : "elf";
      case "DWARF":
        return this.gender === "F" ? "naine" : "nain";
      case "HUMAN":
        return this.gender === "F" ? "humain" : "humain";
      default:
        return "ent";
    }
  };
}

export default Character;
