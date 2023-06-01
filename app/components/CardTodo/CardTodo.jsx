import { Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./CardTodo.style";
import CheckImg from "../../assets/check.png"

export default function CardTodo({ todo, onPress }) {
  return (
    <TouchableOpacity onPress={()=> onPress(todo)} style={styles.card}>
      <Text style={[styles.text, todo.isCompleted && styles.line]}>{todo.title}</Text>
      { todo.isCompleted && <Image style={styles.check} source={CheckImg}/>}
    </TouchableOpacity>
  );
}
