import { useContext, useState } from 'react';
import { UseAuth } from '../hooks/useAuth';
import logo from '../assets/image/logo.svg';
import { UserBox } from '../components';
import '../assets/style/component.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const { userConnected } = useContext(UseAuth);
  const [open, setOpen] = useState(false);
  return (
    <header data-testid="header">
      <div className="content">
        <Link to='/'>
          <img src={logo} alt="VR Benefícios" title='vr' aria-label='vr' />
          <img src="https://www.elumini.com.br/wp-content/themes/elumini/images/logo_topo.png" alt="Elumini IT" title='elumini' aria-label='elumini' />
        </Link>
        {userConnected ? (
          <div className='user_wrapper' data-testid="user_wrapper">
            <img src={userConnected?.image} aria-label="avatar" alt={`Imagem perfil de ${userConnected?.username}`} title={`Imagem perfil de ${userConnected?.username}`} className='avatar' onClick={() => setOpen(prevState => !prevState)} />
            {open && <UserBox />}
          </div>
        ) : (
          <Link to='/login' title='login'>Fazer login</Link>
        )}
      </div>
    </header>
  )
}

export default Header;


