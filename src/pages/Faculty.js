import { Link } from "react-router-dom";
import img5 from "../images/faculty/bio.jpg";
import img6 from "../images/faculty/chem.jpg";
import img7 from "../images/faculty/maths.jpg";
import img8 from "../images/faculty/phani sir.jpg";
import img9 from "../images/faculty/principal and director.jpg";
import img1 from "../images/faculty/adv1.jpg";
import img2 from "../images/faculty/adv2.jpg";
import img3 from "../images/faculty/adv3.jpg";
import img4 from "../images/faculty/adv4.jpg";
import logo from "../images/logo.png";
const data = [
  {
    image: img9,
    name: "Dr. THOTA LAVANYA",
    position: "Professor & Head of Department",
    department: "Principal",
    about: "18 years of Excellence Experience in Education",
    tags: ["Leadership", "Education", "Management"],
  },
  {
    image: img5,
    name: "Dr. APARAJITA SINGH",
    position: "Professor",
    department: "Biology",
    about: "12 years of Experience in Education",
    tags: ["Biology", "Research", "Teaching"],
  },
  {
    image: img8,
    name: "Dr. K.R.K PHANI KUMAAR",
    position: "Associate Professor",
    department: "Physics",
    about: "14 years of Experience in Education",
    tags: ["Mechanics", "Quantum Physics", "Labs"],
  },
  {
    image: img6,
    name: "Dr. RAMESH ADUSUMALLI",
    position: "Assistant Professor",
    department: "Chemistry",
    about: "12 years of Experience in Education",
    tags: ["Organic Chemistry", "Teaching", "Research"],
  },
  {
    image: img7,
    name: "Dr. RUDHRA BALAKRISHNA",
    position: "Professor",
    department: "Mathematics",
    about: "14 years of Experience in Education",
    tags: ["Algebra", "Calculus", "Statistics"],
  },
  {
    image: img1,
    name: "SUDHEER KUMARPETETI",
    position: "ADVISOR",
    about: "AEROSPACE ENGINEERING FROM IIT BOMBAY",
  },
  {
    image: img2,
    name: "D.SHRAVAN KUMAR",
    position: "ADVISOR",
    about: "ELECTRONICS & VLSI DESIGN AT IIT BOMBAY",
  },
  {
    image: img3,
    name: "Dr. PRANAY KUMAR",
    position: "ADVISOR",
    about: "M CH SURGICAL",
  },
  {
    image: img4,
    name: "N.MYTHILI",
    position: "ADVISOR",
    about: "PSYCHO THERAPIST",
  },
];

export default function Faculty() {
  return (
    <>
      <nav className="px-8 py-1 border-b-[1px] border-slate-300">
        <div>
          <Link to={"/"}>
            <img className="w-20 " src={logo} alt="" />
          </Link>
        </div>
      </nav>
      <div className="px-4 py-16 ">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Faculty</h2>
          <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Meet our distinguished faculty members who bring years of expertise,
            research excellence, and industry experience to shape the next
            generation of leaders.
          </p>
        </div>

        <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {data.map((faculty, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 text-center cursor-pointer bg-white hover:scale-105 ease-in-out duration-300 border-[1px] border-gray-300 rounded-xl"
            >
              <div className="relative mb-4">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="mx-auto rounded-full w-28 h-28"
                />
                <span className="absolute w-4 h-4 bg-green-500 border-2 border-white rounded-full bottom-1 right-1"></span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {faculty.name}
              </h3>
              <p className="mt-3 text-sm font-semibold text-blue-600">
                {faculty.position}
              </p>
              <p className="mt-3 text-sm text-gray-500">{faculty.department}</p>

              <p className="mt-4 text-sm font-semibold text-gray-600">
                {faculty.about.toUpperCase()}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {faculty.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl px-6 py-10 mx-auto mt-16 text-center bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800">
            Join Our Academic Community
          </h3>
          <p className="mt-2 text-gray-600">
            Interested in collaborating with our faculty or learning more about
            our programs?
          </p>
          <button className="px-6 py-2 mt-4 text-sm font-semibold text-gray-600">
            Email : anshrutharesonanceacademy@gmail.com
          </button>
        </div>
      </div>
    </>
  );
}
