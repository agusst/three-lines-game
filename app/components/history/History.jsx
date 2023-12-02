import {
  Card,
  List,
  IconButton,
  ListItem,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import styles from './history.module.css';
import { useState } from "react";

export default function History({ history, onClick }) {
  const [asc, setAsc] = useState(false);

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
    return <ListItem key={index} onClick={() => onClick(index)} disabled={isLast} style={{ fontSize: '0.75rem' }}>{description}</ListItem>
  })

  if (asc) {
    list.reverse();
  }

  return (
    <div>
      <Typography variant="h5" color="indigo" className="mb-2">
        <Tooltip content="Cambiar orden">
          <IconButton variant="outlined" className="mr-2 border-indigo-500" onClick={() => setAsc(!asc)}>
            <FontAwesomeIcon icon={faSort} size="lg" style={{ color: "rgb(99 102 241)" }} />
          </IconButton>
        </Tooltip>
        Movimientos
      </Typography>
      <Card className={`${styles.tarjeta} w-72 overflow-y-auto`}>
        <List>
          {list}
        </List>
      </Card>
    </div>
  );
}