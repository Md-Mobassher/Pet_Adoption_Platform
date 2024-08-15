"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import assets from "@/assets";

const testimonialData = [
  {
    _id: "1",
    name: "John Smith",
    img: assets.testimonial.test1,
    designation: "Founder of Pet Haven",
    opinion:
      "Petco has revolutionized the pet adoption process. Their platform is user-friendly, and the care they show for each animal is unmatched. I highly recommend Petco to anyone looking to adopt a pet.",
  },
  {
    _id: "2",
    name: "Emily Johnson",
    img: assets.testimonial.test2,
    designation: "Animal Welfare Advocate",
    opinion:
      "I am thoroughly impressed by Petco's dedication to animal welfare. Their commitment to finding the right homes for pets is evident in everything they do. Petco is truly making a difference in the lives of these animals.",
  },
  {
    _id: "3",
    name: "Michael Brown",
    img: assets.testimonial.test3,
    designation: "CEO of Animal Care Co.",
    opinion:
      "Petco's platform makes adopting a pet an easy and rewarding experience. Their team is passionate about animal care, and their efforts to protect and find homes for pets are commendable. I trust Petco and fully support their mission.",
  },
];

const Testimonials = () => {
  return (
    <div className="relative mt-16">
      {/* <Image
        src={assets.testimonial.test4}
        alt={"customer"}
        className="absolute  lg:top-0 md:top-0 lg:left-20 md:left-16 -left-20"
      />
      <Image
        src={assets.testimonial.test5}
        alt={"customer"}
        className="absolute  lg:bottom-5 md:bottom-0 lg:left-0 md:left-10 -left-20"
      />
      <Image
        src={assets.testimonial.test6}
        alt={"customer"}
        className="absolute bottom-3 left-5"
      />
      <Image
        src={assets.testimonial.test7}
        alt={"customer"}
        className="absolute bottom-0 right-5"
      /> */}
      <div className="mt-5 max-w-xl mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {testimonialData?.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className=" max-w-xl mx-auto">
                <div className="flex justify-center items-center mb-5">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name || "customer"}
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <p className="text-center">{testimonial.opinion}</p>
                  <h3 className="text-2xl font-bold mt-2">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-500">
                    {testimonial.designation}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
