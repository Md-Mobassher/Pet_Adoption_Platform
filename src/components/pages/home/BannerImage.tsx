"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bannerImg from "@/assets/images/banner.jpg";
export default function BannerImage() {
  return (
    <motion.div
      initial={{ x: -100, y: -30 }}
      animate={{ y: 0, x: 0 }}
      transition={{ ease: "easeIn", duration: 2 }}
      className="lg:w-3/5 md:w-full flex lg:justify-end"
    >
      <Image
        alt="banner image"
        className="object-cover rounded-xl flex mb-5"
        src={bannerImg}
        width={750}
        height={750}
      />
    </motion.div>
  );
}
