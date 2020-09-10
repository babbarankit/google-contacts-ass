import React from 'react';
import { BiError } from 'react-icons/bi';

export const ErrorComponent: React.SFC<{ message: string }> = ({ message }) => (
  <div
    style={{
      color: 'red',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    }}>
    <div style={{ paddingTop: 2 }}>
      <BiError />
    </div>
    <div style={{ paddingLeft: 5 }}>{message}</div>
  </div>
);

export default ErrorComponent;
