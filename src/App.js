import React from 'react';
import AuthContextProvider from './components/contexts/authContext';
import ProductsContextProvider from './components/contexts/productsContext';
import NavBar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
      <AuthContextProvider>
        <ProductsContextProvider>
        <NavBar />
      <MainRoutes/>{" "}
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;