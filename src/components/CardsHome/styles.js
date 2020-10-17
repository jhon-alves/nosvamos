import styled from 'styled-components/native';

export const Card = styled.View`
  margin-top: 15px;
`;

export const Cards = styled.TouchableOpacity`
  flex-direction: row;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  border: 3px solid #d22771;
  margin: 10px 0;
`;

export const Img = styled.Image`
  width: 90px;
  margin-top: 10px;
`;

export const CardsInfo = styled.View`
  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: #898a8d;
  font-size: 20px;
  padding: 0 5px;
`;

export const CardDescription = styled.Text`
  color: #898a8d;
  padding: 5px 5px;
  font-size: 15px;
`;