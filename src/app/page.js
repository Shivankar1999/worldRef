'use client'
import { useState } from 'react';
import { Spin } from 'antd';
import './globals.css';
export default function Home() {
  const [showLogo, setShowLogo] = useState(false);

  return (
    <>
  <div
      className="relative h-screen w-screen"
      onMouseOver={() => setShowLogo(true)}
      onMouseOut={() => setShowLogo(false)}
    >
      <img src="/imh.jpg" className="absolute h-full w-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
      <div className="absolute top-20 left-0 right-0 p-4 text-white text-center z-10">
        <h1 className="text-4xl font-bold word-wrap leading-tight text-shadow first-word-different">
        <Spin /> &nbsp;Fueling  innovation
        </h1>
        <h1 className="text-4xl font-bold word-wrap leading-tight text-shadow first-word-different">
          &
        </h1>
        <h1 className="text-4xl font-bold word-wrap leading-tight text-shadow first-word-different">
          shaping    tomorrow
        </h1>
        <h1 className="mt-5 text-4xl font-bold word-wrap leading-tight text-shadow first-word-different">
          through software solutions to the firm,   fueled by passion and dedication. &nbsp;<Spin  />
        </h1>
      </div>
      {showLogo && (
        <div className="absolute inset-0 flex items-end justify-center transition-opacity duration-500">
        <h2 className='text-white'>Shubham Gaur : Product Developer </h2>&nbsp;&nbsp;
          <img src="https://worldref.co/wp-content/uploads/2023/09/WorldRef-Logo_Home-Page.svg" alt="Logo" className="w-20 " />
        </div>
      )}
    </div>



     
    </>
  )
}
