import ProfileImagePic from "../../styles/about/profile_image.svg";
import ProfileBottom from "./ProfileBottom";
import ProfilePicBlueDesign from "../../styles/about/about_under_image_line.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProfileImage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative col-span-2 max-[661px]:pb-[110px]"
    >
      {/* background box */}
      <div className="pt-24">
        {/* Upper Box */}
        <div className="relative m-auto w-52 h-44 bg-[#000000] rounded-tr-lg rounded-tl-lg z-10">
          <div className="grid gap-1.5 absolute top-[-60%]">
            <img
              className="select-none"
              src={ProfileImagePic}
              alt="Profile Picture"
              draggable={false}
            />
            <div className="grid gap-1 font-montserrat text-center font-bold">
              <p className="text-[#448EF9] text-lg">MIRACLE JOHN</p>
              <p className="text-white font-light text-[12px]">UI Designer</p>
              <p className="text-white font-light text-[12px]">UX Designer</p>
            </div>
          </div>
        </div>
        <div className="relative w-52 m-auto">
          <ProfileBottom />
          <div className="absolute top-2.5">
            <img
              className="select-none"
              src={ProfilePicBlueDesign}
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
