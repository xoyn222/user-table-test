import React from 'react';
import {TextField, MenuItem} from '@mui/material';

interface FiltersProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedGroup: string;
    setSelectedGroup: (group: string) => void;
    groups: string[];
}

export const Filters: React.FC<FiltersProps> = ({
                                                    searchTerm,
                                                    setSearchTerm,
                                                    selectedGroup,
                                                    setSelectedGroup,
                                                    groups
                                                }) => {
    return (
        <div style={{marginBottom: '20px', display: 'flex', gap: '20px'}}>
            <TextField
                label="Поиск"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TextField
                label="Группа"
                select
                variant="outlined"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
            >
                <MenuItem value="">Все группы</MenuItem>
                {groups.map(group => (
                    <MenuItem key={group} value={group}>
                        {group}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};
