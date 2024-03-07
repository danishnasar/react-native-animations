import { Dimensions, View } from "react-native";
import { styles } from "./App.style";
import List from "./components/List/List";

export default function App() {

  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}
