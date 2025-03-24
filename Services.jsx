import React from "react";
import img from "../../assets/emg.jpg";
import ServicesCard from "../../layout/ServicesCard";
import { FaBuildingColumns } from "react-icons/fa6";
const Services = () => {
  const icon1 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon3 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon4 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon5 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  const icon6 = (
    <FaBuildingColumns size={35} className=" text-backgroundColor" />
  );
  return (
    <div className="   min-h-screen flex flex-col justify-center lg:px-10 px-5 pt-16 lg:pt-16">
      <div className=" flex flex-col  items-center lg:flex-row justify-between">
        <div>
          <p className=" text-2xl font-semibold  px-0 pr-40 py-1  pt-24  text-blue-800">
            {" "}
            What course are you looking for?
          </p>
          <h1 className=" text-5xl  font-semibold text-center py-0  pr-40 text-black">
            {" "}
            Discover our portals
          </h1>
        </div>
      </div>
      <div className="  flex flex-col  text-blue-800   lg:flex-row gap-5 pt-16">
        <ServicesCard
          icon={icon1}
          title="PhD"
          description="No act of kindness, no matter how small, is ever wasted.
            Think of giving not as a duty, but as a privilege. "
        />

        <ServicesCard
          icon={icon2}
          title="Bachelor's program"
          description=" We added a donated medicine service to our web app, 
            allowing users to donate, manage, and access available medicines efficiently for community support."
        />
        <ServicesCard
          icon={icon3}
          title="Master program"
          description=" Our web app enables sending donated medicines to
             those in need, ensuring efficient distribution and support for the community."
        />
      </div>

      <div>
        <h1 className=" text-5xl font-semibold  pt-44 py-11  px-4 text-black">
          {" "}
          Get more from Studyportals
        </h1>
      </div>
      <div className="  flex flex-col  text-blue-800 lg:flex-row gap-5 pt-10">
        <ServicesCard
          icon={icon4}
          title="Review program"
          description="Your opinion can have an impact on fellow students "
        />

        <ServicesCard
          icon={icon5}
          title="Compare program"
          description=" Our web app enables sending donated medicines to
             those in need, ensuring efficient distribution and support for the community."
        />

        <ServicesCard
          icon={icon6}
          title="Scholarship"
          description=" Our web app enables sending donated medicines to
             those in need, ensuring efficient distribution and support for the community. "
        />
      </div>
    </div>
  );
};
export default Services;
