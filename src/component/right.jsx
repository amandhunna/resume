import React from "react";
const data = {
  name: "AMANJOT SINGH",
  position: "Full Stack Developer",
  objective: {
    className: "objective",
    title: "OBJECTIVE",
    objective: "Work for continuous growth and learning"
  },
  workEx: {
    className: "workEx",
    title: "WORK EXPERIENCE",
    org: [
      {
        period:
          "July 2018 - Present: Working with Successive Technologies as an Associate software engineer",
        title:
          "Working with Successive Technologies as an Associate software engineer",
        responsibilities: [
          "Handle front-end and backend of the apps",
          "Discuss and suggest the required changes",
          "Introduce new tools and techniques to improve existing practices"
        ]
      },
      {
        period:
          "2017 ( JUL - OCT): Radical Robots Pvt. Ltd Application development/software maintenance",
        title:
          "Radical Robots Pvt. Ltd Application development/software        maintenance",
        responsibilities: [
          "Develop new features to the java based app",
          "Maintain the previously build modules"
        ]
      }
    ]
  },
  education: {
    title: "EDUCATION",
    standard: [
      {
        period: "2014 - 2018",
        detail: [
          "Bachelor of Technology in Information Technology",
          "Guru Gobind Singh Indraprastha University",
          "(Guru Tegh Bahadur Institute of Technology)",
          "Percentage: 72%"
        ]
      },
      {
        period: "2012 - 2013",
        detail: [
          "XII (Senior Secondary), CBSE Board (Guru Harkrishan Public School",
          "Percentage: 65.80%"
        ]
      },
      {
        period: "2010 - 2011",
        detail: [
          "X (Secondary), CBSE Board (Guru Harkrishan Public School)",
          "Percentage: 72.20%"
        ]
      }
    ]
  },
  skills: {
    title: "SKILLS",
    skillSet: [
      "React",
      "React bootstrap",
      "Git",
      "MongoDB",
      "Node",
      "Apollo",
      "Meteor",
      "using multiple util libraries",
      "aws lambda"
    ]
  },
  project: {
    title: "PROJECTS",
    list: [
      "Chat-frontend: Developed a fronted of the chat app and used cometchat-pro for the chat services",
      "React-demo: Developed a demo app to learn and hands on practice of react basics",
      "ProfileIntro: Using this I have created this resume. It uses pure html and css. Also implemented this using react",
      "Express: Building the backend of the chat app using express and mongodb",
      "Score-keeper: Developed this application using meteor (a js full stack framework) and used mongodb for the db",
      "Company management: This project is developed using java (javafx) programming language to demonstrate the use of programming paradigms.",
      "Arduino: The project is built to learn key concepts of IoT and data visualization and to collect data from environment and controlling hardware."
    ]
  },
  trainingAndCertificates: {
    title: "TRAININGS/CERTIFICATIONS",
    list: [
      "Done master communication from Scientology",
      "Done IOT training from Delhi Technological University.",
      "Done Java training from HCL CDC.",
      "Done Cloud Computing from HP."
    ]
  },
  achievement: {
    title: "ACHIEVEMENTS",
    list: [
      "Achieved 95.15% competitive profile at HackerEarth in java programming.",
      "Silver medalist at SoloLearn"
    ]
  }
};

export default function right() {
  return (
    <div className="right">
      <header>
        <h1>{data.name}</h1>
        <h3>{data.position}</h3>
      </header>
      <div className={data.objective.className}>
        <h4>{data.objective.title}</h4>
        <p>{data.objective.objective}</p>
      </div>
      <div>
        <h4>{data.workEx.title}</h4>
        <div>
          {data.workEx.org.map(org => (
            <div className="spread">
              <p className="period">{org.period}</p>
              <div className="radio">
                {/* <p>{org.title}</p> */}
                <ul>
                  {org.responsibilities.map(responsibility => (
                    <li>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>{data.education.title}</h4>

        <div className="radio">
          <ul>
            {data.education.standard.map(standard => (
              <li className="spread">
                <p className="period">{standard.period}</p>
                <div className="flex-column">
                  {standard.detail.map(detail => (
                    <p>{detail}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4>{data.skills.title}</h4>
        <div className="spread skillSet">
          {data.skills.skillSet.map(skillType => (
            <span>{skillType}</span>
          ))}
        </div>
      </div>
      <div className="project">
        <h4>{data.project.title}</h4>
        <div className="radio">
          <ul>
            {data.project.list.map(project => (
              <li>{project}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4>{data.trainingAndCertificates.title}</h4>
        <div className="radio">
          <ul>
            {data.trainingAndCertificates.list.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4>{data.achievement.title}</h4>
        <div className="radio">
          <ul>
            {data.achievement.list.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
