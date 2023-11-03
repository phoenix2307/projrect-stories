import {useMemo, useState} from "react";

export const ExampleForUseMemo = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=>{
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            A: <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
            <br/>
            B: <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
            <hr/>
            RESULT A = {resultA}
            <br/>
            RESULT B = {resultB}
        </div>
    )
}