import React, { useState } from "react"

function Counter() {
    const [cart, setCart] = useState({
        item:"apple", 
        quantity: 0,
    });
    // const [counter, setCounter] = useState(0)
    // function incrementCounter() {
    //     setCounter((prevCounter) => prevCounter + 1)
    //     setCounter((prevCounter) => prevCounter + 1)
    // }
    // function decrementCounter() {
    //     setCounter((prevCounter) => prevCounter - 1)
    //     setCounter((prevCounter) => prevCounter - 1)
    // }
    return( 
    <>
        <button onClick={() => null}>-</button>
        {cart.quantity}
        <button onClick={() => null}>+</button>
    </>
    )
}

export default Counter