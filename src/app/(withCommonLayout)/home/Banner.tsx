"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const bannerData = [
  {
    _id: "1",
    title: "Find Your Perfect Pet",
    description:
      "Join thousands of happy pet owners who found their perfect furry friend through our platform. Browse, connect, and bring home a pet today!",
    img: assets.banner.b1,
    ctaText: "Browse Pets",
    ctaLink: "/pets",
  },
  {
    _id: "2",
    title: "Save a Life, Adopt Today",
    description:
      "Every adoption saves a life. Explore our database of loving animals waiting for a forever home and give them the love they deserve.",
    img: assets.banner.b2,
    ctaText: "Start Your Journey",
    ctaLink: "/pets",
  },
  {
    _id: "3",
    title: "Become a Volunteer",
    description:
      "Join our community of volunteers who are passionate about making a difference. Your time and effort can help save countless animals.",
    img: assets.banner.b3,
    ctaText: "Register",
    ctaLink: "/register",
  },
];

export default function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {bannerData?.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="relative h-[560px] w-full">
              <Image
                src={banner.img}
                alt={banner.title || "banner"}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 flex justify-start items-center text-center bg-black bg-opacity-60 z-10  ">
                <div className=" container mx-auto lg:px-8 md:px-6  px-4">
                  <div className="max-w-xl">
                    <h1 className="lg:text-5xl text-4xl font-bold text-white mb-4 lg:text-start md:text-start text-center">
                      {banner.title}
                    </h1>
                    <p className="text-lg text-white my-5  lg:text-start md:text-start text-center">
                      {banner.description}
                    </p>
                    <div className="lg:mt-16 md:mt-14 mt-12 lg:text-start md:text-start text-center">
                      <Link
                        href={banner.ctaLink}
                        className="px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition inline"
                      >
                        {banner.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
