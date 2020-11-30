import React from 'react';


import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';


export default function CadastroDef({ navigation }) {

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Informações do Responsável</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome" />

      <TextInput
        style={styles.input}
        placeholder="CPF" />

      <TextInput
        style={styles.input}
        placeholder="CEP" />

      <TextInput
        style={styles.input}
        placeholder="Logradouro" />
      
      <TextInput
        style={styles.input}
        placeholder="Cidade" />

      <TextInput
        style={styles.input}
        placeholder="UF" />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );

};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color: '#78849E',
    fontSize: 20,
    marginTop: 30,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderWidth: 1,
    borderColor: '#828181',
    marginTop: 20,
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
  },
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  senhaText : {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#78849E',
    padding: 10,
    margin: 0
  },
 
  btn: {
    backgroundColor: '#2A2E43',
    width: '80%',
    marginTop: 20,
    borderRadius: 5,
    padding: 12,
    marginBottom: 30,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase'
  },
});

