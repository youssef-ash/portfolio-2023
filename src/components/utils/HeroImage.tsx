"use client";

import Image from "next/image";
import Avatar from "/public/images/avatar.png";

export default function HeroImage() {
  return (
    <Image
      src={Avatar}
      alt="Avatar of Youssef"
      // width={200}
      // height={200}
      fill={true}
      sizes=""
      draggable={false}
      // onLoadingComplete={() => console.log("Loaded")}
      quality={100}
      priority
    />
  );
}
