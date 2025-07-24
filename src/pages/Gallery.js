import Footer from "../components/Footer";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export default function Gallery() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

  return (
    <>
      <nav className="px-8 py-1 border-b-[1px] border-slate-300">
        <div>
          <Link to={"/"}>
            <img className="w-20 " src={logo} alt="" />
          </Link>
        </div>
      </nav>

      <div className="my-10 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore Our College Gallery
        </h2>
        <p className="mt-2 text-gray-600">
          Take a glimpse into the vibrant life and memorable moments captured
          from around our campus.
        </p>
        <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded"></div>
      </div>

      <div className="gap-4 p-4 my-6 columns-1 sm:columns-2 md:columns-3">
        {images.map((i, id) => (
          <img
            key={id}
            src={i}
            alt={id}
            className="object-cover w-full mb-4 transition-transform duration-300 rounded-lg cursor-pointer break-inside-avoid hover:scale-105"
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
