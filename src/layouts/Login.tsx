import logo from '../assets/image/logo.svg';
import { LOGIN_URL } from '../assets/const';
import { Footer } from '../components';
import { UseAuth } from '../hooks/useAuth';
import { AuthUser } from '../types/User';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { error, setError, isAuthenticated, setUserConnected } = useContext(UseAuth);
  const [user, setUser] = useState<AuthUser>({ username: '', password: '' });
  const navigate = useNavigate();
   useEffect(() => {
    if(isAuthenticated) {
      navigate('/users');
    } else {
      navigate('/login')
    }
  },[isAuthenticated, navigate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      })
    })
    .then(data => data.json())
    .then((data) => {
      if(data.message === 'Invalid credentials'){
        setError(true);
      } else {
        setUserConnected(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/users');
      }
    });
  }

  return (
    <main>
      <section>
        <div className="login">
          <Link to="/">
            <img src={logo} alt="VR Benefícios" title='vr' aria-label='vr' />
          </Link>
          <form name='login' aria-label="login" onSubmit={handleSubmit}>
            <input type="text" name='username' aria-label="name" placeholder='Digite seu usuário' title='Digite seu usuário' onChange={handleChange} value={user.username || ''} />
            <input type="password" data-testid="password" name="password" aria-label="password" placeholder='Digite sua senha' title='Digite sua senha' onChange={handleChange} value={user.password || ''} />
            <button type='submit' disabled={(user.username && user.password) === ''} title='Fazer login'>Fazer login</button>
            {error && (
              <div data-testid="error_wrapper" className="error_wrapper" onClick={() => setError(false)}>
                <strong>Não foi possível realizar o login</strong>
                <span>Confira suas credenciais e tente novamente</span>
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Login;
