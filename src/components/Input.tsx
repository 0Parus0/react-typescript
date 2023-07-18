type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input
      type="text"
      name=""
      id=""
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
