import React, { useId, useRef, useState } from "react";
import { HeroSection } from "../components";
import { FaPlay } from "react-icons/fa";
import adv1 from "../images/adv1.jpg";
import adv2 from "../images/adv2.jpg";
import adv3 from "../images/adv3.jpg";
import adv4 from "../images/adv4.jpg";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FireBase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import "../App.css";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Banner from "../components/Banner";
export default function Home() {
  const data = [
    {
      title: "Exclusive courses",
      list: [
        "We offer specialized IIT-JEE (MPC) courses focusing on MPC stream to prepare you thoroughly for the exam.",
        "Our NEET (BiPC) course is designed exclusively to help you crack medical entrance exams with confidence.",
      ],
    },
    {
      title: "Foundation Courses (Classes 6th to 10th)",
      list: [
        "IIT Foundation courses build strong basics for aspiring engineers from classes 6th to 10th.",
        "NEET Foundation courses prepare young learners with the fundamentals required for medical entrance exams.",
      ],
    },
    {
      title: "Crash Courses",
      list: [
        "EAPCET Crash Course helps students quickly revise and master key concepts for the engineering entrance.",
        "NEET Crash Course (Special Program) is an intensive course designed to boost your preparation in a short time.",
      ],
    },
    {
      title: "Long-Term Preparation Program",
      list: [
        "Our “Super 30” program is a comprehensive, long-term NEET preparation course aimed at guaranteed success.",
      ],
    },
  ];

  const adv = [
    {
      tittle: "📘 Expert Faculty",
      list: [
        "Highly qualified and experienced teachers in each subject",
        "Passionate educators focused on individual student growth",
        "Regular training to stay updated with modern teaching methods",
      ],
    },
    {
      tittle: "🧠 Concept-Focused Learning",
      list: [
        "Emphasis on deep understanding of core concepts",
        "Application-based teaching to connect theory with real-world use",
        "Doubt-clearing sessions and conceptual revision support",
      ],
    },
    {
      tittle: "🎯 Competitive Edge",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Integrated coaching for IIT-JEE, NEET, EAPCET alongside board syllabus",
        "Expert-led test series and strategy sessions for competitive exams",
        "Timely coverage of syllabus to allow ample revision time",
      ],
    },
    {
      tittle: "🧪 Practical & Interactive Sessions",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Hands-on lab experiments and activity-based learning",
        "Real-life problem-solving in classroom discussions",
        "Regular quizzes, projects, and student presentations",
      ],
    },
    {
      tittle: "📊 Performance Tracking",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Weekly tests and monthly progress reports shared with parents",
        "One-on-one mentoring and academic counseling sessions",
        "Personalized improvement plans based on assessment data",
      ],
    },
    {
      tittle: "🏠 Safe & Supportive Hostel",
      image:
        "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/adv2-home.png",
      list: [
        "Hygienic, secure, and disciplined residential facilities",
        "Daily study hours with faculty supervision and doubt help",
        "Recreational activities for balanced mental and emotional development",
      ],
    },
  ];

  const id = useId();

  const notify1 = () => toast("we will reach out soon...");

  const [userdata, setuserdata] = useState({
    Name: "",
    Email: "",
    strem: "",
    class: "",
    timestamp : new Date()
  });

  const scrollToElement = async (element) => {
    try {
      element.current.scrollIntoView();
    } catch (error) {
      console.log(error);
    }
  };

  const save = async () => {
    try {
      await setDoc(doc(db, "USERS", id), userdata);
      notify1();
    } catch (error) {
      console.log(error);
    }
  };

  const tesimonialref = useRef();
  const coursesref = useRef();
  const contactref = useRef();

  const advisors = [adv1, adv2, adv3, adv4];

  const [watchVideo, setwatchVideo] = useState(false);

  const testimonials = [
    "The EAPCET coaching here is excellent. The short-cuts taught by the faculty helped me solve questions faster in the exam. Daily practice papers and mock tests boosted my confidence",
    "What I love most is how focused and disciplined the classroom sessions are. Teachers explain everything clearly and the smart panels make learning easier and more interactive.",
    "The campus is calm and fully air-conditioned, which helps us focus during study hours. Our hostel is clean, food is good, and the warden ensures everything is safe and organized.",
    "Anshrutha’s daily and weekly test schedules kept me on track. I always knew where I stood, and that helped me prepare better for EAPCET.",
    "The mentoring sessions every week are so helpful. They don’t just focus on academics but also help with time management and exam strategy. Plus, doubt-clearing sessions are held regularly.",
    "The hostel life is really well-managed. From hygiene to discipline, everything is taken care of. We also have peaceful night study sessions supervised by faculty",
  ];

  return (
    <div className="overflow-clip">
      {watchVideo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
          <button className="absolute text-white transition top-4 right-4 hover:text-gray-300">
            <RxCross2
              size={30}
              onClick={() => {
                setwatchVideo(false);
              }}
            />
          </button>
          <iframe width="700" height="415" src="https://www.youtube.com/embed/5_h53tgZFFY?si=AiT3SNAavQD_TFwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      ) : null}

      <ToastContainer progressClassName="toast-progress" />

      <HeroSection
        scrollToElement={scrollToElement}
        tesimonialref={tesimonialref}
        coursesref={coursesref}
        contactref={contactref}
      />
      <div className="flex flex-col items-center justify-center gap-20 md:items-start md:flex-row my-28 px-7">
        <div>
          <img
            src="https://www.tapasyaedu.com/assets/img/about/about_2.png"
            alt=""
            className="max-w-sm px-5 md:max-w-md"
          />
        </div>
        <div className="max-w-xl space-y-8">
          <h1 className="text-lg font-semibold">Anshrutha Resonance Academy</h1>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Setting You up For Success
          </h2>
          <div className="w-20 h-1 mt-2 bg-blue-600 rounded"></div>
      
          <p>
            Anshrutha Resonance Academy an exclusive Coaching for
            future aspirants who see themselves as success milestones.
          </p>
          <p>
              We specialize in providing expert guidance for IIT-JEE and NEET, combining rigorous academic training with personalized mentoring to help students achieve their dream careers in engineering and medicine.
          </p>
          <div className="flex items-center gap-5 justify-evenly">
            {/* <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">15000+</h1>
              <p className="text-sm font-bold">Students</p>
            </div> */}
            {/* <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">23+</h1>
              <p className="text-sm font-bold">Branches</p>
            </div> */}
            {/* <div className="space-y-4">
              <h1 className="text-[#293c73] font-bold text-xl">600+</h1>
              <p className="text-sm font-bold">Faculty</p>
            </div> */}
          </div>
          <div>
            <button
              onClick={() => {
                setwatchVideo(true);
              }}
              className="border-blackhover:border-blue-500 border-[1px] hover:bg-blue-500 ease-in-out duration-700 hover:text-white flex items-center justify-center gap-4 text-sm p-4 w-full font-bold  rounded-lg"
            >
              <FaPlay size={24} />
              <h1 className="">Watch Intro</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#e0f5fe] w-full p-7 my-20">
        <div>
          <h1 className="pt-10 text-[#060f3f]  text-center md:text-2xl font-bold">
            Popular Courses
          </h1>
          <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-10 md:flex-row md:flex-nowrap md:items-stretch">
          {data.map((itm, idx) => (
            <div
              key={idx}
              className="flex flex-col duration-500 ease-in-out bg-white rounded-lg shadow-xl cursor-pointer hover:scale-105 w-80"
              style={{ minHeight: "350px" }}
            >
              <div className="bg-[#00b0f5] p-3 rounded-t-lg text-lg text-center font-bold text-white">
                <h1>{itm.title}</h1>
              </div>
              <ul className="flex-grow space-y-3 p-7">
                {itm.list.map((i, index) => (
                  <li key={index} className="font-semibold list-disc">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="my-20">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-3xl ">
            Advisors
          </h1>
          <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 my-10 md:flex-row md:justify-evenly ">
          {advisors.map((_, i) => {
            return (
              <div key={i}>
                <img
                  src={_}
                  alt={_}
                  className="w-64 duration-300 cursor-pointer rounded-xl hover:ease-in-out hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#e0f5fe] w-full p-7 my-20">
        <div className="space-y-3">
          <h1 className="pt-10 text-3xl font-bold text-center text-gray-900 md:text-4xl ">
            Anshrutha Advantage
          </h1>
          <p className="text-[#159fdc] text-center text-lg md:text-xl font-semibold">
            Stay ahead with all-round performance in your chosen stream
          </p>
          <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded"></div>
        </div>
        <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-x-3 place-items-center gap-y-7">
          {adv.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="bg-white p-5 border-[1px] border-gray-300 max-w-sm rounded-lg space-y-3 cursor-pointer hover:scale-105 duration-500 ease-in-out">
                  <div className="flex items-center gap-5">
                    <h1 className="text-lg text-[#060f3f] font-semibold pl-5">
                      {i.tittle}
                    </h1>
                  </div>
                  <ul className="pl-10 space-y-2">
                    {i.list.map((i) => {
                      return (
                        <li className="text-sm text-gray-700 list-disc">{i}</li>
                      );
                    })}
                  </ul>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div
        ref={tesimonialref}
        className="px-4 py-16 bg-white md:px-10 lg:px-20"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Students Say
          </h2>
          <p className="max-w-md mx-auto mt-2 text-gray-600">
            Hear directly from our students and discover how our courses have
            helped them achieve their academic goals and succeed in competitive
            exams.
          </p>
          <div className="w-20 h-1 mx-auto bg-blue-600 rounded mt-7"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((text, index) => (
            <div
              key={index}
              className="relative p-6 overflow-hidden text-gray-800 duration-500 ease-in-out bg-white shadow-sm cursor-pointer rounded-xl hover:shadow-lg hover:shadow-blue-400 border-[1px] border-slate-300 hover:scale-105"
            >
              <div className="absolute text-3xl text-blue-800 select-none top-4 left-4">
                “
              </div>
              <p className="relative z-10 mt-4 text-sm font-semibold leading-relaxed sm:text-base ">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16">
        <h1 className="pt-10 text-xl font-bold text-center md:text-2xl lg:text-3xl">
          Scholarships
        </h1>
        <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded"></div>
        <div className="p-5 my-3">
          <Banner />
        </div>
      </div>
      <Form
        contactref={contactref}
        userdata={userdata}
        setuserdata={setuserdata}
        save={save}
      />
      <Footer />
    </div>
  );
}
