import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email</p>
            </div>
            <input type="text" placeholder='Name' name='name'/>
            <input className="my-4" type="text" placeholder='Email' name='name'/>
        </form>
    </div>
  )
}

export default Contact
