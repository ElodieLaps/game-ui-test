import { StatisticsType } from "@/components/molecules/statistics/type";
import _HUMAN from "./human.json";
import _ELF from "./elf.json";
import _DWARF from "./dwarf.json";
import _RACES from "./races.json";
import _ENT from './ent.json';

const HUMAN = _HUMAN as StatisticsType;
const ELF = _ELF as StatisticsType;
const DWARF = _DWARF as StatisticsType;
const ENT = _ENT as StatisticsType;

type RacesStatiticsType = {
  [key: string]: StatisticsType;
};

export type RoleType = "WARRIOR" | "MAGE" | "PRIEST" | "BLACKSMITH";
export type TypeRace = "HUMAN" | "ELF" | "DWARF" | "ENT";

export type RaceType = {
  type: TypeRace;
  availableRoles: RoleType[];
};

export const RACES = _RACES;

export const RACES_STATISTICS: RacesStatiticsType = {
  ELF,
  DWARF,
  HUMAN,
  ENT
};
