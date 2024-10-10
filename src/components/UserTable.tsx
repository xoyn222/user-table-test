import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {UserRow} from './UserRow';

interface User {
    id: string;
    name: string;
    login: string;
    group: string;
    active: boolean;
}

interface UserTableProps {
    users: User[];
    onToggleStatus: (id: string, active: boolean) => void;
}

export const UserTable: React.FC<UserTableProps> = ({users, onToggleStatus}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Имя</TableCell>
                    <TableCell>Логин</TableCell>
                    <TableCell>Группа</TableCell>
                    <TableCell>Активный</TableCell>
                    <TableCell>Действия</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user => (
                    <UserRow key={user.id} user={user} onToggleStatus={onToggleStatus}/>
                ))}
            </TableBody>
        </Table>
    );
};
