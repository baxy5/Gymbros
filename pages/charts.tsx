import React from 'react'

import Navbar from "../components/Navbar"

import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer, AreaChart } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const charts = () => {
    return (
        <div className='flex w-full'>
            <Navbar />
            <div className='flex justify-around items-center w-full'>
                <ResponsiveContainer width={700} height="80%">
                    <LineChart width={500} height={300} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#207567" strokeWidth={2} />
                        <Tooltip />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default charts