import React from 'react'

function Introducation() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='h-[120px] border-r-[1px] mt-[30px]'/>
      <div className='w-[5px] h-[5px] bg-green-600 rounded-full'/>
      <h2 className='mt-5 text-black font-medium text-[13px] tracking-widest'>HELLO! MY NAME IS</h2>
      <h2 className='text-[70px] font-bold text-black tracking-widest mt-5 text-center'>NAYAN <br></br>WADEKAR</h2>
      <img src="/avatar.jpg/" className='w-[160px] h-[160px] bg-gray-200 p-5 rounded-full mt-7' />
    </div>
  )
}

export default Introducation
