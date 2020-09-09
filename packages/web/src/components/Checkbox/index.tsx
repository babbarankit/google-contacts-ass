import { CheckboxWrapper } from './ChecboxWrapper';

export interface CheckboxProps {
  hover?: boolean;
  id: string;
}

const Checkbox: React.SFC<CheckboxProps> = ({ id, hover }) => {
  return (
    <CheckboxWrapper className='visible-hover' hover={hover}>
      <input type='checkbox' id={id} />
      <label htmlFor={id}></label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
