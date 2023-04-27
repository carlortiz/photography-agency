import { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import UserCard from "./UserCard";

function App(){
    const[value, setValue] = useState(null);

    function handleGetUsersClick() {
        setValue(true);
    }

    const [users, setUsers] = useState([])

    const fetchUserData = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    return (
        <div>
            <div><Navbar onGetUsersClick={handleGetUsersClick} ></Navbar></div>
            
            
        </div>
    );
}

export default App;

// fetch the data from the link
// show a loader while the api fetches the data
// display the data on Cards


