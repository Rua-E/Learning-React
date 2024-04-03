import React, {useEffect, useState} from 'react';
import axios from 'axios'


function Home() {
    const [users, setUsers] = useState([])

    async function fetchData() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData();
    },[])
    
    return <h1>{users.length > 0 ? users[0].name : null}</h1>
}

export default Home