import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
export default function Footer() {
  return (
    <>
       <footer className="bg-[#0d1117] px-6 py-10 mt-28 text-slate-300">
        <div className="flex flex-col items-center justify-between mx-auto text-center max-w-7xl md:flex-row gap-y-10 gap-x-24 md:text-left">
          <div className="space-y-6">
            <img src={logo} alt="Logo" className="w-40 mx-auto md:mx-0" />
            <div className="flex items-center gap-5 ">
              <h1 className="font-semibold text-[#99a1af]">Follow Us :</h1>
              <div className="flex gap-4">
                <Link
                  to={
                    "https://www.instagram.com/anshrutharesonance/?igsh=MWw4aWl6ZmkxNmpjZw%3D%3D%20(%40anshrutharesonance)#"
                  }
                >
                  <FaInstagram
                    size={24}
                    className="cursor-pointer "
                    color="#99a1af"
                  />
                </Link>
                <Link
                  to={
                    "https://www.facebook.com/share/16iQNh3nAr/?mibextid=wwXIfr"
                  }
                >
                  <CiFacebook
                    size={24}
                    className="cursor-pointer "
                    color="#99a1af"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-md space-y-4 text-[#99a1af]">
            <p>
              <strong>Anshrutha Resonance Academy</strong>
              <br />
              Anshrutha Resonance Academy H.No: 4-172/1/A/1, Manjulapur, Nirmal,
              Telangana, India
            </p>
            <p>
              <strong>Phone:</strong> 📱 8328662156 And 9492700607
              <br />
            </p>
            <p className="text-sm font-semibold">Avaliable 24/7</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:corporate@aesl.in"
                className="text-blue-400 hover:underline"
              >
                anshrutharesonanceacademy@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
