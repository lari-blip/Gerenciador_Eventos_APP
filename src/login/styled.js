
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f4f4f4;
`;

export const TopContainer = styled.View`
  flex: 1;
  background-color: #6a4fff;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const AnimatedImage = styled.Image`
  width: 280px;
  height: 280px;
  margin-bottom: 20px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

export const BottomContainer = styled.View`
  flex: 2;
  justify-content: center;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: ${(props) => (props.isError ? 'red' : '#ddd')};
  border-radius: 10px;
  padding: 0 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: #6a4fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const LinkWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Link = styled.Text`
  color: #6a4fff;
  font-size: 14px;
  text-decoration: underline;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;
