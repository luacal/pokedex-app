import { View, StyleSheet, Image, Text } from "react-native";

import typesTranslation from "../constants/TypesTranslation";
import { TypesColors } from "../constants/TypesColors";

function PokemonCard({ pokemon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.identifier}>
        {`#${String(pokemon.id).padStart(3, "0")}`}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: `${pokemon.image}`,
        }}
      />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <View style={styles.typesContainer}>
        {pokemon.types.map((type) => {
          let typeName = type.type.name;

          return (
            <Text
              style={[
                styles.typeLabel,
                {
                  backgroundColor: TypesColors[typeName].background,
                  color: TypesColors[typeName].color,
                },
              ]}
              key={typeName}
            >
              {typesTranslation[typeName]}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#eee",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderRadius: 10
  },
  identifier: {
    alignSelf: "flex-start",
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
  },
  image: {
    width: 300,
    height: 300,
  },
  typesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  typeLabel: {
    borderColor: "#444",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    width: 80,
    textAlign: "center",
  },
});
