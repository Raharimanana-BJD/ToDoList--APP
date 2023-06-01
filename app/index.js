import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/app.style";
import { Header } from "./components/Header/Header";
import CardTodo from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const TODO_LIST = [];

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Sortir le chien", isCompleted: true },
    { id: 2, title: "Aller chez le garagistre", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
    { id: 5, title: "Sortir le chien", isCompleted: true },
    { id: 6, title: "Aller chez le garagistre", isCompleted: false },
    { id: 7, title: "Faire les courses", isCompleted: true },
    { id: 8, title: "Appeler le vétérinaire", isCompleted: true },
    { id: 9, title: "Sortir le chien", isCompleted: true },
    { id: 10, title: "Aller chez le garagistre", isCompleted: false },
    { id: 11, title: "Faire les courses", isCompleted: true },
    { id: 12, title: "Appeler le vétérinaire", isCompleted: true },
  ]);

  function updateTodo(todo) {
    const updateTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updateTodo.id
    );
    
    const updatedTodoList = [...todoList]
    updatedTodoList[indexToUpdate] = updateTodo
    setTodoList(updatedTodoList)
  }

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={styles.cardItem} key={todo.id}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          {/* <CardTodo todo={todoList[0]} /> */}
          <ScrollView>{renderTodoList()}</ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
