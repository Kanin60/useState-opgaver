import { useState } from 'react'

export const Opgave1Hilsen = () => {
    const [name, setName] =useState('')

    return (
        <div>
            <p>Hej {name}</p>
            <input placeholder={"Skriv dit navn her"} value={name} onChange={(event) => setName(event.target.value)} />
        </div>
    )
}
