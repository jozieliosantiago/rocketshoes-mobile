import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
  Loader,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      {!products.length ? (
        <Loader>
          <ActivityIndicator size="large" color="#7159c1" />
        </Loader>
      ) : (
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
              <Button
                onPress={() => dispatch(CartActions.addToCartRequest(item.id))}
              >
                <CartIcon>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <Count>{amount[item.id] || 0}</Count>
                </CartIcon>
                <TextButton>ADICIONAR</TextButton>
              </Button>
            </Item>
          )}
        />
      )}
    </Container>
  );
}
