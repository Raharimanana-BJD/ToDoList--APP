import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    padding: 10,
    height:70,
    borderRadius:10,
    borderColor:"#333333",
    borderWidth:2,
    marginBottom:20
    
  },
  text:{
    fontSize:16
  },
  check:{
    width:24,
    height:24
  },
  line:{
    textDecorationLine:"line-through",
    textDecorationColor:"#333333",
  },
});
