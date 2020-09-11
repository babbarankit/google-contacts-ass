import styled from 'styled-components';

export const CheckboxWrapper = styled.div<{ hover: boolean }>`
  margin-right: 30px;
  margin-left: 15px;
  position: relative;
  label {
    visibility: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    height: 16px;
    left: 0;
    position: absolute;
    top: 0;
    width: 16px;
    border: 1.4px solid #053ed1;
  }

  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 4px;
    left: 3px;
    opacity: 0;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 12px;
  }

  input[type='checkbox'] {
    visibility: hidden;
  }

  input[type='checkbox']:checked + label {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
  &.visible-hover {
    visibility: ${(props) => (props.hover ? 'visible' : 'hidden')};
  }
`;
