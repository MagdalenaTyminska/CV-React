import { nanoid } from "nanoid";
import "./App.scss";

interface Experience {
  year: number;
  description: string;
}

interface Contacts {
  tel: string;
  mail: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
  contacts: Contacts;
}

const cvData: CVData = {
  photo: "src/assets/photo.jpg",
  name: "Magdalena",
  lastName: "Tymińska",
  position: "Junior Frontend Developer",
  experience: [{ year: 2023, description: "Content publisher" }],
  education: ["V LO w Katowicach"],
  contacts: { tel: "530-456-919", mail: "magdalena.tyminska@mailmix.pl" },
};

function App() {
  return (
    <>
      <main className="cv-main">
        <header className="cv-header">
          <small>{cvData.position}</small>
          <h1>
            {cvData.name} {cvData.lastName}
          </h1>
        </header>
        <aside className="cv-personal">
          <img
            className="cv-photo"
            src={cvData.photo}
            alt={`${cvData.name}${cvData.lastName} profile photo`}
          />
          <h2>Contacts</h2>
          <p>
            Phone: <a href="tel:+485304569191"> {cvData.contacts.tel}</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:magdalena.bonk@mailmix.pl">
              {cvData.contacts.mail}
            </a>
          </p>
        </aside>
        <section className="cv-details">
          <h2>Experience</h2>
          <ul>
            {cvData.experience.map((experience) => (
              <li key={nanoid()}>
                <strong>{experience.year}</strong> - {experience.description}
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
