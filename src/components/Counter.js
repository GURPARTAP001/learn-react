import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handlelClick = (e) => {
        e.stopPropagation();
        // setCount(count + 1);//in this type of the syntex the state only get updated one time on single click    thou we have writen the setcount two times
        // setCount(count + 1);
        setCount(count => count + 1);//prefer this syntex to update the state as this 
        setCount(count => count + 1);//as we have writen this two time so the state will get updated two time  on a single click

        console.log(count)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={handlelClick}>Increment</button>

        </>
    )
}

export default Counter;