import React, { useEffect, useState } from 'react'

function ProgressBar() {

    const [scroll, setScroll] = useState<number>();

    useEffect(() => {
        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener('scroll',onScroll);
    },[]);

    const onScroll = () => {
        const windowScroll = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (windowScroll/height) * 100;
        setScroll(scrolled);
    }

  return (
    <div className='w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px] h-full mb-4'>
        <div className='bg-green-600 transition-all ease-out duration-500' style={{height : `${scroll}%`}} />
    </div>
  )
}

export default ProgressBar