interface InputProps {
  type: string;
  placeholder: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  name,
}: InputProps) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={name} className="mb-2 text-sm font-bold text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="p-2 text-sm border rounded-md bg-transparent text-white border-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
    </div>
  );
};

export default Input;
