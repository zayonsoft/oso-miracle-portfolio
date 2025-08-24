import { Link } from "react-router-dom";
import ZayonSoftLogo from "../assets/logo/zayonsoft_white_lemon.png";
export default function PoweredByZayonsoft() {
  const yearDeveloped = 2025;
  const currentYear = new Date().getFullYear();

  function getDeveloped() {
    if (yearDeveloped == currentYear) return `${currentYear}.`;
    else return `${yearDeveloped} - ${currentYear}.`;
  }

  return (
    <div style={{ transition: "0.5s ease" }}>
      <div className="p-1 grid gap-0.5">
        {/* <hr className="bg-gray-500 block outline-none border-none rounded h-[1px]" /> */}
        <p className="flex gap-2 m-auto items-center p-1 text-sm text-gray-400">
          <span>Powered By</span>
          <Link to="http://wa.me/+2348104465980">
            <img
              className="max-w-full w-20 transition ease-in-out opacity-85 duration-900 hover:opacity-50"
              src={ZayonSoftLogo}
              alt="zayonSoft"
            />
          </Link>
          {getDeveloped()}
        </p>
      </div>
    </div>
  );
}
