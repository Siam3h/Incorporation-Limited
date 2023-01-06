import React from 'react'

export default function Footer() {

  
  return (
    <>
        <footer className="mt-8 text-center bg-gray-900 text-white leading-relaxed font-sans">
        <div className="container px-6 pt-6">
        <h2 className='text-center text-white font-bold my-6'>Phosics Incorporation</h2>
            <div className="mb-6">
                <p>
                    We are based in Nairobi,Kenya along Koinange Street, I & M towers 4th Floor. We offer quality consultancy services on Physical Planning, Project Management, Architectural Designs, Civil and Structural Engineering.
                </p>
            </div>
        </div>
        <div className="text-center p-4 background-color: rgba(0, 0, 0, 0.2);">
            © 2022 Copyright:
            <a className="text-white" href="https://phosicsInc.com/">Phosics Incorporation</a> 
            <p>Web Built & Designed by -<a className="text-white" href="https://ochenoh.com"> Philbert Siama</a></p>
        </div>
    </footer>
    </>
  )
}
