export function SignIn() {
  return (
    <div>
      <form>
        <label>
          E-mail:
          <input type="text" />
        </label>
        <label>
          Senha:
          <input type="password" />
        </label>
        <button>Entrar</button>
      </form>
      <p>Deseja fazer cadastro?</p>
      <button>Cadastre-se</button>
    </div>
  );
}
