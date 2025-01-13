
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Animated } from 'react-native';
import { styles } from './styled'; 

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [loading, setLoading] = useState(false);

  
  const translateY = useRef(new Animated.Value(0)).current; 
  const opacity = useRef(new Animated.Value(1)).current;      

  useEffect(() => {
    Animated.loop(
      Animated.sequence([ 
        Animated.timing(translateY, {
          toValue: 0.5, 
          duration: 2000,  
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -40, 
          duration: 2000,  
          useNativeDriver: true,
        }),
      ])
    ).start(); 
  }, []);

  const handleSignup = async () => {
    if (!email || !senha || !confirmSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    if (senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://192.168.101.6:3000/cadastro', {  // Substitue com o IP do seu computador
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: 'Administrador', email, senha }),
      });

      if (response.status === 201) {
        setLoading(false);
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Login'); 
      } else if (response.status === 400) {  
        const errorData = await response.json();
        setLoading(false);
        Alert.alert('Erro', errorData.message || 'Erro ao cadastrar.');
      } else {
        const errorData = await response.json();
        setLoading(false);
        Alert.alert('Erro', errorData.message || 'Erro ao cadastrar.');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Erro ao conectar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
       
        <Animated.Image
          source={{ uri: 'https://i.imgur.com/Foc8Bms.png' }}
          style={[styles.illustration, { opacity, transform: [{ translateY }] }]}
        />
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Crie sua conta</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={confirmSenha}
            onChangeText={setConfirmSenha}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
          disabled={loading}  
        >
          <Text style={styles.buttonText}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Já tem uma conta? Faça login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
