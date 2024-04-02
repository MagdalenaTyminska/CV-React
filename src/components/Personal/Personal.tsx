import "./Personal.scss";
import { nanoid } from "nanoid";

interface Contacts {
  c: string;
  e: string;
}

interface Languages {
  language: string;
  level: string;
}

interface CVData {
  contacts: Contacts;
  techSkills: string[];
  softSkills: string[];
  languages: Languages[];
}

const cvData: CVData = {
  contacts: { c: "530-456-919", e: "magdalena.tyminska@mailmix.pl" },
  techSkills: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Jira",
    "GIT",
    "Visual Studio Code",
  ],
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
};

const Personal = () => {
  return (
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
  );
};

export { Personal };
