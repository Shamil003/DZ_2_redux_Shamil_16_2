import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersReducer} from "../../redux/reducer/usersReducer";

const UsersPage = () => {
    const [user, setUser] = useState('');
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)
    const handleUser = e => {
        setUser(e.target.value)
    }

    const createUser = () => {
        dispatch({type: "CREATE_USER", payload: user})
        setUser("")

    }

    const clear = () => {
        dispatch({type : "CLEAR"})
    }

    return (
        <div>
            <h1>add users</h1>
            <input type="text" onChange={handleUser} value={user}/>
            <button onClick={createUser}>add</button>
            <button onClick={clear}>очистить</button>

            <ul>
                {
                    users.length > 0
                    ?
                        users.map(user => <li>{user}</li>)
                    :
                     <li>список пуст</li>
                }
            </ul>
        </div>
    );
};

export default UsersPage;