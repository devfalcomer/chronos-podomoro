import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>Olá Mundo 1</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
        voluptatem, quidem velit iste quisquam, ipsa illum modi officia
        provident molestias minus sit nihil, qui libero dolorem dicta rem
        accusamus!
      </p>
    </>
  );
}
