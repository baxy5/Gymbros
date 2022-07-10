import React, { useEffect, useState } from 'react'

import Navbar from "../components/Navbar"

import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer, AreaChart } from 'recharts';

const charts = () => {
    const [broProgress, setBroProgress] = useState([])

    const readProgress = () => {
        fetch("/api/read-workout")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setBroProgress(res)
            })
    }

    useEffect(() => {
        readProgress()
    }, [])

    return (
        <div className='flex w-full'>
            <Navbar />
            <div className='flex justify-around items-center w-full'>

            </div>
        </div>
    )
}

export default charts