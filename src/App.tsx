import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Heading } from './components/Heading';

export function App() {
  //Que todos os componentes que usam ""numero"
  //saibam das mudanças em seu valor.
  //Sempre que for usar useState, não vou usar atribuição diretamente

  //const [numero, setNumero] = useState(() => {
  //console.log('Lazy Initialization');
  //return 0;
  //})

  const [numero, setNumero] = useState(0)

  function handleClick() {
    setNumero(() => numero + 1);
  }
  return (
    <>

      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <Input
              id='input'
              labelText='task'
              type='text'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
