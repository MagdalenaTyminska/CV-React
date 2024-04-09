import "./Personal.scss";
import { nanoid } from "nanoid";
import { CVPersonal } from "../types";

type Props = {
  data: CVPersonal;
};

const Personal = ({
  data: { contacts, techSkills, softSkills, languages },
}: Props) => {
  return (
    <aside className="cv-personal">
      <h2>Contacts</h2>
      <p>
        <a href="tel:+485304569191"> {contacts.c}</a>{" "}
      </p>
      <p>
        {" "}
        <a href="mailto:magdalena.bonk@mailmix.pl">{contacts.e}</a>
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
        {techSkills.map((skill) => (
          <li key={nanoid()}>{skill}</li>
        ))}
      </ul>
      <h2>Soft skills</h2>
      <ul>
        {softSkills.map((skill) => (
          <li key={nanoid()}>{skill}</li>
        ))}
      </ul>
      <h2>Languages</h2>
      <ul>
        {" "}
        {languages.map((language) => (
          <li key={nanoid()}>
            {language.language} - {language.level}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export { Personal };
