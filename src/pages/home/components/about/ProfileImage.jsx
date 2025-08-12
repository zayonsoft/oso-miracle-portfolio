import ProfileImagePic from "../../styles/about/profile_image.svg";
import ProfileBottom from "./ProfileBottom";
import ProfilePicBlueDesign from "../../styles/about/about_under_image_line.svg";
export default function ProfileImage() {
  return (
    <section className="relative col-span-2 max-[661px]:pb-[110px]">
      {/* Div That Overlays everything and prevents the images from being dragable individually */}
      <div className="absolute left-0 right-0 top-0 bottom-0 z-20"></div>
      {/* background box */}
      <div className="pt-24">
        {/* Upper Box */}
        <div className="relative m-auto w-52 h-44 bg-[#000000] rounded-tr-lg rounded-tl-lg z-10">
          <div className="grid gap-1.5 absolute top-[-60%]">
            <img className="" src={ProfileImagePic} alt="" />
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
            <img src={ProfilePicBlueDesign} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
