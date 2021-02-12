import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.register}
        onPress = {() => navigation.navigate('Registro')}
        >
          <Image source={require("../assets/adicionar-usuario.png")} style={styles.imgIconButton}></Image>
          <Text style={styles.textButtonUp}>Cadastrar</Text>
          <Text style={styles.textButtonDown}>Aluno</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.delete}
        onPress = {() => navigation.navigate('Remover')}
        >
          <Image source={require("../assets/remover-usuario.png")} style={styles.imgIconButton}></Image>
          <Text style={styles.textButtonUp}>Remover</Text>
          <Text style={styles.textButtonDown}>Aluno</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list}
        onPress = {() => navigation.navigate('Listar')}
        >
          <Image source={require("../assets/listagem-alunos.png")} style={styles.imgIconButton}></Image>
          <Text style={styles.textButtonUp}>Listagem de</Text>
          <Text style={styles.textButtonDown}>Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.edit}
        onPress = {() => navigation.navigate('Editar')}
        >
          <Image source={require("../assets/editar-usuario.png")} style={styles.imgIconButton}></Image>
          <Text style={styles.textButtonUp}>Editar</Text>
          <Text style={styles.textButtonDown}>Aluno</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.finance}
        onPress = {() => navigation.navigate('Finanças')}
        >
          <Image source={require("../assets/finance.png")} style={styles.imgIconFinance} ></Image>
          <Text style={styles.textFinance}>Finanças</Text>
        </TouchableOpacity>

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

  textButtonUp: {
    right: '-15%',
    marginTop: '-25%',
    color: 'white',
    fontSize: 18,
  },

  textButtonDown: {
    right: '-15%',
    marginTop: -1,
    color: 'white',
    fontSize: 18,
  },

  imgIconButton: {
    width: 50,
    height: 50,
    left: '-25%',
    marginTop: '4%',
  },

  textFinance: {
    marginTop: '-8%',
    marginLeft: '20%',
    color: 'white',
    fontSize: 18,
  },

  imgIconFinance: {
    width: 50,
    height: 50,
    marginLeft: '-20%',
  },

  register: {
    position: 'absolute',
    backgroundColor: '#ED7430',
    width: '45%',
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    left: '3%',
    top: 200,
  },

  delete: {
    position: 'absolute',
    backgroundColor: '#ED7430',
    width: '45%',
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: '3%',
    top: 200,
  },

  list: {
    position: 'absolute',
    backgroundColor: '#ED7430',
    width: '45%',
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    left: '3%',
    top: 329,
  },

  edit: {
    position: 'absolute',
    backgroundColor: '#ED7430',
    width: '45%',
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: '3%',
    top: 329,
  },

  finance: {
    position: 'absolute',
    backgroundColor: '#ED7430',
    width: '95%',
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    left: '2%',
    top: 458,
  },

});
