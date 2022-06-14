import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';

import {Container} from './styles';

interface RouteParams {
  pathContent: string;
}

const Contents: React.FC = () => {
  const route = useRoute();
  const dimensions = useWindowDimensions();

  console.log(dimensions);

  const routeParams = route.params as RouteParams;

  const imageData = [
    {
      image: routeParams.pathContent,
    },
  ];

  return (
    <Container>
      {imageData.map((images, i) => (
        <View key={i}>
          <Image
            style={{
              height: dimensions.height,
              width: dimensions.width,
            }}
            resizeMode="contain"
            source={images.image}
          />
        </View>
      ))}
    </Container>
  );
};

export default Contents;
