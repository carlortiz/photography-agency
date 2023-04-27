import { useState } from 'react';
import Navbar from "./Navbar"
import UserCard from "./UserCard";
import Row from 'react-bootstrap/Row';

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

    const renderUsers = () => {
        let rows = [];
        let row = [];

        users.forEach((user, index) => {
            row.push(
                <UserCard 
                    avatar = { user.avatar }
                    email = { user.email } 
                    first_name={ user.first_name } 
                    last_name={ user.last_name } 
                />
            );
            
            const fullRow = (index + 1) % 3 === 0;
            if (fullRow) {
                rows.push(<Row>{row}</Row>);
                row = [];
            }
        });

        return rows;
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
            
            <div class="container">{ renderUsers() }</div>
        </div>
    );
}

export default App;

