import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../hooks/useAuth';
import { Content, Footer, Header } from '../components';

const User = () => {
  const { isAuthenticated } = useContext(UseAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if(!isAuthenticated) {
      navigate('/login')
    }
  },[isAuthenticated, navigate]);

  return (
    <main data-testid="container">
      <Header />
      <Content />
      <Footer />
    </main>
  )
}

export default User;
