import "./Details.scss";
import { nanoid } from "nanoid";
import { CVDetails } from "../types";

type Props = {
  data: CVDetails;
};

const Details = ({ data: { summary, experience, education } }: Props) => {
  return (
    <section className="cv-details">
      <h2>Summary</h2>
      <>
        {" "}
        {summary.map((summary) => (
          <p className="sumText">{summary}</p>
        ))}
      </>
      <h2>Work Experience</h2>
      <ul>
        {experience.map((experience) => (
          <li key={nanoid()} className="details-experience">
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
        {education.map((education) => (
          <li key={nanoid()}>{education}</li>
        ))}
      </ul>
    </section>
  );
};

export { Details };
