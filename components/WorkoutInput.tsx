import React from 'react'

import input from "../types/input"

const createActivity = async (e: any) => {
  const activityData: input = {
    duration: e.target.duration.value,
    type: e.target.type.value,
    calorie: e.target.calorie.value,
    weight: e.target.weight.value
  }

  const response = await fetch("/api/create-workout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activityData)
  })

  console.log(response)
}

const WorkoutInput = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center w-full'>
      <h1 className='font-bold text-4xl p-2 mb-5'>Today's progress</h1>
      <form className='flex flex-col w-72 p-10 border-2 border-color-seven rounded' onSubmit={createActivity}>
        <label className='my-2 font-bold text-lg'>Duration</label>
        <input name="duration" required type="text" placeholder='Workout session (minute)' className='p-1 rounded border-solid border-2 border-color-six' />
        <label className='my-2 font-bold text-lg'>Type</label>
        <input name="type" required type="text" placeholder='Cardio, Yoga, Aerobic, Body building...' className='p-1 rounded border-solid border-2 border-color-six' />
        <label className='my-2 font-bold text-lg'>Calorie</label>
        <input name="calorie" required type="text" placeholder='Calorie consumption today' className='p-1 rounded border-solid border-2 border-color-six' />
        <label className='my-2 font-bold text-lg'>Weight</label>
        <input name="weight" required type="text" placeholder='Your actual weight (kg)' className='p-1 rounded border-solid border-2 border-color-six' />
        <button type='submit' className='p-1 my-7 border-solid border-2 rounded border-color-six transition-all duration-150 ease-in-out hover:bg-color-six'>Submit</button>
      </form>
    </div>
  )
}

export default WorkoutInput