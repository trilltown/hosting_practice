import React from 'react';
import { useHttp } from '../util/customHooks';

export default function PeopleSelect({personId, handleChange}) {
    const [ data, isLoading] = useHttp("/users")
    if(isLoading) return null; 
    return(
        <select value={personId} onChange={handleChange}>
            <option value={0}>All Cars</option>
            {data.users.map(user => {
                return <option key={user.id} value={user.id}>{user.username}</option>
            })}
        </select>
    )
};
