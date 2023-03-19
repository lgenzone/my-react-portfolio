import React from 'react'

const colors = {
  "Background": "#020100",
  "Text": "#ffffff",
  "Accent": "#8884ff"
};

const Contact = () => {
  return (
    <div method='POST' name='contact' className='w-full h-screen flex justify-center items-center p-4' style={{backgroundColor: colors.Background, margin: 'auto'}}>
        <form action='https://getform.io/f/3c9109b0-d504-43be-abc0-13ac4125a9ed' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline' style={{color: colors.Text, borderBottom: `4px solid ${colors.Accent}`}}>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='name'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='message'></textarea>
            <button className='text-white border-2 rounded-lg hover:bg-[#8884ff] hover:border-[#8884ff] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>




        </form>
    </div>
  )
}

export default Contact
