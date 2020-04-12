import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

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

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

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
              <PriceInfo>{item.price}</PriceInfo>
              <Button>
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
