import React, {useState, useEffect} from 'react'

export default function Note() {
    
    const [data, setData] = useState([{}])
    useEffect(() => {
        fetch("/api").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>

        </div>
    )
}