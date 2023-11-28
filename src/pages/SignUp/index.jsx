import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { SignUpContainer } from './styles';

export function SignUp() {
  return (
    <SignUpContainer>
      <form>
        <h1>Create your Account - It's quick</h1>
        <Input label="Name:" type="text" />

        <Input label="E-mail:" type="text" />

        <Input label="Password:" type="password" />

        <Button title="Sign up" />
      </form>
    </SignUpContainer>
  );
}
