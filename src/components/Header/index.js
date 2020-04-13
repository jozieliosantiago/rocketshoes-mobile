import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import logo from '../../assets/img/logo.png';
import { HeaderContainer, Logo, Count, CartIcon } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <HeaderContainer>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </TouchableWithoutFeedback>
      <CartIcon onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={20} />
        {!!cartSize && <Count>{cartSize}</Count>}
      </CartIcon>
    </HeaderContainer>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number,
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
