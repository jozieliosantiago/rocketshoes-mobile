import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #141419;
  padding: 10px 10px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  height: 400px;
`;

export const Item = styled.View`
  background: #fff;
  border-radius: 5px;
  margin-right: 15px;
  padding: 15px;
  width: 250px;
  height: 450px;
`;

export const Image = styled.Image`
  height: 250px;
  width: 225px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 18px;
`;

export const PriceInfo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: auto;
`;

export const Button = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  height: 50px;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
`;

export const TextButton = styled.Text`
  color: #fff;
  flex: 1;
  font-weight: bold;
  text-align: center;
`;

export const CartIcon = styled.View`
  height: 50px;
  width: 70px;
  flex-direction: row;
  align-items: center;
  background: ${darken(0.03, '#7159c1')};
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Count = styled.Text`
  margin-left: 10px;
  color: #fff;
`;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
