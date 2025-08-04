import ProfileImagePic from "../../styles/about/profile_image.png";
import ProfileBottom from "./ProfileBottom";
export default function ProfileImage() {
  return (
    <section className="relative col-span-2 max-[661px]:pb-[110px]">
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
        </div>
      </div>
    </section>
  );
}
