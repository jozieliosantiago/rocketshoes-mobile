import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #141419;
  padding: 10px 10px;
`;

export const CartContent = styled.View`
  background: #fff;
  padding: 15px 15px;
  border-radius: 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
  padding-bottom: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.View`
  width: 160px;
`;

export const Image = styled.Image`
  height: 100px;
  width: 100px;
`;

export const Description = styled.Text`
  font-size: 14px;
`;

export const RemoveButton = styled(RectButton)`
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Amount = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  padding: 0 10px;
  border-radius: 5px;
`;

export const Count = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  editable: false,
})`
  width: 60px;
  background: #fff;
  height: 30px;
  margin: 0 10px;
  border-radius: 5px;
  border: solid 1px #ccc;
  padding: 0;
  text-align: center;
  color: #555;
`;

export const Subtotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Total = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  color: #888;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  height: 40px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  /* margin-bottom: 5px; */
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
