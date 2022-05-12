import React from 'react';
import {Text} from 'react-native';
import CustomButton from '../../components/CustomButton';

import {Container, ContainerText1, TextHome, WelcomeHome} from './styles';

const Home: React.FC = ({navigation}: any) => {
  const navigateToCategories = () => {
    navigation.navigate('Categories');
  };

  return (
    <Container>
      <WelcomeHome>Seja Bem-vindo!</WelcomeHome>
      <ContainerText1>
        <TextHome>
          Os conteúdos do{' '}
          <Text style={{fontWeight: 'bold'}}>APPrendeFisio</Text> {'\n'} foram
          desenvolvidos pelos alunos de Fisioterapia do UNIPTAN
        </TextHome>
      </ContainerText1>
      <TextHome style={{marginBottom: 40}}>
        Aproveite para complementar {'\n'} seus estudos!
      </TextHome>
      <CustomButton isGreen onPress={navigateToCategories}>
        Categorias
      </CustomButton>
    </Container>
  );
};

export default Home;
