import React, { useEffect, useState } from 'react'

function UseEffect3() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(0)

    useEffect(() => {
        console.log(' componentDidMount useEffect executed');
        // return ()=>{
        //     console.log('ComponentWillUnMOunt useEffect executed');
        // }
    }, [])


    useEffect(() => {
        if (count !== 0) {
            console.log('Count  ComponentDidUpdate UseEffect executed');
        }
    }, [count])

    useEffect(() => {
        if (age !== 0) {
            console.log('Age  ComponentDidUpdate UseEffect executed');
        }
    }, [age])

    useEffect(() => {
        console.log('Age or Count ComponentDidUpdate UseEffect executed');
    }, [age, count])

    const increaseCount = () => {
        setCount(count + 1)
    }
    const increaseAge = () => {
        setAge(age + 10)
    }
    return (
        <div>
            <p>UseEffect 3</p>
            <p>Count-{count}</p>
            <button onClick={increaseCount}>Click</button>
            <p>Age- {age}</p>
            <button onClick={increaseAge}>Click</button>
        </div>
    )
}

export default UseEffect3
