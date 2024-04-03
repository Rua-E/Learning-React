import React, { useState } from "react"

// *** EXAMPLE ONE - USING OBJECTS *** //


// function Counter() {
//     const [cart, setCart] = useState({
//         item:"apple", 
//         quantity: 0,
//     });

//     // 1. use a callback to get the previous value
//     // 2. spread out all the preoperties in the previous state
//     // 3. onle change the property that you need to change

// function addApple(){
//     setCart((prevCart)  => ({...prevCart, quantity: prevCart.quantity + 1, }))
// }
// function subtractApple(){
//     setCart((prevCart)  => ({...prevCart, quantity: prevCart.quantity -1, }))
// }

//     // const [counter, setCounter] = useState(0)
//     // function incrementCounter() {
//     //     setCounter((prevCounter) => prevCounter + 1)
//     //     setCounter((prevCounter) => prevCounter + 1)
//     // }
//     // function decrementCounter() {
//     //     setCounter((prevCounter) => prevCounter - 1)
//     //     setCounter((prevCounter) => prevCounter - 1)
//     // }
//     return( 
//     <>
//         <button onClick={subtractApple}>-</button>
//         {cart.quantity}&nbsp;
//         {cart.item}
//         <button onClick={addApple}>+</button>
//     </>
//     )
// }

// export default Counter


// *** EXAMPLE TWO - USING ARRAYS *** //

function Counter () {
    //what you esssentially want to do ["+", "-", "+"]
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prevArr => [...prevArr,"+"])
    }
    function addMinus(){
        setArr(prevArr => [...prevArr,"-"])

    }
    
    return (
        <>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr}
        </>
    )
}

export default Counter;