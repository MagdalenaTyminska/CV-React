import "./Details.scss";
import { nanoid } from "nanoid";

interface Experience {
  year: string;
  position: string;
  description: string[];
}

interface CVData {
  summary: string[];
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
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
};

const Details = () => {
  return (
    <section className="cv-details">
      <h2>Summary</h2>
      <>
        {" "}
        {cvData.summary.map((summary) => (
          <p className="sumText">{summary}</p>
        ))}
      </>
      <h2>Work Experience</h2>
      <ul>
        {cvData.experience.map((experience) => (
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
        {cvData.education.map((education) => (
          <li key={nanoid()}>{education}</li>
        ))}
      </ul>
    </section>
  );
};

export { Details };
