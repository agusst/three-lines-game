import styles from './square.module.css';

export default function Square({ value, onClick, showBorder, highlight }) {
  let style = styles.square;
  if (highlight) {
    style += " ease-in duration-300 scale-125 text-indigo-500";
  }

  return (
    <div className={showBorder ? 'flex border-x-4 border-indigo-500' : 'flex'}>
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  );
}
