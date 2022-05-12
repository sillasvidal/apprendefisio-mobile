import React from 'react';

import CustomButton from '../../components/CustomButton';
import {Title, Container} from './styles';

const Categories: React.FC = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <CustomButton isGreen>Anatomia</CustomButton>
      <CustomButton>Citologia</CustomButton>
      <CustomButton isGreen>Embriologia</CustomButton>
      <CustomButton>Fisiologia</CustomButton>
      <CustomButton isGreen>Microbiologia</CustomButton>
      <CustomButton>Aplicabilidade</CustomButton>
    </Container>
  );
};

export default Categories;
