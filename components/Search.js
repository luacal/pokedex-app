import { Text, View, StyleSheet, TextInput, Pressable, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

function Search({ onSearch }) {

  // const searchInput = useRef(null);
  const [query, setQuery] = useState('');

  function handleSearch() {
    onSearch(query.trim().toLowerCase());
    setQuery('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.search}>
      <Text style={styles.label}>Buscar:</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          // ref={searchInput}
          style={styles.input}
          placeholder="Digite o nome ou ID do Pokémon"
          keyboardType="default"
          value={query}
          // onChangeText={(e) => (searchInput.current.value = e)}
          onChangeText={setQuery}
        />
        <Pressable style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  search: {
    height: 70,
    gap: 4,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: '80%'
  },
  searchButton: {
    width: '20%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b4cca'
  }
});
