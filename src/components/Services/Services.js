import React from 'react';
import Button from '../Button/Button';
import { useState } from 'react';
import { ContactUs } from '../SubmitForm/ContactUs';


export default function Services() {

    const services = [
    {
        id:1,
        title:"Architectural Design",
        image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/arc.jpg"),
        description:"We strive to offer clients a unique view of Architectural design process with fresh ideas and playful characteristics.We emphasize sustainable building and site development by incorporating bio-climatic design and advanced mechanical systems for maximum energy efficiency."
    },
    {
        id:2,
        title:"Physical Planning",
        image:require("/Users/WebDev/Documents/dev/Orphy/src/assets/pla.jpg"),
        description:"Our Physical Planning services focus on developing healthy, safe environment where people can thrive,communities can evolve and the environment can flourish. We identify complex problems, key risks, issues and we suggest solutions for all kind of Urban, Sub-urban, industrial and green areas."
    },
    {
        id:3,
        title:"Civil and Structural Engineering",
        image:require("/Users/WebDev/Documents/dev/Orphy/src/assets/civil.jpg"),
        description:"We offer sophisticated,streamlined operations that help clients and businesses do their best. Our Architects, Physical Planners,Project Managers and Civil Engineers work side by side to find breakthrough approaches that balance budget schedule,safety and quality."
    },
    {
        id:4,
        title:"Project Planning and Management",
        image:require("/Users/WebDev/Documents/dev/Orphy/src/assets/project.jpg"),
        description:"We offer project management solutions that helps teams plan, organize and execute their work efficiently and effectively. With features like task assignment, deadlines and progress tracking, we ensure that projects are completed on time and stay within the budget."
    },
  ];


  const [showForm, setShowForm] = useState(false)
  const onClick = () => setShowForm(true)

  return (
    <>
    <div>
        <h2 className='text-center font-bold  mt-5 leading-relaxed'>Our Services</h2>
    </div>
    {services.map(service => (
        <div className='flex flex-col p-5  bg-gray-50 my-5 mx-2 font-sans leading-relaxed' key={services.id}>
                <h3 className='text-center font-bold  mt-4 p-2'>{service.title}</h3>
                <img src={service.image} alt={service.title}/>
                <p className='mt-4 font-sans'>{service.description}</p>
                { showForm ? <ContactUs /> : null }
        </div>
    ))}
    <p className='p-0 mt-5 mb-6 text-center'><Button onClick={onClick} text='Contact Us' width={100}/></p>
    </>
  )
}
