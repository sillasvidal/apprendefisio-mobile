import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text} from 'react-native';

import {Container} from './styles';

interface RouteParams {
  pathContent: string;
}

const Contents: React.FC = () => {
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  return (
    <Container>
      <Text>{routeParams.pathContent}</Text>
      <Image
        style={{
          resizeMode: 'contain',
        }}
        source={require('../../resources/Anatomia1.jpeg')}
      />
    </Container>
  );
};

export default Contents;
