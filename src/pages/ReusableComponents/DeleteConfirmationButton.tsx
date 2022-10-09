import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';

interface DeleteProps {
  isDeleting: boolean;
  deleteFunc: any;
  deleteId: number;
}

export const DeleteConfirmationButton: React.FC = (props: DeleteProps) => {
  const { isDeleting, deleteFunc, deleteId } = props;
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleClick = () => {
    if (isConfirmed) {
      deleteFunc(deleteId);
      return;
    }

    if (!isConfirmed) {
      setIsConfirmed(true);
      setTimeout(() => {
        setIsConfirmed(false);
      }, 5000);
    }
  };

  return (
    <IconButton
      sx={{ height: '40px', borderRadius: '10px', color: 'red' }}
      disabled={isDeleting}
      onClick={handleClick}
    >
      {isConfirmed ? (
        <Typography variant="body1">Are you sure?</Typography>
      ) : (
        <DeleteOutlineIcon color="error" />
      )}
    </IconButton>
  );
};
