import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import logo from "../../assets/logo.png";

interface LoginProps {
  onLogin: () => void;

} 

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Exemplo básico: verificar se o email e senha são válidos
    if (email === 'usuario@gmail.com' && password === 'senha123') {
      // Se autenticação bem-sucedida, chame a função onLogin
      onLogin();
    } else {
      // Se falha na autenticação, exiba uma mensagem de erro
      alert('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Faça seu login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#820AD1'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 16,
  },
});

export default Login;
