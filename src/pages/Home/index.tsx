import '../../styles/global.css';
import '../../styles/theme.css';


import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';

type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home(props: HomeProps) {
  console.log(props);
  
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>
        
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
