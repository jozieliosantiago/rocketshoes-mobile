import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const HeaderContainer = styled.View`
  flex: 1;
  height: 60px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #141419;
`;

export const Logo = styled.Image`
  width: 155px;
  height: 20px;
`;

export const CartIcon = styled(TouchableWithoutFeedback)`
  height: 30px;
  padding-top: 3px;
  justify-content: center;
  width: 32px;
`;

export const Count = styled.Text`
  position: absolute;
  min-height: 18px;
  min-width: 18px;
  border-radius: 18px;
  top: 1px;
  right: 2px;
  background: #7159c1;
  font-size: 10px;
  text-align: center;
  color: #fff;
  padding: 1px 0;
`;
