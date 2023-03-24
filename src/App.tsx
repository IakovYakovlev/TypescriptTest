import { BrowserRouter } from 'react-router-dom';
import Navbar from './Component/UI/Navbar/Navbar';
import './styles/App.css';
import AppRouter from './Component/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
};

export default App;