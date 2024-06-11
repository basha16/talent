import Link from "next/link";
import React from "react";
// Define your data

const DeveloperComponent = ({ data }: any) => {
  console.warn(data?.href);
  return (
    <div className="col-lg-4 mb-4">
      <Link prefetch href={data?.href}>
        <div className="border rounded px-2">
          <div className="d-flex border-bottom py-2 align-items-centerr">
            <img className="h-[24px] me-2" src={data.image} alt="" />
            <h4 className="text-[18px]">{data.title}</h4>
          </div>

          <div className="row py-2">
            <div className="col-6 py-3 text-center border-end">
              <h1 className="text-blue Poppins-SemiBold text-[36px]">
                {data.number1}
              </h1>
              <h6 className="text-[16px]">{data.label1}</h6>
            </div>
            <div className="col-6 py-3 text-center">
              <h1 className="text-dark Poppins-SemiBold text-[36px]">
                {data.number2}
              </h1>
              <h6 className="text-[16px]">{data.label2}</h6>
            </div>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
};

const developersData = [
  {
    image: "image/python.png",
    title: "Python Developer",
    number1: 59,
    label1: "Men",
    number2: 38,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },

  {
    image: "image/Angularicon.png",
    title: "Angular Developer",
    number1: 52,
    label1: "Men",
    number2: 40,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },

  {
    image: "image/java.png",
    title: "Java Developer",
    number1: 50,
    label1: "Men",
    number2: 32,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },

  {
    image: "image/graphic.png",
    title: "UX|UI Designer",
    number1: 60,
    label1: "Men",
    number2: 39,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },
  {
    image: "image/python.png",
    title: "Python Developer",
    number1: 59,
    label1: "Men",
    number2: 38,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },

  {
    image: "image/Angularicon.png",
    title: "Angular Developer",
    number1: 52,
    label1: "Men",
    number2: 40,
    label2: "WoMen",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },

  {
    image: "image/java.png",
    title: "Java Developer",
    number1: 50,
    label1: "Men",
    number2: 32,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },

  {
    image: "image/graphic.png",
    title: "UX|UI Designer",
    number1: 60,
    label1: "Men",
    number2: 39,
    label2: "Women",
    slug: "pythonDeveloper",
    href: "/TeamMember03",
  },
  // Add more objects as needed
];
export default function teamCards() {
  return (
    <div className="row">
      {developersData.map((developer, index) => (
        <DeveloperComponent key={index} data={developer} />
      ))}
    </div>
  );
}
