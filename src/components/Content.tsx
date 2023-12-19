import { useContext, useEffect, useState } from 'react';
import { UseAuth } from '../hooks/useAuth';
import { Loading } from '../components';
import '../assets/style/component.css'
import { USERS_URL } from '../assets/const';

import paginate from '../assets/image/paginate.svg';

const Content = () => {
  const { allUser, userConnected, loading, setAllUser, setLoading } = useContext(UseAuth);
  const [ count, setCount] = useState(0);
  const genderText = userConnected?.gender === 'female' ? 'vinda' : 'vindo';

  useEffect(() => {
    setLoading(true);
    fetch(`${USERS_URL}&skip=${count}`)
      .then(data => data.json())
      .then(data => {
        setAllUser(data);
        setLoading(false);
    })
  }, [count, setAllUser, setLoading])

  return (
    <section className='content_wrapper'>
      <div className='container'>
        <h2>Seja bem {genderText},  <strong title={userConnected?.username}>{userConnected?.username}</strong>👋</h2>
        {loading ? (
          <div className='loading_wrapper'>
            <Loading />
          </div>
        ) : (
          <>
            <ul>
              {allUser?.users.map(item => (
                <li key={`${item.id}-${item.username}`}>
                  <div className='profile_pic' title={`Imagem de ${item.firstName} ${item.lastName}`}>
                    <img src={item?.image} alt={`Imagem perfil de ${item?.username}`} />
                  </div>
                  <div className='content_users'>
                    <div title={`Nome ${item.firstName} ${item.lastName}`}>
                      <strong>Nome</strong>
                      <span>{`${item.firstName} ${item.lastName}`}</span>
                    </div>
                    <div  title={`Email ${item.email}`}>
                      <strong>Email</strong>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                    <div  title={`Username ${item.username}`}>
                      <strong>Username</strong>
                      <span>{item.username}</span>
                    </div>
                    <div title={`Idade ${item.age} anos`}>
                      <strong>Idade</strong>
                      <span>{item.age} anos</span>
                    </div>
                    <div title={`Genêro ${item.gender}`}>
                      <strong>Genêro</strong>
                      <span>{item.gender}</span>
                    </div>
                    <div title={`Domínio ${item.domain}`}>
                      <strong>Domínio</strong>
                      <a href={item.domain} target='blank' rel="noreferrer">{item.domain}</a>
                    </div>
                    <div title={`Olhos ${item.eyeColor}`}>
                      <strong>Olhos</strong>
                      <span>{item.eyeColor}</span>
                    </div>
                    <div title={`Cabelo ${item.hair.color}`}>
                      <strong>Cabelo</strong>
                      <span>{item.hair.color}</span>
                    </div>
                    <div title={`Altura ${item.height} cm`}>
                      <strong>Altura</strong>
                      <span>{item.height}cm</span>
                    </div>
                    <div title={`Peso ${item.weight} kg`}>
                      <strong>Peso</strong>
                      <span>{item.weight}kg</span>
                    </div>
                    <div title={`Telefone ${item.phone}`}>
                      <strong>Telefone</strong>
                      <a href={`tel:${item.phone}`} target='blank' rel="noreferrer">{item.phone}</a>
                    </div>
                    <div title={`Tipo Sanguíneo ${item.bloodGroup}`}>
                      <strong>Tipo Sanguíneo</strong>
                      <span>{item.bloodGroup}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='pagination_wrapper'>
              <button title='Anterior' disabled={count === 0} onClick={() => setCount(prevState => prevState - 10)}>
                <img src={paginate} alt="Anterior" />
              </button>
              <button title='Próximo' disabled={count === 90}onClick={() => setCount(prevState => prevState + 10)}>
                <img src={paginate} alt="Próximo" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )

}

export default Content;