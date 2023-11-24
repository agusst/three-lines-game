import {
  Card,
  CardBody,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import './history.css';

export default function History({ history, onClick }) {
  const list = history.map((squares, index) => {
    const isLast = index + 1 === history.length;
    let description = '';
    if (isLast) {
      description = `Estas en el movimiento ${index}`;
    } else if (index > 0) {
      description = `Ir al movimiento ${index}`;
    } else {
      description = 'Ir al inicio del juego';
    }
    return <ListItem key={index} onClick={() => onClick(index)} disabled={isLast}>{description}</ListItem>
  })

  return (
    <div>
      <Typography variant="h5" color="blue" className="mb-2">
        Movimientos
      </Typography>
      <Card className="w-96 tarjeta overflow-y-auto">
        <List>
          {list}
        </List>
      </Card>
    </div>
  );
}