import { nanoid } from "nanoid";
import "./App.scss";

interface Contacts {
  c: string;
  e: string;
}

interface Languages {
  language: string;
  level: string;
}

interface Experience {
  year: string;
  position: string;
  description: string[];
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  contacts: Contacts;
  techSkills: string[];
  softSkills: string[];
  languages: Languages[];
  summary: string[];
  experience: Experience[];
  education: string[];
  agree: string;
}

const cvData: CVData = {
  photo: "src/assets/photo.jpg",
  name: "Magdalena",
  lastName: "Tymińska",
  position: "Junior Frontend Developer",
  contacts: { c: "530-456-919", e: "magdalena.tyminska@mailmix.pl" },
  techSkills: ["React", "JavaScript", "HTML", "CSS", "GIT", "VSC"],
  softSkills: [
    "Teamwork",
    "Time management",
    "Planning",
    "Commited",
    "Adaptability",
    "Flexibility",
  ],
  languages: [
    { language: "English", level: "B1" },
    { language: "Polish", level: "native" },
  ],
  summary: [
    "I am starting my adventure with frontend development.",
    `Currently I am improving my skills in JavaScript (React), HTML and
  CSS. I would like to connect my future with developing web
  applications. My experience in trade and contact with customers can
  be helpful in future work.`,
  ],
  experience: [
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher · Webanywhere · full-time",
      description: [`editing old content`, `repurposing new content`],
    },
    {
      year: "10.2021 - 01.2023",
      position: `Sales Representative · CSM Ingredients · Full-time`,
      description: [
        `sale of food products for the confectionery and bakery industry`,
        `preparation of commercial offers`,
        `acquiring new customers`,
        `building and maintaining relationships`,
        `day planning and analysis`,
      ],
    },
    {
      year: "07.2021 - 10.2021",
      position: `Sales Representative · Maspex · Full-time`,
      description: [
        `sale of FMCG products`,
        `merchandising`,
        `building and maintaining relationships`,
      ],
    },
    {
      year: "04.2019 - 07.2021",
      position: `Sales Representative · Savpol Sp. z o. o. Sp. k. · Full-time`,
      description: [
        `sale of food products for the confectionery and bakery industry`,
        `preparation of commercial offers`,
        `acquiring new customers`,
        `building and maintaining relationships`,
        `day planning and analysis`,
      ],
    },
    {
      year: "10.2017 - 04.2019",
      position: `Sales Representative · Alsen Marketing · Full-time`,
      description: [
        `taking care of partner stores of the Kakto chain`,
        `building long-term relationships with clients`,
        `sale of IT products`,
        `after-sales service`,
      ],
    },
    {
      year: "11.2015 - 04.2017",
      position: `Consultant · Alsen Marketing · Full-time`,
      description: [`retail customer service`],
    },
    {
      year: "10.2013 - 11.2015",
      position: `Administrative and operational specialist · Inpost · Full-time`,
      description: [`receiving and issuing shipments`],
    },
  ],
  education: [
    "Technik Administracyji Proedukacja",
    "V LO im. Władysława Broniewskiego",
  ],
  agree: `II agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act.
  `,
};

function App() {
  return (
    <>
      <main className="cv-main">
        <header className="cv-header">
          <h1>
            {cvData.name} {cvData.lastName}
          </h1>
          <small>{cvData.position}</small>
          <img
            className="cv-photo"
            src={cvData.photo}
            alt={`${cvData.name}${cvData.lastName} profile photo`}
          />
        </header>
        <aside className="cv-personal">
          <h2>Contacts</h2>
          <p>
            <a href="tel:+485304569191"> {cvData.contacts.c}</a>{" "}
          </p>
          <p>
            {" "}
            <a href="mailto:magdalena.bonk@mailmix.pl">{cvData.contacts.e}</a>
          </p>
          <h2>Profiles</h2>

          <p>
            <a href="https://github.com/MagdalenaTyminska">
              github.com/MagdalenaTyminska
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/mtyminska/">
              linkedin.com/in/mtyminska
            </a>
          </p>
          <h2>Technical skills</h2>
          <ul>
            {cvData.techSkills.map((skill) => (
              <li key={nanoid()}>{skill}</li>
            ))}
          </ul>
          <h2>Soft skills</h2>
          <ul>
            {cvData.softSkills.map((skill) => (
              <li key={nanoid()}>{skill}</li>
            ))}
          </ul>
          <h2>Languages</h2>
          <ul>
            {" "}
            {cvData.languages.map((language) => (
              <li key={nanoid()}>
                {language.language} - {language.level}
              </li>
            ))}
          </ul>
        </aside>
        <section className="cv-details">
          <h2>Summary</h2>
          <>
            {" "}
            {cvData.summary.map((summary) => (
              <p>{summary}</p>
            ))}
          </>
          <h2>Work Experience</h2>
          <ul>
            {cvData.experience.map((experience) => (
              <li key={nanoid()}>
                <strong>
                  {experience.year} - {experience.position}
                </strong>
                <ul>
                  {experience.description.map((description) => (
                    <li>{description}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h2>Education</h2>
          <ul>
            {cvData.education.map((education) => (
              <li key={nanoid()}>{education}</li>
            ))}
          </ul>
        </section>
        <section className="cv-agree">{cvData.agree}</section>
      </main>
    </>
  );
}

export default App;
