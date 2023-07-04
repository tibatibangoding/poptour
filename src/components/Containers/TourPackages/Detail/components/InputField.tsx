import { FC } from 'react';

type Props = {
  title: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onchange: any;
};

const InputField: FC<Props> = ({
  title,
  placeholder,
  type,
  name,
  value,
  onchange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {title}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onchange}
        id={name}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};

export default InputField;
