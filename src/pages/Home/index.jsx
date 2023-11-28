import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <h1>Adicione sua foto abaixo</h1>
      <form>
        <Input type="file" />
        <Button title="Enviar" />
      </form>
    </HomeContainer>
  );
}
