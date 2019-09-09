import Styled from 'styled-components';

export const StyledHero = Styled.header`
  min-height: 60vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
