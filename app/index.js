import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import Controls from "../components/Controls";

export default function Index() {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemon = async (query) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`);

      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const selectedData = {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types,
      };
      setIsLoading(false);
      setPokemon(selectedData);
      setId(selectedData.id);
      // console.log("selectedData", selectedData);
      //     const pokemonName = pokemon?.name.toUpperCase();
      // const pokemonImage = pokemon?.sprites.front_default;
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPokemon(id);
  }, [id]);

  function handleNext() {
    if (id === 1025) return;
    setId(id + 1);
  }

  function handlePrev() {
    if (id === 1) return;
    setId(id - 1);
  }

  function handleSearch(query) {
    getPokemon(query);
  }

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * (1025 - 1) + 1);
    return randomNumber;
  }

  function handleRandom() {
    const randomId = generateRandomNumber();
    setId(randomId);
  }
  // console.log("here", pokemon);
  return (
    <View style={styles.container}>
      <Search onSearch={handleSearch} />
      {pokemon ? (
        <>
          <PokemonCard pokemon={pokemon} />
          <Controls
            onPrev={handlePrev}
            onNext={handleNext}
            onRandom={handleRandom}
          />
        </>
      ) : (
        <Text>Nada ainda</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 6,
  },
});
