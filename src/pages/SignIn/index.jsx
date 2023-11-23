import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <div>
      <form>
        <Input label="E-mail:" type="text" />

        <Input label="Password:" type="password" />

        <Button title="Sign in" />
      </form>
      <p>
        Deseja fazer <a href="/SignUp">cadastro</a>?
      </p>
    </div>
  );
}
