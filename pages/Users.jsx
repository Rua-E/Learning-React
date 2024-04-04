import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
    const { username } = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${username}`)
    setUser(data)   
    console.log(data)
        }

    useEffect (() => {
        setTimeout(() => {
            fetchUser()
        }, 500)
    }, [])
    return (
        <>
        <Link to="/" >Go Back To Home Page</Link>
            <p>{ user.id}</p>
            <p>{ user.name}</p>
            <p>{ user.email}</p>
            <p>{ user.username}</p>
        </>
    )
}

export default Users