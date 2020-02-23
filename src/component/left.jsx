import React from "react";

const data = {
  personalInfo: {
    className:"left-header",
    title: "Personal Information",
    detailedList: [
      { type: "D.O.B.:", info: "October 05, 1995" },
      { type: "Known Languages:", info: "English, Hindi and Punjabi" }
    ]
  },
  contact: {
    className:"left-header",
    title: "Contact",
    detailedList: [
      { type: "Phone:", info: "+91 7042-458-977" },
      {
        type: "Mail:",
        link: "mailto:amanjotsingh260@gmail.com",
        info: "amanjotsingh260@gmail.com"
      }
    ]
  },
  activitiesAndHobbies: {
    className:"left-header",
    title: "ACTIVITIES/HOBBIES",
    list: ["Attending tech talks.", "Spending time with family and friends."]
  },
  home: {
    className:"left-header",
    listClass:"left-header",
    title: "Area, Nationality",
    list: ["New Delhi, Delhi, India"]
  },
  workSample: {
    title: "WORK SAMPLES",
    detailedList: [
      {
        className: "clickable",
        info: "amanjotsinghdhunna",
        type: "Github:",
        onClick: () => window.open("https://github.com/amanjotsinghdhunna")
      }
    ]
  },
  socialMedia: {
    title: "SOCIAL MEDIA",
    detailedList: [
      {
        className: "clickable",
        info: "LinkedIn:",
        type: "amanjot-singh-398731131:",
        onClick: () =>
          window.open("https://linkedin.com/in/amanjot-singh-398731131")
      }
    ]
  }
};
export default function Left() {
  return (
    <div className="left">
      <div className="profileImage">
        <img src="./profileImage.jpeg" alt="" />
      </div>
      <div>
        <p className="left-header">Personal Information</p>
        <p>
          <strong>D.O.B:</strong> <span>October 05,1995 </span>
        </p>
        <p>
          <strong>Known Languages:</strong>
          <span>English, Hindi and Punjabi</span>
        </p>
      </div>
      <div>
        <p className="left-header">Contact</p>
        <p>
          <strong>Phone:</strong>
          <span>+91 7042-458-977</span>
        </p>
        <p>
          <strong>Mail:</strong>
          <span>
            <a href="mailto:amanjotsingh260@gmail.com">
              amanjotsingh260@gmail.com
            </a>
          </span>
        </p>
      </div>
      <div>
        <p className="left-header">ACTIVITIES/HOBBIES</p>
        <p>Attending tech talks</p>
        <p>Spending time with family and friends</p>
      </div>
      <div>
        <p className="left-header">Area, Nationality</p>
        <p>New Delhi, Delhi, India</p>
      </div>
      <div>
        <p className="left-header">SOCIAL MEDIA/WORK SAMPLES</p>
        <p
          onclick={window.open("https://github.com/amanjotsinghdhunna")}
          className="clickable"
        >
          <strong>Github:</strong>
          <span>amanjotsinghdhunna</span>
        </p>
        <p
          onclick={window.open(
            "https://linkedin.com/in/amanjot-singh-398731131"
          )}
          className="clickable"
        >
          <strong>LinkedIn:</strong>
          <span>amanjot-singh-398731131</span>
        </p>
        <p>or</p>
        <p>scan the below code</p>
      </div>
      <div className="qrCode">
        <img src="./linkdnqr.png" alt="noImageAvailable" />
      </div>
    </div>
  );
}
