import { ChangeEvent, ForwardedRef } from 'react';
import styled from 'styled-components';

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

const InputWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 600;
  font-size: 0.94rem;
`;

const Input = styled.input`
  height: 40px;
  padding: 0 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ff0098;
  color: #555;

  ::placeholder {
    color: #999;
  }
`;
