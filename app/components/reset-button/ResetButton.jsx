import { Tooltip, IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

export default function ResetButton({ onClick, isDisable }) {
  return (
    <Tooltip content="Empezar de nuevo">
      <IconButton variant="outlined" onClick={onClick} disabled={isDisable} className="mr-2 border-indigo-500">
        <FontAwesomeIcon icon={faArrowsRotate} size="lg" style={{ color: "rgb(99 102 241)" }} />
      </IconButton>
    </Tooltip>
  );
}
