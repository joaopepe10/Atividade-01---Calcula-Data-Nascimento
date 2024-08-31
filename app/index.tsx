import { Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text"

export default function Index() {
  const [date, setDate] = useState("");


  function showAge(){
    const dateFormat = date.slice(0, 10);
    const [day, month, year] = dateFormat.split("/");
    const birthDay = new Date(`${year}-${month}-${day}`);

    console.log("DATA: " + getAge(birthDay));

    alert(getAge(birthDay));
  }


  function getAge(birthDay: Date){
    const dateNow = new Date();
    var diff = dateNow.getFullYear() - birthDay.getFullYear();

    return diff;
  }


  return (
    <View style={styles.container}>

      <TextInputMask
        style={styles.input}
        type={"datetime"}
        value={date}
        options={{format :"DD/MM/YYYY"}}
        onChangeText={t => setDate(t)}
      />

      <TouchableOpacity style={styles.button} onPress={showAge}>
        <Text style={styles.buttonText}>Calcula idade</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#012030",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25
  },
  input:{
    width: "90%",
    textAlign: "center",
    height: 50,
    backgroundColor: "#45C4B0",
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#45C4B0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
