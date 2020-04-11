import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartContent,
  Item,
  Header,
  Info,
  Image,
  Description,
  RemoveButton,
  Price,
  Amount,
  Count,
  Subtotal,
  Input,
  Total,
  Title,
  Value,
  SubmitButton,
  SubmitButtonText,
  List,
} from './styles';

export default function Cart() {
  const products = ['product1', 'product2'];

  const footer = () => {
    return (
      <>
        <Total>
          <Title>TOTAL</Title>
          <Value>R$ 539,70</Value>
        </Total>

        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </>
    );
  };

  return (
    <Container>
      <CartContent>
        <List
          data={products}
          keyExtractor={(product) => product}
          renderItem={({ product }) => (
            <Item key={product}>
              <Header>
                <Image
                  source={{
                    uri:
                      'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe1.jpg?ts=1573040493?ims=280x280',
                  }}
                />
                <Info>
                  <Description>
                    Tênis Adidas Duramo Lite 2 0 Masculino - Cinza
                  </Description>
                  <Price>R$ 179,90</Price>
                </Info>
                <RemoveButton>
                  <Icon name="delete-forever" color="#7159c1" size={25} />
                </RemoveButton>
              </Header>

              <Amount>
                <Count>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                  <Input value="0" />
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </Count>
                <Subtotal>R$ 539,70</Subtotal>
              </Amount>
            </Item>
          )}
          ListFooterComponent={footer()}
        />
      </CartContent>
    </Container>
  );
}
