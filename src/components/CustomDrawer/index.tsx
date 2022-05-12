import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

import {Container, HeaderCustomDrawer, TitleCustomDrawer} from './styles';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <Container>
      <HeaderCustomDrawer>
        <LinearGradient
          colors={['#4BB748', '#9DCB3A']}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TitleCustomDrawer>APPrendeFisio</TitleCustomDrawer>
        </LinearGradient>
      </HeaderCustomDrawer>

      <DrawerItemList {...props} />
    </Container>
  );
};

export default CustomDrawer;
