import { useState } from 'react'

export const Opgave2Count = () => {
    const [count, setCount] = useState(0)

    function updateCount(){
        setCount(count + 1)
    }
    return(
        <div>
            <p>Du har klikket på knappen {count} antal gange.</p>
            <button onClick={() => updateCount()}>Klik her</button>
        </div>
    )
}