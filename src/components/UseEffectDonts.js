import React, { useEffect } from 'react';

function UseEffectDonts() {
    const [count, setcount] = useState(0);
    const [age, setage] = useState(0);
    const [person, setPerson] = useState({
        fname: 'Rakesh',
        age: 10
    });

    //Don't update the state which is passed as dependency in the same useEffect
    // useEffect(() => {
    //     if (count !== 0) {
    //         console.log('count', count);
    //         setcount(count + 1)
    //     }
    // }, [count])
    // useEffect(() => {
    //     if (count !== 0) {
    //         console.log('count', count);
    //         setcount(age + 20)
    //     }
    // }, [age])

    // useEffect(() => {
    //     if (age !== 0) {
    //         console.log('age', age);
    //         setcount(count + 1)
    //     }
    // }, [age])

    // useEffect(() => {
    //     if (person.age !== 10) {
    //         const p = { ...person }
    //         p.age = 20
    //         setPerson(p)
    //     }
    // }, [person])
    /*
        const updateCount = () => {
            //Don't access the state as soon as the state is updated
            //updation to state is asynchronous , we will not get the updated state in the next line after updation state
    
            console.log('count befor', count);
            setcount(20)
            if (count === 20) {
                console.log('count is 20');
            }
            console.log('count after', count);
        }
        */
    //write the logic to be executed in useEffect or store the updated data in a variable and execute the logic based on that
    /*
    const updatedCount=20
    setcount(updateCount);

    if(updateCount===20){
        console.log('count is 20');
    }
    

 */

    const updateAge = () => {
        setage(20)
    }
    const updatePerson = () => {
        setPerson({
            ...person,
            age: 15
        })
    }
    return <div>
        <p>count-{count}</p>
        <button onClick={() => { updateCount() }}>Increase</button>
        <hr />
        <p>Age-{age}</p>
        <button onClick={()=>{updateAge()}}>Increase</button>
        <hr/>
        <p>Person:{person}</p>
        <button onClick={()=>{updatePerson()}}>Update Person</button>
    </div>;
}

export default UseEffectDonts;
