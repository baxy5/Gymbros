import React from 'react'

// Workout Duration: minute --> (Activity chart)
// Workout Type: cardio, body build etc..
// Calorie Consumption --> (Calorie chart)
// Weight: kg --> (Weight chart)


const WorkoutInput = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center w-full'>
      <h1 className='font-bold text-4xl p-2 mb-5'>Today's workout</h1>
      <form className='flex flex-col w-72'>
        <label className='my-2 font-bold text-lg'>Duration</label>
        <input type="text" placeholder='Minute' className='p-1 border-solid border-2 border-color-six' />
        <label className='my-2 font-bold text-lg'>Type</label>
        <input type="text" placeholder='Cardio, Yoga, Aerobic, Body building...' className='p-1 border-solid border-2 border-color-six' />
        <label className='my-2 font-bold text-lg'>Calorie</label>
        <input type="text" placeholder='Give me your calorie consumption' className='p-1 border-solid border-2 border-color-six' />
        <label className='my-2 font-bold text-lg'>Weight</label>
        <input type="text" placeholder='Kg' className='p-1 border-solid border-2 border-color-six' />
        <button type='submit' className='p-1 my-7 border-solid border-2 border-color-six'>Submit</button>
      </form>
    </div>
  )
}

export default WorkoutInput