import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

const Header = ({navigation}: any) => {
  const openDrawerMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Container>
      <Icon name="menu" size={28} color="#000" onPress={openDrawerMenu} />
      <Image
        source={require('../../assets/logoHeader.png')}
        style={{height: 60, width: 60}}
      />
    </Container>
  );
};

export default Header;
