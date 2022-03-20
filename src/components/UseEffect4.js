import React, { useEffect, useState } from 'react'

function UseEffect4(props) {
const[isAdmin,setIsAdmin]=useState(true)
useEffect(()=>{
    setIsAdmin(props.showComponent)
},[props.showComponent])

console.log('rendering useEffect4',props.showComponent);

    return (
        <div>
            <p>UseEffect 4</p>
            {isAdmin?'Admin':'User'}
        </div>
    )
}

export default UseEffect4
