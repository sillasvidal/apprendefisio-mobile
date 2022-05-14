import React from 'react';

import CustomButton from '../../components/CustomButton';
import {Title, Container} from './styles';

const Categories: React.FC = ({navigation}: any) => {
  const navigateToContent = (pathContent: string) => {
    navigation.navigate('Content', {pathContent});
  };

  return (
    <Container>
      <Title>Categorias</Title>
      <CustomButton
        onPress={() => navigateToContent('../../resources/Anatomia1.jpeg')}
        isGreen>
        Anatomia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent('Conteúdo 2')}>
        Citologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent('Conteúdo 3')} isGreen>
        Embriologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent('Conteúdo 4')}>
        Fisiologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent('Conteúdo 5')} isGreen>
        Microbiologia
      </CustomButton>
      <CustomButton onPress={() => navigateToContent('Conteúdo 6')}>
        Aplicabilidade
      </CustomButton>
    </Container>
  );
};

export default Categories;
