import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SignInContainer } from './styles';

export function SignIn() {
  return (
    <SignInContainer>
      <form>
        <h1>Welcome to Photo Register</h1>

        <Input label="E-mail:" type="text" />

        <Input label="Password:" type="password" />

        <a href="/Home">Forgot your password?</a>

        <Button title="Sign in" />
      </form>
      <p>
        Deseja fazer <a href="/SignUp">cadastro</a>?
      </p>
    </SignInContainer>
  );
}
