import "./Agree.scss";

interface CVData {
  agree: string;
}

const cvData: CVData = {
  agree: `II agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act.
  `,
};

const Agree = () => {
  return <section className="cv-agree">{cvData.agree}</section>;
};

export { Agree };
