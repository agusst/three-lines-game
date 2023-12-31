import './row.module.css';

export default function Row(props) {
  const items = [];
  for (let index = 0; index < 3; index++) {
    items.push(props.children(index));
  }
  return <div className={props.showBorder ? 'border-y-4 border-indigo-500 flex' : 'flex'}>{items}</div>;
}
