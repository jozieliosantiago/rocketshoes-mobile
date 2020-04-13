import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import logo from '../../assets/img/logo.png';
import { HeaderContainer, Logo } from './styles';

export default function Header({ navigation }) {
  return (
    <HeaderContainer>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </TouchableWithoutFeedback>
      <Icon
        onPress={() => navigation.navigate('Cart')}
        name="shopping-basket"
        color="#fff"
        size={25}
      />
    </HeaderContainer>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
