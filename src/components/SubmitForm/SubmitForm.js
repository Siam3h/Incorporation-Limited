import React from 'react'
import Button from '../Button/Button';
import { useState } from 'react';

const SubmitForm = () => {
    
    const [showForm, setShowForm] = useState(false)
    const onClick = () => {
        setShowForm(true)
        alert('Form Submitted')
    }


    return (
        <>
        {showForm ? <SubmitForm /> : null }
        <form className='flex flex-col p-5 m-5 border bg-gray-50'>
            <p className='font-bold'>Your Name</p><input className='mt-5 mb-5 border-4 p-1' type='text' name='Name' />
            <p className='font-bold'>Your Email</p><input className='mt-5 mb-5 border-4 p-1' type='text' name='Email' />
            <p className='font-bold'>Your Message</p><textarea className='mt-5 mb-5 border-4 p-1' rows='5' cols='50' name='Message'>
                Enter Your Message
            </textarea>
            <Button text='Submit' onClick={onClick} width={100} />
        </form>
        </>
    )
}

export default SubmitForm;