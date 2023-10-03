import React, { FC, useState } from 'react'
 

export const Clock = (): JSX.Element => {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)

    return (
        <div className='clockContainer'>
            {time}
        </div>
    )
}