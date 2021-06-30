import { getButtonClassNameByDisabledCondition } from 'utils';

type ButtonProps = {
  isDisabled: boolean;
  label: string;
  onClick?: () => void;
  type?: 'primary' | 'submit';
};

const Button = ({
  isDisabled,
  label,
  type = 'primary',
  onClick,
}: ButtonProps) => (
  <button
    className={getButtonClassNameByDisabledCondition(isDisabled)}
    disabled={isDisabled}
    onClick={onClick}
    type={type === 'submit' ? 'submit' : 'button'}
  >
    {label}
  </button>
);

export default Button;
