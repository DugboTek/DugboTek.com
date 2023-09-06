import React, { useState, useEffect } from "react";
import "../css/resume.css";
import robot from "../assets/images/robot.jpeg";
import formula from "../assets/images/formula.jpg";

const Resume = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredDetails, setHoveredDetails] = useState(null);

  const roboticsDetail = (
    <div>
      <div className="detailContainer">
        <div className="detailHeader">
          <h1>FIRST Robotics Competition</h1>
        </div>
      </div>
      <div className="detailDate">August 2016 / May 2020</div>
      <div className="detailContent">
        <div className="detailImageCont">
          <div className="detailImage">
            <img src={robot} alt="robot" />
          </div>
        </div>
        <div className="roleCont">
          <a>Role</a>
          <div className="role">Programming & Electrical Captain</div>
        </div>
        <p>
          Programming & Electrical Captain - Wired the robot's electrical
          system, led Java code development for the robot using GIT version
          control, and provided meaningful additions to the design process of
          our robot.", "3rd Place World Champions, FRC Team 1939 Outstanding
          Achievement Award, Drive Team Award", "World Championships Most
          Valuable Person",
        </p>
      </div>
    </div>
  );
  const formulaSAEDetail = (
    <div>
      <div className="detailContainer">
        <div className="detailHeader">
          <h1>Formula SAE Nova Racing</h1>
        </div>
      </div>
      <div className="detailDate">August 2016 / May 2020</div>
      <div className="detailContent">
        <div className="detailImageCont">
          <div className="detailImage">
            <img src={formula} alt="robot" />
          </div>
        </div>
        <div className="roleCont">
          <a>Role</a>
          <div className="role">Driver Controls Lead</div>
        </div>
        <p>
          In my capacity as the Driver Controls Subsystem Lead, I led the carbon
          fiber manufacturing process, ensuring the creation of lightweight yet
          durable components crucial for our race car. Additionally, I took
          charge of designing pivotal driver-interfacing elements such as the
          steering wheel, pedals, and seat, with a strong focus on functionality
          and ergonomic design. Beyond these responsibilities, I expanded my
          skill set by gaining proficiency in machining techniques within our
          workshop. This holistic approach contributed to our team's notable 2nd
          place finish at the 2022 Michigan International Speedway FSAE
          competition, highlighting the positive impact of both my manufacturing
          leadership and versatile abilities.
        </p>
      </div>
    </div>
  );
  const cyberPatriotDetail = <div> cyberPatriot</div>;
  const sapientDetail = <div> sapient</div>;
  const bearMeUpDetail = <div> bearMeUp</div>;
  const researchAssistantDetail = <div> researchAssistant</div>;
  const privateWebDevDetail = <div> privateWebDev</div>;
  const yepKCDetail = <div> yepKC</div>;
  const communityAmericaDetail = <div> communityAmerica</div>;
  const classroomSupportDetail = <div> classroomSupport</div>;
  const educationDetail = <div> education</div>;

  useEffect(() => {
    if (hoveredSection != null) {
      console.log("hovered section", hoveredSection);
      if (hoveredSection.id === "education") {
        setHoveredDetails(educationDetail);
      }
      if (hoveredSection.id === "firstRobotics") {
        setHoveredDetails(roboticsDetail);
      }
      if (hoveredSection.id === "formulaSAE") {
        setHoveredDetails(formulaSAEDetail);
      }
      if (hoveredSection.id === "cyberPatriot") {
        setHoveredDetails(cyberPatriotDetail);
      }
      if (hoveredSection.id === "sapient") {
        setHoveredDetails(sapientDetail);
      }
      if (hoveredSection.id === "bearMeUp") {
        setHoveredDetails(bearMeUpDetail);
      }
      if (hoveredSection.id === "researchAssistant") {
        setHoveredDetails(researchAssistantDetail);
      }
      if (hoveredSection.id === "privateWebDev") {
        setHoveredDetails(privateWebDevDetail);
      }
      if (hoveredSection.id === "yepKC") {
        setHoveredDetails(yepKCDetail);
      }
      if (hoveredSection.id === "communityAmerica") {
        setHoveredDetails(communityAmericaDetail);
      }
      if (hoveredSection.id === "classroomSupport") {
        setHoveredDetails(classroomSupportDetail);
      }
    }
  }, [hoveredSection]);

  const EducationSections = [
    {
      date: "May 2024",
      id: "education",
      content: `Villanova University - PA - BS Computer Engineering / Mechatronics Minor`,
    },
  ];

  const leadershipSections = [
    {
      id: "firstRobotics",
      title: "FIRST Robotics Competition ",
      date: "August 2016 / May 2020",
      content: [
        "Programming & Electrical Captain - Wired the robot's electrical system, led Java code development for the robot using GIT version control, and provided meaningful additions to the design process of our robot.",
        "3rd Place World Champions, FRC Team 1939 Outstanding Achievement Award, Drive Team Award",
        "World Championships Most Valuable Person",
      ],
    },
    {
      id: "formulaSAE",
      title: "Formula SAE- Nova Racing",
      date: "February 2021 / Present",
      content: [
        "Driver Controls Subsystem Lead",
        "Designed, manufactured, and validated parts for formula-style race car to compete in a collegiate competition.",
        "2022 Michigan International Speedway FSAE competition 2nd place overall out of 99 international teams.",
      ],
    },
    {
      id: "cyberPatriot",
      title: "CyberPatriot / Security Competition",
      content: [
        "Competed as a student in the CyberPatriot competition where I work with my team to identify and remove security vulnerabilities on Windows, Linux, and Cisco Server Systems.",
        " Worked with my team to reach the national competition where we received a high level of points",
      ],
    },
  ];
  const employmentSections = [
    {
      id: "sapient",
      title: "Publicis Sapient Software Engineer Intern",
      date: "June 2023 / August 2023",
      content: `
      Led full stack development of an E-Commerce car parts web app for Polaris, Utilized AWS CloudSearch, Lambda, Aurora, MySQL, GraphQL, and React. I Led a team of eight intern developers as the only Full Stack Engineer. I learned architecture design and CICD in an Agile software development cycle.`,
    },

    {
      id: "bearMeUp",
      title: "BearMeUp Software Frontend Engineering",
      date: "June 2022 / August 2022",
      content: `
      Led the development of an IOS therapy app using Swift UI. Managed GIT repositories & UI/UX Design.`,
    },
    {
      id: "researchAssistant",
      title: "Research Assistant: Machine Learning",
      date: "January 2020 / August 2021",
      content: `
      Match Research Program for First-Year Students provides opportunities for motivated first-year undergraduates to pursue undergraduate research in the spring semester.
      Worked w/ Dr. Xun Jiao to develop applications of Hyper Dimensional Computing to improve computational efficiency`,
    },
    {
      id: "privateWebDev",
      title: "Private Web Development",
      date: "May 2021 / August 2021",
      content: `Using HTML/CSS/REACT JS I worked with a local business to develop their company website.`,
    },
    {
      id: "yepKC",
      title: "Sandy Kempers YEP KC",
      date: "May 2020 / August 2020",
      content: `
      Designed to select the highest potential leader entrepreneurs in high school, YEPKC matches them with Kansas City's fastest-growing, most dynamic start-ups and high-growth companies.
      Worked with a cohort to develop a conference to connect students and entrepreneurs of color with resources.`,
    },
    {
      id: "communityAmerica",
      title: "Community America Advisory Board",
      date: "September 2019 / February 2020",
      content: `
      Designed & Developed FAFSA help tool for Community America Credit Union.`,
    },

    {
      id: "classroomSupport",
      title: "Classroom Support Technician",
      date: "8hr/Week / Present",
      content: `
      Working with full-time staff to assist Professors with classroom technology issues.`,
    },
  ];

  return (
    <>
      <div className="content-container">
        <div className="resume-container">
          <div className="left-section">
            <div className="sectionhead">Education</div>
            {EducationSections.map((section, index) => (
              <div
                key={index}
                className="resume-section"
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="resume-section-title"></div>
                <div className="education-content">
                  <p>{section.content}</p>
                  <h4>{section.date}</h4>
                </div>
              </div>
            ))}
            <div className="sectionhead">Leadership & Involvement</div>

            {leadershipSections.map((section, index) => (
              <div
                key={index}
                className="resume-section"
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="resume-section-title">
                  <h3>{section.title}</h3>
                  <h4>{section.date}</h4>
                </div>
                <div className="resume-section-content">
                  <ul>
                    {section.content.map((bulletPoint, bulletIndex) => (
                      <li key={bulletIndex}>{bulletPoint}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="sectionhead">Employment</div>
            {employmentSections.map((section, index) => (
              <div
                key={index}
                className="resume-section"
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div className="resume-section-title">
                  <h3>{section.title}</h3>
                  <h4>{section.date}</h4>
                </div>
                <div className="resume-section-content">
                  <ul>
                    <li>{section.content}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <div className="hovered-section">
            {hoveredSection !== null && (
              <div className="detailed-view">{hoveredDetails}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
