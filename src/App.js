import { useState } from 'react';
import Navbar from "./Navbar"
import UserCard from "./UserCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(){
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(false);

    function handleGetUsersClick() {
        fetchUserData();
    }

    const fetchUserData = () => {
        setLoader(true);

        fetch("https://reqres.in/api/users?page=1")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setLoader(false);
            setUsers(data.data);
        })
    }

    return (
        <div>
            <div><Navbar onGetUsersClick={handleGetUsersClick} ></Navbar></div>
            
            {loader && (
                <div>
                    <p class="loader"></p>
                    <h5>Please wait...</h5>
                </div>
            )}
            
            <Row>
                {users.map(user => (
                    <UserCard 
                        avatar = { user.avatar }
                        email = { user.email } 
                        first_name={ user.first_name } 
                        last_name={ user.last_name } 
                    />
                ))}
            </Row>
        </div>
    );
}

export default App;

