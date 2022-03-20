import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [count,setCount]=useState(0)
  
    //UseEffect will get executed when component is mounted to the real dom (similar to comonentDidMount of class component)
    useEffect(()=>{
        console.log(' componentDidMount useEffect executed');
        // the returned callback function will get executed when component is about t unmount from the real dom (similar to componentWillUnmount of class component)
        return ()=>{
            console.log('ComponentWillUnMOunt useEffect executed');
        }
    },[])
    
//useEffect will get executed when count is changed(similar to componentDidUpdate of class component)
useEffect(()=>{
if(count!==0){
    console.log('ComponentDidUpdate UseEffect executed');
    
}
},[count])
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

export default UseEffect2
