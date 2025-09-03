"use client";
import { useEffect, useRef, useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = [
  {
    id: 1,
    title: "Pristine Perspectives",
    subtitle: "DETAILING",
    img: "/img1.jpg",
  },
  {
    id: 2,
    title: "Tar and Bug Removal",
    subtitle: "SAFETY",
    img: "/img2.jpg",
  },
  {
    id: 3,
    title: "Paint Application",
    subtitle: "GENRAL",
    img: "/img3.jpg",
  },
  {
    id: 4,
    title: "Leather Conditioning",
    subtitle: "CLEAR COAT",
    img: "/img5.jpg",
  },
  {
    id: 5,
    title: "Gleaming Impressions",
    subtitle: "GENRAL",
    img: "/img6.jpg",
  },
  {
    id: 6,
    title: "Luminosity Unleashed",
    subtitle: "CAR WASH",
    img: "/img7.jpg",
  },
];

export default function CircleGallery() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div>
    <Swiper
      modules={[ Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      // pagination={{ clickable: true }}
      // centeredSlides={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
    >
        {items.map((item, index) => (
      <SwiperSlide>
            <div  key={item.id} data-index={index} className="carousel-item relative snap-center flex-shrink-0 w-60 h-60 sm:w-96 sm:h-96 rounded-full overflow-hidden">
            <img src={item.img} alt="Slide 1" className="object-cover w-full h-full"  />
            {activeIndex === index && (
            <div className="absolute m-10 inset-0 flex flex-col items-center justify-center bg-white/80 text-center text-black font-semibold rounded-full">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-red-500">{item.subtitle}</p>
              <div className="mt-2 text-xl">↗</div>
            </div>
          )}
          </div>
      </SwiperSlide>
            ))}
    </Swiper>
    
    </div>
  );
}
