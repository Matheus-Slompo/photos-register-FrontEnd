import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { HomeContainer } from './styles';

export function Home() {
  /*const handleClickedButton = () => {
    event.preventDefault();
    console.log('Cliquei aqui');
  };*/

  return (
    <HomeContainer>
      <h1>Adicione sua foto abaixo</h1>
      <form>
        <Input type="file" />
        <button /*onClick={handleClickedButton}*/>Enviar</button>
      </form>
      <Button />
    </HomeContainer>
  );
}
