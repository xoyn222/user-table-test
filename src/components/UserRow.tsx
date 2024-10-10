import React from 'react';
import {TableCell, TableRow} from '@mui/material';
import {ActionButton} from './ActionButton';

interface User {
    id: string;
    name: string;
    login: string;
    group: string;
    active: boolean;
}

interface UserRowProps {
    user: User;
    onToggleStatus: (id: string, active: boolean) => void;
}

export const UserRow: React.FC<UserRowProps> = ({user, onToggleStatus}) => {
    return (
        <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.login}</TableCell>
            <TableCell>{user.group}</TableCell>
            <TableCell>{user.active ? 'Да' : 'Нет'}</TableCell>
            <TableCell>
                <ActionButton active={user.active} onClick={() => onToggleStatus(user.id, user.active)}/>
            </TableCell>
        </TableRow>
    );
};
