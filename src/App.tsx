import { BrowserRouter } from 'react-router-dom';
import Navbar from './Component/UI/Navbar/Navbar';
import './styles/App.css';
import AppRouter from './Component/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;