export default function Row(props) {
  const items = [];
  for (let index = 0; index < 3; index++) {
    items.push(props.children(index));
  }
  return <div>{items}</div>;
}
