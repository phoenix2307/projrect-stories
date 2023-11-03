import React, {useState} from "react";
import './AppMemo.css'
import {Counter, NewUser} from "./UserTest";


export const AppMemo = () => {
    const [users, setUsers] = useState(['Alex', 'Natalie', 'Nika'])
    const [count, setCount] = useState(0)

    const addUser = () => {
        let newUser = 'Masx'
        setUsers([newUser, ...users])
    }

    return (
        <div>
            <h3>Testing AppMemo</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => {addUser()}}>add user
            </button>
            <Counter count={count}/>
            <NewUser users={users}/>
        </div>
    )
}
