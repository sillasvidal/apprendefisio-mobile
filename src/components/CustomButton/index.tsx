import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {ButtonText, Container} from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
  isGreen?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  isGreen = false,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <LinearGradient
        colors={isGreen ? ['#4BB748', '#9DCB3A'] : ['#0187CE', '#00B5FF']}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}>
        <ButtonText>{children}</ButtonText>
      </LinearGradient>
    </Container>
  );
};

export default CustomButton;
