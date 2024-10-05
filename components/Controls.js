import { Text } from "react-native";
import { Pressable, View, StyleSheet } from "react-native";

function Controls({ onPrev, onNext, onRandom }) {
  return (
    <View>
      <View
        style={{ flexDirection: "row", justifyContent: "space-around", gap: 4 }}
      >
        <Pressable style={styles.button} onPress={onPrev}>
          <Text style={styles.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Próximo</Text>
        </Pressable>
      </View>
      <View style={{ justifyContent: "center", marginTop: 20, flexDirection: "row" }}>
        <Pressable style={styles.button} onPress={onRandom}>
          <Text style={styles.buttonText}>Sortear</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Controls;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    // borderColor: '#ff0000',
    backgroundColor: "#3b4cca",
    borderRadius: 20
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});
