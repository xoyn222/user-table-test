import React from 'react';
import {Button} from '@mui/material';

interface ActionButtonProps {
    active: boolean;
    onClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({active, onClick}) => {
    return (
        <Button
            variant="contained"
            color={active ? 'secondary' : 'primary'}
            onClick={onClick}
        >
            {active ? 'Выключить' : 'Включить'}
        </Button>
    );
};
