import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Categories from '../pages/Categories';

import Header from '../components/Header';
import CustomDrawer from '../components/CustomDrawer';

import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: '#00B5FF',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#5C5C5C',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'RobotoSlab-Medium',
          fontSize: 15,
        },
        header: ({navigation}) => <Header navigation={navigation} />,
      }}
      drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Página Inicial',
          drawerIcon: ({color}) => <Icon name="home" size={20} color={color} />,
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Categories"
        options={{
          title: 'Categorias',
          drawerIcon: ({color}) => <Icon name="grid" size={20} color={color} />,
        }}
        component={Categories}
      />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
