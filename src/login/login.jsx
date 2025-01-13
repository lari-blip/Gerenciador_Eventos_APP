import React, { useState, useEffect } from 'react';
import { Alert, Text } from 'react-native';  
import axios from 'axios';
import Modal from '../../components/modal/modal';
import {
  Container,
  TopContainer,
  BottomContainer,
  Title,
  Input,
  CheckboxWrapper,
  Button,
  ButtonText,
  LinkWrapper,
  Link,
  AnimatedImage,
  InfoText,
  ErrorMessage,
} from './styled';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    image: '',
  });
  const [translateY, setTranslateY] = useState(0);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://192.168.101.6:3000/login', { //Substitue com o IP do seu computador
        email,
        password,
      });

      setLoading(false);
      const { token } = response.data;

      if (token) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        setIsModalOpen(true);
      } else {
        setErrorMessage('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('Credenciais inválidas. Tente novamente.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY((prev) => (prev === 10 ? 0 : 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TopContainer>
        <AnimatedImage source={require('../../assets/login.png')} translateY={translateY} />
        <InfoText>A melhor experiência de login que você já teve na sua vida.</InfoText>
      </TopContainer>
      <BottomContainer>
        <Title>Faça seu login</Title>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          isError={!!errorMessage}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          isError={!!errorMessage}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <CheckboxWrapper>
          <Link onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe ? '✔️ Lembrar de mim' : '☐ Lembrar de mim'}
          </Link>
          <Link onPress={() => Alert.alert('Ops!', 'Função não implementada.')}>
            Esqueci minha senha
          </Link>
        </CheckboxWrapper>
        <Button onPress={handleLogin} disabled={loading}>
          <ButtonText>{loading ? 'Entrando...' : 'Entrar'}</ButtonText>
        </Button>
        <LinkWrapper>
          <Link onPress={() => navigation.navigate('Cadastro')}>Não tem conta ainda? Cadastre-se</Link>
        </LinkWrapper>
      </BottomContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => setIsModalOpen(false)}
        eventData={eventData}
        setEventData={setEventData}
      />
    </Container>
  );
};

export default Login;