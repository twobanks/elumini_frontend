import { useContext } from 'react';
import { UseAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import '../assets/style/component.css'

const UserBox = () => {
  const { logout, userConnected } = useContext(UseAuth);
  const emojiGender = userConnected?.gender === 'female' ? <>🙋‍♀️</> : <>🙋‍♂️</>;
  return (
    <div className='box_user_wrapper' data-testid="box_user_wrapper">
      <img src={userConnected?.image} aria-label='avatar' alt={`Imagem perfil de ${userConnected?.username}`} title={`Imagem perfil de ${userConnected?.username}`} />
      <div className='info_user'>
        <h3 title={`${userConnected?.firstName} ${userConnected?.lastName}`}>{`${userConnected?.firstName} ${userConnected?.lastName}`}</h3>
        <div className='content_user'>
          <span title={userConnected?.username}>{emojiGender} {userConnected?.username}</span>
          <p title={userConnected?.email}>{userConnected?.email}</p>
          <div className='nav'>
            <div>
              <NavLink to="/" title='challenge' aria-label="challenge"  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Desafio</NavLink>
              <NavLink to="/users" title='users' aria-label="users"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Usuários</NavLink>
            </div>
            <button title='Sair' name='logout' aria-label="logout" onClick={logout}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBox;