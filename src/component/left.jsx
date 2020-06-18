import React from "react";
/* import { SketchPicker } from "react-color"; */
import ColorDropper from "./colorDropper";
const data = [
  {
    type: "personalInfo",
    className: "left-header",
    dataClass: "left-content",
    title: "Personal Information",
    detailedList: [
      { type: "D.O.B.:", info: ["October 05, 1995"] },
      { type: "Known Languages:", info: ["English, Hindi and Punjabi"] },
    ],
  },
  {
    type: "contact",
    className: "left-header",
    dataClass: "left-content",
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
    type: "activitiesAndHobbies",
    className: "left-header",
    dataClass: "left-content",
    title: "ACTIVITIES/HOBBIES",
    list: [
      "Attending tech talks.",
      "Sharing coding content on Instagram and Medium",
      "Spending time with family and friends.",
    ],
  },
  {
    type: "home",
    className: "left-header",
    listClass: "left-header",
    dataClass: "left-content",
    title: "Area, Nationality",
    list: ["New Delhi, Delhi, India"],
  },
  {
    type: "workSample",
    className: "left-header",
    dataClass: "left-content",
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
    className: "left-header social-media",
    dataClass: "left-content",
    title: "SOCIAL MEDIA",
    detailedList: [
      {
        className: "clickable",
        type: "Instagram:",
        info: ["singh_amanjot.code"],
        onClick: () =>
          window.open("https://www.instagram.com/singh_amanjot.code/"),
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
    ],
  },
];
export default function Left() {
  return (
    <div className="left">
      <div className="profileImage">
        <img src="./profileImage.jpeg" alt="" />
      </div>
      {data.map(
        ({ className, dataClass, title, detailedList = [], list = [] }) => (
          <div>
            <p className={className}>{title}</p>
            {detailedList.map(({ className, onClick = null, type, info }) => (
              <p className={dataClass}>
                <strong>{type}</strong>
                {info.map((item) => (
                  <span
                    className={className}
                    onClick={() => onClick && onClick()}
                  >
                    {item}
                  </span>
                ))}
              </p>
            ))}
            {list.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        )
      )}
      {/*   <ColorDropper /> */}
      <div className="qrCode">
        <img src="./linkdnqr.png" alt="noImageAvailable" />
      </div>
    </div>
  );
}
