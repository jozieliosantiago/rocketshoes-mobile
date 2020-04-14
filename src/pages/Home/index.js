import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Item,
  Image,
  Description,
  PriceInfo,
  Button,
  TextButton,
  CartIcon,
  Count,
} from './styles';

class Home extends Component {
  static propTypes = {
    addToCart: PropTypes.func,
    amount: PropTypes.object,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <Image
                source={{
                  uri: item.image,
                }}
              />
              <Description>{item.title}</Description>
              <PriceInfo>{item.priceFormatted}</PriceInfo>
              <Button onPress={() => this.handleAddProduct(item)}>
                <CartIcon>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <Count>{amount[item.id] || 0}</Count>
                </CartIcon>
                <TextButton>ADICIONAR</TextButton>
              </Button>
            </Item>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
