import { GlobalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
