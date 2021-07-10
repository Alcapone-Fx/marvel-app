import './Radio.css';

interface RadioProps {
  checked?: boolean;
  label: string;
  name: string;
  onChange: (value) => void;
  value: string;
}

const Radio: React.FC<RadioProps> = ({ label, name, onChange, value }) => (
  <label className="radio-container">
    {label}
    <input type="radio" name={name} value={value} onChange={onChange} />
    <span className="checkmark" />
  </label>
);

export default Radio;
