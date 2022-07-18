import React, { useEffect, useState } from 'react'

import Navbar from "../components/Navbar"

import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

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

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 300, pv: 3400, amt: 3400 }, { name: 'Page C', uv: 600, pv: 4400, amt: 1400 }];

    return (
        <div className='flex w-full'>
            <Navbar />
            <div className='flex justify-around items-center w-full'>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}

export default charts