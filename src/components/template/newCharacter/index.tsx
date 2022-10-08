import Button from "@/components/atoms/button";
import Layout from "@/components/atoms/layout";
import Statistics from "@/components/molecules/statistics";
import { RACES, RACES_STATISTICS, RoleType } from "@/mock/races";
import styles from "./styles.module.scss";
import Character, { setDefaultStatistics } from "models/character";
import { useEffect, useState } from "react";

const NewCharacter = () => {
  const [character, setCharacter] = useState(new Character());
  const [availableRoles, setAvailableRoles] = useState<RoleType[]>([]);
  const [genderSymbol, setGenderSymbol] = useState("");
  // const  [race, setRace] = useState("");

  // useEffect(() => {
  //   setRace(character.getRace());
  // }, [character.race])

  useEffect(() => {
    let gender;
    gender = character.gender === "M" ? "♂" : "♀";
    gender = character.gender === "H" ? "☿" : gender;
    setGenderSymbol(gender);
  }, [character.gender, character.race]);

  useEffect(() => {
    setCharacter({
      ...character,
      gender: character.race === "ENT" ? "H" : character.gender,
    });
  }, [character]);

  useEffect(() => {
    const race = RACES.find((race) => race.type === character.race);
    setAvailableRoles(race?.availableRoles as RoleType[]);
    console.log(availableRoles);
  }, [availableRoles, character.race]);

  useEffect(() => {
    if (!availableRoles.find((role) => role === character.role)) {
      setCharacter({ ...character, role: availableRoles[0] });
    }
  }, [availableRoles, character]);

  return (
    <Layout
      title="Nouveau personnage"
      description="Créer un nouveau personnage"
    >
      <div className={`new-character ${styles.newCharacter}`}>
        <div className={`new-character__profil ${styles.newCharacter__profil}`}>
          <div className={styles.newCharacter__name}>
            <input
              className={styles.newCharacter__inputName}
              type="text"
              value={character.name}
              onChange={(e) =>
                setCharacter({
                  ...character,
                  name: e.target.value,
                })
              }
            />
            - {genderSymbol} - lvl : {character.level}
          </div>
          <div>
            <p>
              {character.name} - {genderSymbol} - lvl : {character.level}
            </p>
            <p>{character.race}</p>
            <p>{character.role}</p>
          </div>
          <Statistics statistics={character.statistics} />
        </div>

        <div className={`new-character__form ${styles.newCharacter__form}`}>
          <div
            className={`new-character__form__gender ${
              styles.newCharacter__form__gender
            } ${
              character.race === "ENT" &&
              styles.newCharacter__form__genderDisabled
            }`}
          >
            <div
              className={`${
                character.gender === "M" && styles.newCharacter__form__selected
              }`}
            >
              <Button
                type="link"
                label="Homme"
                className="male"
                onClickButton={() =>
                  character.race !== "ENT" &&
                  setCharacter({ ...character, gender: "M" })
                }
              />
            </div>

            <div
              className={`${
                character.gender === "F" && styles.newCharacter__form__selected
              }`}
            >
              <Button
                type="link"
                label="Femme"
                className="female"
                onClickButton={() =>
                  character.race !== "ENT" &&
                  setCharacter({ ...character, gender: "F" })
                }
              />
            </div>
          </div>

          <div>
            {RACES.map((race) => {
              return (
                <Button
                  type="secondary"
                  key={race.type}
                  label={race.type}
                  onClickButton={() => {
                  
                    setCharacter({
                      ...character,
                      race: race.type,
                      statistics: setDefaultStatistics(
                        RACES_STATISTICS[race.type]
                      ),
                    })
                  }}
                />
              );
            })}
          </div>
          <div>
            {availableRoles.map((role) => {
              return (
                <Button
                  key={role}
                  label={role}
                  onClickButton={() =>
                    setCharacter({ ...character, role: role })
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewCharacter;
