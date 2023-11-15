export function SignUp() {
  return (
    <div>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          E-mail:
          <input type="text" />
        </label>
        <label>
          Senha:
          <input type="password" />
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  );
}
