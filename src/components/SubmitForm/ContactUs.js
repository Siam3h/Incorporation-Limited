import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../Button/Button';


export const ContactUs = () => {
const form = useRef();

const [isVisible, setIsVisible] = useState(true);

const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm(
  'service_b59g1tl',
  'template_fa1m8mh',
  form.current, 
  'LVLNGvjfmYylMQ0uI'
    )
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  e.target.reset();
};


return (
<div style={{ display: isVisible ? "block" : "none" }}>
<form ref={form} onSubmit={sendEmail} className='flex flex-col p-5 m-5 border font-sans bg-gray-50'>
  <label className='font-bold'>Name</label>
  <input input className='mt-5 mb-5 border-4 p-1' type="text" name="user_name"  required/>
  <label className='font-bold'>Email</label>
  <input input className='mt-5 mb-5 border-4 p-1' type="email" name="user_email" required/>
  <label className='font-bold'>Phone Number</label>
  <input input className='mt-5 mb-5 border-4 p-1' type="text" name="user_number"  required/>
  <label className='font-bold'>Message</label>
  <textarea className='mt-5 mb-5 border-4 p-1' name="message" />
  <p className='p-0 mt-5 text-center'><Button onClick={() => setIsVisible(false)} text='Submit' type='submit' width={100}/></p>
</form>
</div>
);
};
