import { ChangeEvent, ForwardedRef } from 'react';
import { Input, InputWrapper, Label } from './styles';

interface InputProps {
  id: string;
  labelText: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  valueRef: ForwardedRef<HTMLInputElement>;
  inputType?: string;
}

const CustomInput = ({
  id,
  labelText,
  placeholder,
  value,
  onChange,
  valueRef,
  inputType,
}: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={inputType ?? 'text'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={valueRef}
        autoComplete={inputType === 'password' ? 'off' : ''}
      />
    </InputWrapper>
  );
};

export default CustomInput;
