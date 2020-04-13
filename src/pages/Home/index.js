import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

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
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

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
                  <Count>0</Count>
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

export default connect()(Home);
