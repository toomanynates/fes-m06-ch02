import {useParams } from 'react-router-dom'

function Users () {
    console.log(useParams()); // from react-router-dom
    const {username} = useParams(); // such a weird syntax
    return (
        <h1>{username}</h1>
    )
}

export default Users;