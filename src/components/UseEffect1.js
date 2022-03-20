import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count,setCount]=useState(0)
    //never ever write the useefect like this this useeffect will be executed on component mount as well as state or props change and component unmount
    useEffect(()=>{
        console.log('use Effect executed');
    })
    
    const increaseCount=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <p>UseEffect 1</p>
            <p>Count-{count}</p>
            <button onClick={increaseCount}>Click</button>
        </div>
    )
}

export default UseEffect1
