import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {UserTable} from './components/UserTable';
import {Filters} from './components/Filters';

interface User {
    id: string;
    name: string;
    login: string;
    group: string;
    active: boolean;
}

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [groups, setGroups] = useState<string[]>([]);

    useEffect(() => {
        axios.get<User[]>('https://67024c1dbd7c8c1ccd3e74b3.mockapi.io/api/v1/users')
            .then(response => {
                setUsers(response.data);
                const uniqueGroups = Array.from(new Set(response.data.map((user: User) => user.group)));
                setGroups(uniqueGroups);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);


    const filteredUsers = users.filter(user =>
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.login.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedGroup === '' || user.group === selectedGroup)
    );


    const toggleUserStatus = (id: string, active: boolean) => {
        axios.put(`https://67024c1dbd7c8c1ccd3e74b3.mockapi.io/api/v1/users/${id}`, {active: !active})
            .then(() => {
                setUsers(prevUsers => prevUsers.map(user =>
                    user.id === id ? {...user, active: !active} : user
                ));
            })
            .catch(error => {
                console.error('Ошибка при обновлении статуса:', error);
            });
    };

    return (
        <div style={{padding: '20px'}}>
            <h1>Список пользователей</h1>
            <Filters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
                groups={groups}
            />
            <UserTable users={filteredUsers} onToggleStatus={toggleUserStatus}/>
        </div>
    );
};

export default App;
