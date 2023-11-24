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
    const description = index > 0 ? `Ir al movimiento ${index}` : 'Ir al inicio del juego';
    return <ListItem key={index} onClick={() => onClick(index)}>{description}</ListItem>
  })

  return (
    <Card className="w-96 tarjeta">
      <CardBody className="overflow-y-auto">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Movimientos
        </Typography>
        <List>
          {list}
        </List>
      </CardBody>
    </Card>
  );
}