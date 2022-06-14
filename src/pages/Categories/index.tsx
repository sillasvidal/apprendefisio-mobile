import React from 'react';

import CustomButton from '../../components/CustomButton';
import {Title, Container} from './styles';

const Anatomia1 = require('../../resources/Anatomia1.jpeg');
const Citologia1 = require('../../resources/Citologia1.jpeg');
const Embriologia1 = require('../../resources/Embriologia1.jpeg');
const FisiologiadoExercicio1 = require('../../resources/FisiologiadoExercicio1.jpeg');
const Microbiologia = require('../../resources/Microbiologia.png');

const Categories: React.FC = ({navigation}: any) => {
  const navigateToContent = (pathContent: string) => {
    navigation.navigate('Conteúdo', {pathContent});
  };

  return (
    <Container>
      <Title>Categorias</Title>
      <CustomButton onPress={() => navigateToContent(Anatomia1)} isGreen>
        Anatomia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent(Citologia1)}>
        Citologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent(Embriologia1)} isGreen>
        Embriologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent(FisiologiadoExercicio1)}>
        Fisiologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent(Microbiologia)} isGreen>
        Microbiologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent('Conteúdo 6')}>
        Aplicabilidade
      </CustomButton>
    </Container>
  );
};

export default Categories;
