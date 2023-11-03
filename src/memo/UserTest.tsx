import React from "react";

export const NewUserMemo = (props: { users: string[] }) => {
    console.log('NEW USER')
    return (
        <div> {props.users.map((m, i) => <div key={i}>{m}</div>)} </div>
    )
}
export const NewUser = React.memo(NewUserMemo)


export const CounterMemo = (props: { count: number }) => {
    console.log('COUNT')
    return (
        <div><h3>{props.count}</h3></div>
    )
}
export const Counter = React.memo(CounterMemo)