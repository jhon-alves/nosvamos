import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f7f7fa;
`;

export const Header = styled.ScrollView``;

export const AddressBox = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 15px;  
  margin: 30px;
`;

export const ActionBox = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 15px;  
  margin: 0 30px;
`;

export const Btn = styled.TouchableOpacity`
  background: #e64783;
  margin-top: 10px;
  border-radius: 10px;
  padding: 12px;
  margin: 20px 30px;
`;

export const Info = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;
