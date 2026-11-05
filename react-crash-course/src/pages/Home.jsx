import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([]);

    // fetch data from api upon mount
    async function fetchJSON() {
        
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("Home.jsx fetchJSON()", data);
        setUsers(data);
    }

    useEffect(() => {
        // Pretend to wait for 2 seconds to test loading.
        setTimeout(() => {
            fetchJSON();    // fetch data.
        }, 500);
    }, [])

    //--If we just try to return users[0].name, it will be undefined until 
    //  await is done. So we have to check length first. Here is the full
    //  syntax:
    //return <h1>{users.length ? users[1].name : null}</h1>

    //--Here is the shorthand version which accomplishes the same thing:
    //return <h1>{users.length && users[0].name}</h1>

    //--Further shorthand means it might be undefined
    //return <h1>{users[1]?.name}</h1>

    //return a <h1>USERS</h1> and a list of users with links to their user page

    //dynamic styling options!
    const pixels = 3;

    return (
        <div>
            {users.length > 0
            ? <>
                <h1>USERS</h1>
                <div style={{ border: `${pixels}px solid white` }}> {/* Dynamic styling!*/}
                    <div>id</div>
                    <div>name</div>
                    <div>username</div>
                    <div>email</div>
                </div>
            </>
            : <h1>Loading...</h1>
            }
        </div>
    );
}

export default Home