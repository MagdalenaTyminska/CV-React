import { nanoid } from "nanoid";
import "./App.scss";

interface Experience {
  year: string;
  position: string;
  description: string[];
}

interface Contacts {
  tel: string;
  mail: string;
}

interface Languages {
  language: string;
  level: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
  contacts: Contacts;
  techSkills: string[];
  softSkills: string[];
  languages: Languages[];
}

const cvData: CVData = {
  photo: "src/assets/photo.jpg",
  name: "Magdalena",
  lastName: "Tymińska",
  position: "Junior Frontend Developer",
  experience: [
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
    {
      year: "10.2023 - 01.2024",
      position: "Content publisher",
      description: ["1"],
    },
  ],
  education: [
    "Technik Administracyji Proedukacja",
    "V LO im. Władysława Broniewskiego",
  ],
  contacts: { tel: "530-456-919", mail: "magdalena.tyminska@mailmix.pl" },
  techSkills: ["React", "JavaScript", "HTML", "CSS", "GIT"],
  softSkills: ["Teamwork", "Time management", "Planning"],
  languages: [
    { language: "English", level: "B1" },
    { language: "Polish", level: "native" },
  ],
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
          <section>
            <a href="tel:+485304569191"> {cvData.contacts.tel}</a>
            <a href="mailto:magdalena.bonk@mailmix.pl">
              {cvData.contacts.mail}
            </a>
          </section>
          <h2>Profile</h2>
          <section>
            <a href="https://github.com/MagdalenaTyminska">
              github.com/MagdalenaTyminska
            </a>
            <a href="https://www.linkedin.com/in/mtyminska/">
              linkedin.com/in/mtyminska
            </a>
          </section>
          <h2>Tech skills</h2>
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
                <strong>
                  {language.language} - {language.level}
                </strong>
              </li>
            ))}
          </ul>
        </aside>
        <section className="cv-details">
          <h2>Summary</h2>
          <p>I am starting my adventure with frontend development.</p>
          <p>
            Currently I am improving my skills in JavaScript (React), HTML and
            CSS. I would like to connect my future with developing web
            applications. My experience in trade and contact with customers can
            be helpful in future work.
          </p>

          <h2>Work Experience</h2>
          <ul>
            {cvData.experience.map((experience) => (
              <li key={nanoid()}>
                <strong>{experience.year}</strong> - {experience.position}
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
      </main>
    </>
  );
}

export default App;
