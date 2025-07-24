import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import Banner from "../images/Banner.jpg";
import { RiGalleryFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import mobileImg from "../images/imgbg.jpg";

export default function HeroSection({
  scrollToElement,
  tesimonialref,
  contactref,
}) {
  const [istoogle, setistoogle] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex items-center justify-between w-[100vw] md:px-10 lg:px-6 px-3.5">
          <div>
            <img className="w-24 " src={logo} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <CiMenuFries
              size={10}
              onClick={() => {
                setistoogle(true);
              }}
              color="black"
              className="block w-10 h-10 p-2 bg-white rounded-full cursor-pointer md:hidden"
            />

            <nav className="hidden p-5 md:block">
              <ul className="flex items-center gap-5 text-sm font-semibold text-black">
                {[
                  { label: "Home" },
                  { label: "Testimonals", ref: tesimonialref },
                  { label: "ContactUs", ref: contactref },
                  { label: "Gallery", link: "/gallery" },
                  { label: "Faculty", link: "/faculty" },
                ].map((item) => (
                  <>
                    <li
                      key={item.label}
                      className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      onClick={() => {
                        if (item.ref) scrollToElement(item.ref);
                      }}
                    >
                      {item.link ? (
                        <Link to={item.link}>{item.label}</Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  </>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={Banner}
          alt=""
          className="hidden md:block"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <img
          src={mobileImg}
          alt=""
          className="block border border-black md:hidden "
          style={{ height: "76vh", objectFit: "cover",width : "100%" }}
        />

      
      </div>

      {istoogle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <div className="bg-white w-[86vw] md:hidden p-5 rounded-md relative">
            <button
              onClick={() => setistoogle(false)}
              className="absolute p-1 transition bg-white rounded-full shadow cursor-pointer top-4 right-4 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <RxCross2 size={23} color="black" />
            </button>
            <ul className="mt-2 space-y-4">
              <li
                className="flex items-center px-2 py-3 transition duration-500 ease-in-out rounded cursor-pointer gap-7 hover:bg-gray-200 "
                onClick={() => setistoogle(false)}
              >
                <FaHome size={22} color="black" />
                <h1 className="font-semibold">Home</h1>
              </li>
              <li
                onClick={() => {
                  setistoogle(false);
                  scrollToElement(tesimonialref);
                }}
                className="flex items-center px-2 py-3 transition duration-500 ease-in-out rounded cursor-pointer gap-7 hover:bg-gray-200 "
              >
                <MdFeedback size={22} color="black" />
                <h1 className="font-semibold">Testimonials</h1>
              </li>
              <li
                onClick={() => {
                  setistoogle(false);
                  scrollToElement(contactref);
                }}
                className="flex items-center px-2 py-3 transition duration-500 ease-in-out rounded cursor-pointer gap-7 hover:bg-gray-200 "
              >
                <FaPhone size={22} color="black" />
                <h1 className="font-semibold">Contact Us</h1>
              </li>
              <li>
                <Link
                  to={"/gallery"}
                  className="flex items-center px-2 py-3 transition duration-500 ease-in-out rounded cursor-pointer gap-7 hover:bg-gray-200 "
                >
                  <RiGalleryFill size={22} color="black" />
                  <h1 className="font-semibold">Gallery</h1>
                </Link>
              </li>
              <li>
                <Link
                  to={"/faculty"}
                  className="flex items-center px-2 py-3 transition duration-500 ease-in-out rounded cursor-pointer gap-7 hover:bg-gray-200 "
                >
                  <IoPeopleSharp size={22} color="black" />
                  <h1 className="font-semibold">Faculty</h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
