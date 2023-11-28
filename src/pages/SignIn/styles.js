import styled from 'styled-components';

export const SignInContainer = styled.main`
  padding: 32px;
  width: 540px;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  border-radius: 2px;
  background-color: #2cb3ff;

  form {
    display: flex;
    gap: 18px;
    flex-direction: column;
    align-items: center;

    a {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
