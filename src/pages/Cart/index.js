import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

function Cart({ cart }) {
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
          data={cart}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <Header>
                <Image
                  source={{
                    uri: item.image,
                  }}
                />
                <Info>
                  <Description>{item.title}</Description>
                  <Price>{item.priceFormatted}</Price>
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

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
