import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function PortfolioSlider() {

    const works = [
        {
            id:1,
            title:"Interior Design Project in Kilifi",
            image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/Interior.jpg")
        },
        {
            id:2,
            title:"Residential Neighbourhood in Busia",
            image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/planning.jpg")
        },
        {
            id:3,
            title:"Bungalow Project Along Malindi Coastline",
            image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/house.jpg")
        },
        {
            id:4,
            title:"Housing Project in Wundanyi, Taita Taveta",
            image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/house2.jpg")
        },
        {
            id:5,
            title:"3D Model Rendering",
            image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/house12.jpg")
        },
        {
            id:6,
            title:"Housing Project in Karen,Nairobi",
            image: require("/Users/WebDev/Documents/dev/Orphy/src/assets/house21.jpg")
        }
      ]



    return (
        <>
        <div>
            <h2 className='text-center font-extrabold my-2'>Our Portfolio</h2>
        </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {works.map(work => (
                    <SwiperSlide key={work.id}>
                        <h4 className='text-center font-bold my-2'>{work.title}</h4>
                        <div id='work'>
                            <img className='object-fill w-100% px-6  h-96"' src={work.image} alt={work.title} />
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}