import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #fff;

  display: flex;

  padding: 48px 0;
`;

export const Title = styled.Text`
  align-self: center;
  font-family: 'RobotoSlab-Regular';
  font-size: 32px;
  color: #5e5e5e;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 48px;
  align-self: center;
  height: 48px;
  width: 80%;
`;

export const TextButton = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #fff;
`;
