import { CheckboxWrapper } from './ChecboxWrapper';

export interface CheckboxProps {
  hover?: boolean;
  id: string;
  onClick?: any;
}

const Checkbox: React.SFC<CheckboxProps> = ({ id, hover, onClick }) => {
  return (
    <CheckboxWrapper className='visible-hover' hover={hover}>
      <input type='checkbox' id={id} onClick={onClick} />
      <label htmlFor={id}> </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
