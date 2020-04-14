import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  const footer = () => {
    return (
      <>
        <Total>
          <Title>TOTAL</Title>
          <Value>{total}</Value>
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
                <RemoveButton onPress={() => removeFromCart(item.id)}>
                  <Icon name="delete-forever" color="#7159c1" size={25} />
                </RemoveButton>
              </Header>

              <Amount>
                <Count>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                    onPress={() => decrement(item)}
                  />
                  <Input value={String(item.amount)} />
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="#7159c1"
                    onPress={() => increment(item)}
                  />
                </Count>
                <Subtotal>{item.subtotal}</Subtotal>
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
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
