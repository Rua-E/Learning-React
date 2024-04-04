import React, {useEffect, useState} from 'react';
import axios from 'axios'
import User from "../components/User.jsx";
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([])

    async function fetchData() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 500)
    },[])
    
function renderUsers() {
    return (
        users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id} >
            <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}>
            </User>
                </Link>
            )) 
    )
}

function renderSkeletonLoading() {
    return (
        <h1>Loading...</h1>
    )
}

    return (
        <>
        { users.length > 0 ? renderUsers(): renderSkeletonLoading }
        </>
    );
}

export default Home