import { nanoid } from "nanoid";

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: "src/assets/photo.jpg",
  name: "Magdalena",
  lastName: "Tymińska",
  position: "Junior Frontend Developer",
  experience: [{ year: 2023, description: "Content publisher" }],
  education: ["V LO w Katowicach"],
};

function App() {
  return (
    <>
      <main>
        <header>
          <h1>
            {cvData.name} {cvData.lastName}
          </h1>
        </header>
        <aside>
          <h2>Personal data</h2>
          <img
            src={cvData.photo}
            alt={`${cvData.name}${cvData.lastName} profile photo`}
          />
          <p>
            {cvData.name}
            {cvData.lastName}
          </p>
          <small>{cvData.position}</small>
        </aside>
        <section>
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
