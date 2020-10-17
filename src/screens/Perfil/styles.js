import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  background: #9d1d64;
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  margin-top: 5px;
  width: 100px;
`;

export const HeaderName = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin: 2px 0 10px;
`;

export const Label = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 140px;
  height: 37px;
  border-radius: 25px;
`;

export const AddLabel = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin: 5px 2px;
`;

export const Account = styled.View`
  background: #fff;
  margin-top: -17px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const AccountTitle = styled.Text`
  color: #333;
  text-transform: uppercase;
  padding: 0 16px;
`;

export const Action = styled.View`
  background: #fff;
  margin-top: 10px;
`;

export const Actions = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px;
`;

export const Description = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const Info = styled.Text`
color: #333;
font-size: 16px;
`;