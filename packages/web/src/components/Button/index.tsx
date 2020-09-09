import styled from 'styled-components';

const Button = styled.button<{ type?: 'primary' }>`
  background: ${(props) => props.theme.button.primary.bg};
  height: 60px;
  max-width: 70%;
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: 0;
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.08em;
  width: 90%;
  @media screen and (min-width: 450px) {
    width: 401px;
  }
`;

export default Button;
