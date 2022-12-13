import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SelectPersonality from "./components/SelectPersonality";
import SelectSpecies from "./components/SelectSpecies";
import SelectResults from "./components/SelectResults";

function App() {
  // defines API url
  const url = "https://acnhapi.com/v1a/villagers";

  // useState for villagers and loading
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetches data from API
  useEffect(() => {
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let villagers = data.slice(0, filteredArray).map((data, index) => {
          return {
            id: data.id,
            name: data.name["name-USen"],
            species: data.species,
            personality: data.personality,
            img: data.image_uri,
          };
        });
        setVillagers(villagers);
        setLoading(false);
      });
  });

  // creates new array with unique personalities for selectors
  function getUniqueListBy(villagers, key) {
    return [...new Map(villagers.map((item) => [item[key], item])).values()];
  }
  const personalities = getUniqueListBy(villagers, "personality");
  const species = getUniqueListBy(villagers, "species");

  // filters villagers by personality type, species, and number of results
  const [filteredPersonality, setPersonality] = useState("");
  const [filteredSpecies, setSpecies] = useState("");
  const [filteredArray, setArrayNumber] = useState("50");

  const filterChangeHandler = (selectedPersonality) => {
    setPersonality(selectedPersonality);
  };

  const filterSpeciesChangeHandler = (selectedSpecies) => {
    setSpecies(selectedSpecies);
  };

  const filterArrayChangeHandler = (selectedArray) => {
    setArrayNumber(selectedArray);
  };

  // returns filtered villagers by personality, species, and number of results
  const filteredVillagers = villagers.filter((villager) => {
    return (
      (filteredPersonality === "" ||
        villager.personality === filteredPersonality) &&
      (filteredSpecies === "" || villager.species === filteredSpecies) &&
      (filteredArray === "" || villager.id <= filteredArray)
    );
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto mb-3">
        <SelectPersonality
          personalities={personalities}
          value={filteredPersonality}
          onChangeFilter={filterChangeHandler}
        />
        <SelectSpecies
          species={species}
          value={filteredSpecies}
          onChangeFilter={filterSpeciesChangeHandler}
        />
        <SelectResults
          value={filteredArray}
          onChangeFilter={filterArrayChangeHandler}
        />
      </div>
      {loading ? <div>loading...</div> : <Cards villager={filteredVillagers} />}
    </div>
  );
}

export default App;
