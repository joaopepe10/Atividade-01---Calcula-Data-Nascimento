import { Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text"

export default function Index() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [birthDayToday, isToday] = useState(false);


  function showAge(){
    if(!date){
      return alert("Data de nascimento inválida!")
    }
    const dateFormat = date.slice(0, 10);
    const [day, month, year] = dateFormat.split("/");
    const birthDay = new Date(`${year}-${month}-${day}`);
    return makeAlert(getAge(birthDay));
  }

  function makeAlert(birthDay: Number){
    return birthDayToday ? alert(`Parabéns ${name} pelos ${birthDay} anos de vida, muitos saúde!`)
                         : alert(`Você tem ${birthDay} anos de vida!`);
  }


  function getAge(birthDay: Date){
    const dateNow = new Date();
    var diff = dateNow.getFullYear() - birthDay.getFullYear();
    isBirthdayToday
    return isBirthdayToday(birthDay) 
          ? diff 
          : diff - 1;
  }

  function isBirthdayToday(birthDay: Date): boolean {
    var dateNow = new Date();
    isToday((birthDay.getMonth() === dateNow.getMonth() && birthDay.getDate() === dateNow.getDate()) ||
    (birthDay.getDate() <= dateNow.getDate() && birthDay.getMonth() <= dateNow.getMonth()));

    return birthDayToday;
  }

  return (
    <View style={styles.container}>

      <Text style={styles.nameText}>
        Nome
      </Text>

      <TextInput  
        style={styles.input}
        placeholder="Junior Silva"
        onChangeText={ name => setName(name)}
      />

      <Text style={styles.nameText}>
        Data de nascimento
      </Text>

      <TextInputMask
        style={styles.input}
        type={"datetime"}
        value={date}
        options={{format :"DD/MM/YYYY"}}
        placeholder="22/01/2024"
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
  },
  nameText:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  }
})
