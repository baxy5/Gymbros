import React, { useEffect, useState } from 'react'

import Navbar from "../components/Navbar"

import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer, AreaChart } from 'recharts';

const charts = () => {
    const [broProgress, setBroProgress] = useState({
        data: []
    })

    const readProgress = () => {
        fetch("/api/read-workout")
            .then((res) => res.json())
            .then((res) => {
                console.log(res[0].data)
                setBroProgress({
                    data: res[0].data
                })
            })
    }

    useEffect(() => {
        readProgress()
    }, [])

    return (
        <div className='flex w-full'>
            <Navbar />
            <div className='flex justify-around items-center w-full'>
                <LineChart width={400} height={400} data={broProgress}>
                    <Line type="monotone" dataKey="duration" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default charts