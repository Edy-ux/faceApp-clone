import React, { useContext } from 'react';
import Body from './components/Body';
import { AuthContext } from './contexts/auth';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import Login from './components/Login';


const App = () => {
  const { user } = useContext(AuthContext);

  return !user ? (
    <Login />
  ) : (
    <>
      <Header />
      <Body />
      <GlobalStyles />
    </>
  );
};

export default App;
