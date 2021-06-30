import './Radio.css';

type RadioProps = {
  checked?: boolean;
  label: string;
  name: string;
  onChange: (value) => void;
  value: string;
};

const Radio = ({
  label,
  name,
  onChange,
  value,
}: RadioProps) => (
  <label className="radio-container">
    {label}
    <input type="radio" name={name} value={value} onChange={onChange} />
    <span className="checkmark" />
  </label>
);

export default Radio;
