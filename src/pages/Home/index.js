import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Home() {
  return (
    <Container>
      <List
        horizontal
        data={['R$ 179,90', 'R$ 178,90', 'R$ 149,90']}
        keyExtractor={(data) => data}
        renderItem={({ item }) => (
          <Item>
            <Image
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe1.jpg?ts=1573040493?ims=280x280',
              }}
            />
            <Description>
              Tênis Adidas Duramo Lite 2 0 Masculino - Cinza
            </Description>
            <PriceInfo>{item}</PriceInfo>
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
