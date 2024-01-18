import React from 'react'

const Profile = () => {
  return (
 <>
<div className=' align-middle flex justify-center mt-44'>
    <div className='h-96 w-96 bg-slate-100 rounded-lg  justify-center border-slate-600 border-4 overflow-hidden'>
        <div className='h-32 w-96 bg-blue-400 align-middle flex justify-center pt-20'>
            <div className='h-24 w-24 rounded-full bg-red-300 '>
            <h1 className='align-middle flex justify-center mt-28'>MCin-Tyre</h1>
            <h2 className='align-middle flex justify-center mt-2'>London</h2>
            </div>  
        </div>
        
        <div class=" bg-slate-200 h-24 w-96 justify-center mt-40 border-t-2 border-black flex gap-14">
            <div className='mt-5'>
                <h1 className='ml-8'>80K</h1>
                <h1 className=' font-extralight'>FOLLOWERS</h1>
            </div>
            <div className='mt-5'>
                <h1>803K</h1>
                <h1 className='font-extralight'>LIKES</h1>
            </div>
            <div className='mt-5'>
                <h1 className=' ml-4'>1.4K</h1>
                <h1 className=' font-extralight'>PHOTOS</h1>
            </div>
        </div>
    </div>

</div>
 
 </>
  )
}

export default Profile