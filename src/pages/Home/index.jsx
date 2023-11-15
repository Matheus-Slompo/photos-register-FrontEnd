export function Home() {
  /*const handleClickedButton = () => {
    event.preventDefault();
    console.log('Cliquei aqui');
  };*/

  return (
    <div>
      <h1>Adicione sua foto abaixo</h1>
      <form>
        <input type="file" />
        <button /*onClick={handleClickedButton}*/>Enviar</button>
      </form>
      <button>Visualizar fotos</button>
    </div>
  );
}
