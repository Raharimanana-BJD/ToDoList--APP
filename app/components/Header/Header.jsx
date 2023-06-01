import { Text } from "react-native";
import { styles } from "./header.style";
export function Header() {
  return <>
  <Text style={styles.title}>To-Do-List</Text>
  <Text style={styles.subtitle}>Tu as probablement un truc à faire</Text>
  </>;
}
