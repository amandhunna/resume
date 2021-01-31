import React from "react";

const qrCode =  <div className="qrCode">
<img src="./linkdnqr.png" alt="noImageAvailable" />
</div>


const data = [
  {
    type: "contact",
    className: "v3-right-content",
    dataClass: "v3-content",
    title: "Contact",
    detailedList: [
      { type: "Phone:", info: ["+91 7042-458-977"] },
      {
        type: "Mail:",
        link: "mailto:amanjotsingh260@gmail.com",
        info: ["amanjotsingh260@gmail.com"],
      },
    ],
  },
  {
    type: "personalInfo",
    className: "v3-right-content",
    dataClass: "v3-left-content",
    title: "Personal Information",
    detailedList: [
      { type: "D.O.B.:", info: ["October 05, 1995"] },
      { type: "Known Languages:", info: ["English, Hindi and Punjabi"] },
    ],
  },
  {
    type: "activitiesAndHobbies",
    className: "v3-right-content",
    dataClass: "v3-left-content",
    title: "ACTIVITIES/HOBBIES",
    list: [
      "Sharing coding content on Instagram and Medium",
      "Spending time with family and friends.",
      "Attending tech talks.",
    ],
  },
  {
    type: "home",
    className: "v3-right-content",
    listClass: "v3-right-content",
    dataClass: "v3-left-content",
    title: "Area, Nationality",
    list: ["New Delhi, Delhi, India"],
  },
  {
    type: "workSample",
    className: "v3-right-content",
    dataClass: "v3-left-content",
    title: "WORK SAMPLES/BLOGS",
    detailedList: [
      {
        className: "clickable",
        info: ["amanjotsinghdhunna"],
        type: "Github:",
        onClick: () => window.open("https://github.com/amanjotsinghdhunna"),
      },
      {
        className: "clickable",
        info: ["@amanjotsingh260"],
        type: "Medium:",
        onClick: () => window.open("https://medium.com/@amanjotsingh260"),
      },

      {
        className: "clickable",
        info: ["amanjotsingh260"],
        type: "Hacker Earth:",
        onClick: () =>
          window.open("https://www.hackerearth.com/@amanjotsingh260"),
      },
    ],
  },
  {
    type: "socialMedia",
    className: "v3-right-content social-media",
    dataClass: "v3-left-content",
    title: "SOCIAL MEDIA",
    detailedList: [
      {
        className: "clickable",
        type: "Instagram:",
        info: ["amanjotsinghdhunna"],
        onClick: () =>
          window.open("https://www.instagram.com/amanjotsinghdhunna"),
      },
      {
        className: "clickable",
        type: "LinkedIn:",
        info: ["amanjot-singh-398731131"],
        onClick: () =>
          window.open("https://linkedin.com/in/amanjot-singh-398731131"),
      },
      {
        info: ["or"],
      },
      {
        info: ["scan the below code"],
      },
      {
        info: [qrCode],
      },
    ],
  },
  {
    type: "portfolio",
    className: "v3-right-content",
    dataClass: "v3-left-content",
    title: "PORTFOLIO",
    detailedList: [
      {
        info: ["To know more about me you can visit my portfolio"],
      },
      {
        className: "clickable",
        type: "Portfolio:",
        info: ["amanjotsinghdhunna.netlify.app"],
        href: "https://amanjotsinghdhunna.netlify.app",
        onClick: () =>
          window.open("https://amanjotsinghdhunna.netlify.app"),
      },
    ],
  },
];
export default function Right() {
  return (
    <div className="v3-right">
      {data.map(
        ({ className, dataClass, title, detailedList = [], list = [] }) => (
          <div className="v3-right">
            <p className={className}>{title}</p>
            {detailedList.map(({ className, onClick = null, type, info }) => (
              <p className={dataClass}>
                <strong>{type}</strong>
                {info.map((item) => (
                  <a
                    className={className}
                    onClick={() => onClick && onClick()}
                  >
                    {item}
                  </a>
                ))}
              </p>
            ))}
            {list.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        )
      )}
      </div>
  );
}
