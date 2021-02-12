import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function RegisterPage({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texts}>Nome do(a) aluno(a)</Text>
        <TextInput style={styles.inputs} placeholder='Ex.: Frango da Silva' placeholderTextColor={'#969696'} ></TextInput>

        <View style={styles.view_buttons}>

        <Text style={styles.texts}>Idade</Text>
        <TextInput style={styles.inputsSmall} placeholder='Ex.: 88' placeholderTextColor={'#969696'} ></TextInput>

        
        <View style={styles.view_picker}>
          <Text style={styles.textsMid}>Sexo</Text>
          <Picker style={styles.picker} selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
            <Picker.Item label='Selecione' value="Selecione"></Picker.Item>
            <Picker.Item label='Masculino' value="Masculino"></Picker.Item>
            <Picker.Item label='Feminino' value="Feminino"></Picker.Item>
          </Picker>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: '#414141',
    width: '100%',
    height: '100%',
  },

  texts: {
    fontSize: 18,
    color: '#fff',
    marginLeft: '5%',
  },

  inputs: {
    width: '90%',
    height: 48,
    borderWidth: 3,
    borderColor: '#ED7430',
    borderRadius: 8,
    marginLeft: '5%',
    color: '#C4C4C4',
    fontSize: 18,
  },

  view_buttons: {
    flex: 1,
    flexDirection: 'row'
  },

  inputsSmall: {
    width: '25%',
    height: 48,
    borderWidth: 3,
    borderColor: '#ED7430',
    borderRadius: 8,
    marginLeft: '-11%',
    marginTop: '10%',
    color: '#C4C4C4',
    fontSize: 18,
  },

 
  textsMid: {
    fontSize: 18,
    color: '#fff',
    marginTop: '-12%',
  },

  view_picker: {
    width: '61%',
    height: 48,
    borderWidth: 3,
    borderColor: '#ED7430',
    borderRadius: 8,
    marginLeft: '3.5%',
    marginTop: '10%',
  },

  picker: {
    color: '#C4C4C4',
  },

});
