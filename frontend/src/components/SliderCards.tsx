'use client'
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function SliderCards() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/productDetail/1`}>
            <Card />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}