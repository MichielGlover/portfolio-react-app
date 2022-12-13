import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d6c890a5-1646-4922-a599-b4e91671002c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Vul het onderstaande formulier in of stuur mij een e-mail - michielglover@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-400 hover:border-yelow-400 px-4 py-3 my-8 mx-auto flex items items-center'>Laten we samenwerken</button>
        </form>
    </div>
  )
}

export default Contact