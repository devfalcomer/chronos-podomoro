import styles from './styles.module.css'

type InputPros = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>; // Permite receber as propriedes do input que tem no HTML

export function Input({id, labelText, type, ...rest}: InputPros) {
  // O rest permite receber o resto das propriedades faltantes no componente
  return (
    <>
      <label  htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
