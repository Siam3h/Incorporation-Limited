import React from 'react';


const Header = () => {
	const url = 'https://orphyent.com';
    // const btn = document.querySelector("button.mobile-menu-button");
    // const menu = document.querySelector(".mobile-menu");

    // btn.addEventListener("click", () => {
    //     menu.classList.toggle("hidden");
    // })

	return (
<>
{/* <!-- Navbar goes here --> */}
    <nav class="bg-white shadow-lg font-sans">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div>
                        {/* <!-- Website Logo --> */}
                        <a href={url} class="flex items-center py-4 px-2">
                            <span class="font-bold text-black-500 text-lg">Phosics Inc.</span>
                        </a>
                    </div>
                    {/* <!-- Primary Navbar items --> */}
                    <div class="hidden md:flex items-center space-x-1 lg:px-32">
                        <a href={url} class="py-4 px-2 text-black-500 border-b-4 border-gray-500 font-semibold ">Home</a>
                        <a href={url} class="py-4 px-2 text-black-500 font-semibold hover:text-gray-500 transition duration-300">Our Services</a>
                        <a href={url} class="py-4 px-2 text-black-500 font-semibold hover:text-gray-500 transition duration-300">Our Work</a>
                        <a href={url} class="py-4 px-2 text-black-500 font-semibold hover:text-gray-500 transition duration-300">Contact Us</a>
                    </div>
                </div>
            </div>
		</div>
    </nav>
	
</>
	);
};

// const mobileMenu = () => {
// 	const url = 'https://orphyent.com';
// 	return (
// 		<>
		// <div class="hidden mobile-menu">
        //     <ul class="">
        //         <li class="active"><a href={url} class="block text-center text-sm px-2 py-4 text-white bg-gray-500 hover:text-gray-900 font-semibold">Home</a></li>
        //         <li><a href={url} class="block text-center text-sm px-2 py-4 hover:text-gray-900 text-black-500 transition duration-300">Services</a></li>
        //         <li><a href={url} class="block text-center text-sm px-2 py-4 hover:text-gray-900 text-black-500 transition duration-300">About</a></li>
        //         <li><a href={url} class="block text-center text-sm px-2 py-4 hover:text-gray-900 text-black-500 transition duration-300">Contact Us</a></li>
        //     </ul>
        // </div>
// 		</>
// 	);
// };

// const mobileMenuBtn = () => {
// 	const url = 'https://orphyent.com';
// 	return (
// 		<div class="md:hidden flex items-center">
//             <button class="outline-none mobile-menu-button">
//                 <svg class=" w-6 h-6 text-gray-500 hover:text-gray-500 " x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
//                     <path d="M4 6h16M4 12h16M4 18h16"></path>
//                 </svg>
//             </button>
//         </div>
// 	);
// };

export default Header;