import { getButtonClassNameByDisabledCondition } from 'utils';

interface ButtonProps {
  isDisabled: boolean;
  label: string;
  onClick?: () => void;
  type?: 'primary' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  label,
  type = 'primary',
  onClick,
}) => (
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
