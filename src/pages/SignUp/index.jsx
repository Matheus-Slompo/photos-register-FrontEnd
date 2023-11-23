import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp() {
  return (
    <div>
      <form>
        <Input label="Name:" type="text" />

        <Input label="E-mail:" type="text" />

        <Input label="Password:" type="password" />

        <Button title="Sign up" />
      </form>
    </div>
  );
}
