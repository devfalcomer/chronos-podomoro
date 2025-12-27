import styles from './styles.module.css'

type InputPros = {
  id: string;
} & React.ComponentProps<'input'>;

export function Input({id, type}: InputPros) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
