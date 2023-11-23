import { InputContainer } from './styles';

export function Input({ label, ...rest }) {
  return (
    <InputContainer>
      {label}
      <input {...rest} />
    </InputContainer>
  );
}
