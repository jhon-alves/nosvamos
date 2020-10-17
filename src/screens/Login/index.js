import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';


export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.body}>
      <Image
        style={{ width: 250 }}
        resizeMode="contain"
        source={require('../../images/NosVamos.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail" />
      <TextInput
        style={styles.input}
        placeholder="Senha" />


      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );

};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
  },
  logo: {
    width: 130,
    height: 130,
    marginRight: 30,
  },
  title: {
    color: '#828181',
    fontSize: 16,
    marginTop: 30,
    textTransform: 'uppercase',
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
  btn: {
    backgroundColor: '#e64783',
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
    fontSize: 20,
  },
});

