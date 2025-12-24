import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button> <TimerIcon/> </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
        voluptatem, quidem velit iste quisquam, ipsa illum modi officia
        provident molestias minus sit nihil, qui libero dolorem dicta rem
        accusamus!
      </p>
    </>
  );
}
