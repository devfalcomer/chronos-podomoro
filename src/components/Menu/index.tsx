import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailiableTheme = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailiableTheme>('dark');

  function handleChangeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })
  }

  // useEffect(() => {
  //   console.log('Carregado');
    
  // }) // Quando está sem dependencias, é executado toda vez que o componente renderiza na tela

  useEffect(() => {
    console.log('Theme mudou', theme);
    document.documentElement.setAttribute('data-theme', theme);

    return() => {
      console.log('Este componente será atualizado');
      
    }
  },[theme]) // Funciona da mesma forma sem dependencias, porém, Só é executado quando o React monta o componente
  // na tela pela primeira vez

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a página inicial'
        title='Página Inicial'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a página de configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleChangeTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
