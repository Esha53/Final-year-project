import React from "react";
import AboutImg from "../../assets/emg.jpg";
const About = () => {
  return (
    <div
      id="about"
      className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5"
    >
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center pl-32  text-blue-900 lg:text-start">
          About Us
        </h1>
        <p className="pt-4  text-black ">
          {" "}
          The Institute Guide app serve as a centralized platform designed to
          guide students in their search for computing education. By offering a
          user-friendly interface, the app will allow students to easily explore
          and compare various institutions based on key factors such as tuition
          fees, faculty qualifications, and available courses.{" "}
        </p>
        <p className=" text-black ">
          Students will have access to a comprehensive database that provides
          detailed information about each institution, making the
          decision-making process simpler and more transparent. Additionally,
          the app will include features for user reviews and ratings, enabling
          students to learn from the experiences of their peers. Overall, this
          app aims to empower students with the knowledge and support they need
          to make informed choices about their educational paths in the
          field of computing.
        </p>
      </div>
      <div className=" w-full pt-10  pl-24 lg:w-3/4">
        <img src={AboutImg} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
