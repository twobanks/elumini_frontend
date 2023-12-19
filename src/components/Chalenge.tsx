import '../assets/style/doc.css'

const Challenge = () => {
  return (
    <div className='doc_content'>
      <div className='challenge_container'>
        <div className='challenge'>
          <h2>Desafio técnico proposto pela <a href="https://www.elumini.com.br/pb/" target="_blank" rel="noreferrer">Ellumini IT</a> + <a href="https://www.vr.com.br/" target="_blank" rel="noreferrer">VR Benefícios</a></h2>
          <div>
            <h3>Instruções</h3>
            <p>
              Desenvolva uma aplicação em React JS ou React Native que contenha um formulário de login e após efetuar o login você deverá exibir as informações completas do usuário logado.
            </p>
            <p>
              Para o desenvolvimento dessa aplicação você poderá utilizar as APIs abaixo:
            </p>
            <p>
              Autenticação: <a href="https://dummyjson.com/docs/auth">https://dummyjson.com/docs/auth</a>
            </p>
            <p>
              Exibição dos dados do usuário: <a href="https://dummyjson.com/docs/users">https://dummyjson.com/docs/users</a>
            </p>
            <p>
              Você é livre para definir o layout de sua aplicação e as demais libs que irá utilizar no projeto, mas preferencialmente evite a utilização de frameworks de estilização, como por exemplo Bootstrap, Tailwind, etc. Seu projeto deve possuir os seguintes scripts npm:
            </p>
          </div>
          <ul>
            <li>-<strong>start</strong>: inicia o projeto para desenvolvimento</li>
            <li>-<strong>build</strong>: gera os artefatos para deploy em produção</li>
            <li>-<strong>test</strong>: executa os testes do projeto</li>
          </ul>
        </div>
        <div className='challenge'>
          <div>
            <h3>O que será avaliado?</h3>
            <ul>
              <li>- Ferramentas adotadas</li>
              <li>- Consumo de API</li>
              <li>- Design Responsivo</li>
              <li>- Gerenciamento de estado (Redux, Context, etc)</li>
              <li>- Performance</li>
              <li>- Testes</li>
              <li>- Semântica e organização do projeto</li>
              <li>- Reaproveitamento de código</li>
            </ul>
          </div>
        </div>
        <div className='challenge'>
          <div>
            <h3>Envio do projeto</h3>
            <p>Para envio do teste, suba o projeto para seu Github e adicione ao readme as instruções necessárias para rodar o projeto.</p>
          </div>
          <a href="https://github.com/twobanks/elumini_frontend">Link do projeto no GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Challenge;